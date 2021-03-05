import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import camundaExtensionModule from 'camunda-bpmn-moddle/lib';
import camundaModdle from 'camunda-bpmn-moddle/resources/camunda.json';
import tooltips from 'diagram-js/lib/features/tooltips';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import RobotModule from '../RobotModule';
import { clearSequenceFlow, renderSequenceFlow } from '../utils/bpmn';
import { ToggleSequenceFlowButton } from './ToggleSequenceFlowButton';

export const BPMNViewer = async (diagram: string) => {
  const model = new BpmnViewer({
    additionalModules: [camundaExtensionModule, RobotModule, tooltips],
    moddleExtensions: {
      camunda: camundaModdle,
    },
  });
  try {
    await model.importXML(diagram);
  } catch (e) {
    // nothing we can do
  }
  return model;
};

interface Props {
  activities?: any[];
  className?: string;
  diagramXML: string;
  style?: Record<string, string | number>;
}

const renderActivities = (viewer: any, activities: any[]) => {
  const counter: Record<string, number> = {};
  for (const activity of activities) {
    const id = activity.activityId;
    counter[id] = counter[id] ? counter[id] + 1 : 1;
  }

  const seen: Record<string, boolean> = {};
  const overlays = viewer.get('overlays');
  for (const activity of activities) {
    const id = activity.activityId;
    if (seen[id]) {
      continue;
    } else {
      seen[id] = true;
    }

    const overlay = document.createElement('span');
    overlay.innerText = `${counter[id]}`;
    overlay.className = 'badge';
    overlay.style.cssText = `
   background: lightgray;
   border: 1px solid #143d52;
   color: #143d52;
 `;
    overlays.add(id, {
      position: {
        bottom: 17,
        right: 10,
      },
      html: overlay,
    });
  }
};

const BPMN: React.FC<Props> = ({ activities, className, diagramXML, style }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const viewer: any = await BPMNViewer(diagramXML);
      if (ref.current !== null) {
        ref.current.innerHTML = '';
        viewer.attachTo(ref.current);
        const canvas = viewer.get('canvas');
        canvas.zoom('fit-viewport');
        renderActivities(viewer, activities ?? []);

        const toggleSequenceFlowButton = document.createElement('div');
        toggleSequenceFlowButton.style.cssText = `
          position: absolute;
          right: 15px;
          top: 15px;
        `;
        viewer._container.appendChild(toggleSequenceFlowButton);
        let sequenceFlow: any[] = [];
        ReactDOM.render(
          <React.StrictMode>
            <ToggleSequenceFlowButton
              onToggleSequenceFlow={(value: boolean) => {
                if (value) {
                  sequenceFlow = renderSequenceFlow(viewer, activities ?? []);
                } else {
                  clearSequenceFlow(sequenceFlow);
                }
              }}
            />
          </React.StrictMode>,
          toggleSequenceFlowButton
        );
      }
    })();
  }, [diagramXML]);

  return <div className={className} ref={ref} style={style} />;
};

export default BPMN;
