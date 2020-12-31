import { is } from 'bpmn-js/lib/util/ModelUtil';
import { BaseElement } from 'bpmn-moddle';
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import inherits from 'inherits';
import { append as svgAppend, create as svgCreate } from 'tiny-svg';

import Robot from './robot-framework.svg';

class RobotTaskRenderer {
  $inject: string[];
  eventBus: any;
  bpmnRenderer: any;

  constructor(eventBus: any, bpmnRenderer: any) {
    this.$inject = [];
    this.eventBus = eventBus;
    this.bpmnRenderer = bpmnRenderer;
    BaseRenderer.call(this, eventBus, 1500);
  }

  canRender(element: BaseElement) {
    return is(element, 'bpmn:ServiceTask') && element.id.match(/robot/i);
  }

  drawShape(parent: object, element: BaseElement) {
    this.bpmnRenderer.handlers['bpmn:Task'](parent, element);
    const gfx = svgCreate('image', {
      x: -1,
      y: -1,
      width: 32, // element.width,
      height: 32, //  element.height,
      href: Robot,
    });
    svgAppend(parent, gfx);
    return gfx;
  }
}

const factory = (eventBus: any, bpmnRenderer: any) => {
  const instance = new RobotTaskRenderer(eventBus, bpmnRenderer);
  inherits(instance, BaseRenderer);
  instance.$inject = ['eventBus', 'bpmnRenderer'];
  return instance;
};

export default factory;
