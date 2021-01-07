import { Activity, Point } from 'bpmn-moddle';
import { filter, forEach, map, uniqueBy } from 'min-dash';
import { query as domQuery } from 'min-dom';
import { createCurve } from 'svg-curves';
import { append as svgAppend, attr as svgAttr, create as svgCreate } from 'tiny-svg';

const FILL = '#52B415';

interface XY {
  x: number;
  y: number;
}

const getConnections = (activities: any[], elementRegistry: any): Activity[] => {
  const endTimesById: Map<string, any[]> = new Map();
  for (const activity of activities) {
    if (endTimesById.has(activity.activityId)) {
      const endTimes = endTimesById.get(activity.activityId) ?? [];
      endTimes.push(activity.endTime || 'n/a');
    } else {
      endTimesById.set(activity.activityId, [activity.endTime || 'n/a']);
    }
  }
  const elementById: Map<string, Activity> = new Map(
    map(activities, (activity: any) => {
      return [activity.activityId, elementRegistry.get(activity.activityId) as Activity];
    })
  );
  const getActivityConnections = (activityId: string): any[] => {
    const current = elementById.get(activityId);
    const currentEndTimes = endTimesById.get(activityId) ?? [];
    if (current) {
      const incoming = filter(current.incoming, (connection: any) => {
        const incomingEndTimes = endTimesById.get(connection.source.id) ?? [];
        return incomingEndTimes.length &&
          incomingEndTimes.reduce(
            (acc: boolean, iET: string) =>
              acc || currentEndTimes.reduce((acc_: boolean, cET: string) => acc_ || iET < cET, false),
            false
          );
      });
      const outgoing = filter(current.outgoing, (connection: any) => {
        const outgoingEndTimes = endTimesById.get(connection.source.id) ?? [];
        return outgoingEndTimes.length &&
          outgoingEndTimes.reduce(
            (acc: boolean, oET: string) =>
              acc || currentEndTimes.reduce((acc_: boolean, cET: string) => acc_ || oET > cET, false),
            false
          );
      });
      return [...incoming, ...outgoing];
    } else {
      return [];
    }
  };

  let connections: Activity[] = [];

  forEach(Array.from(elementById.keys()), (activityId: string) => {
    connections = uniqueBy('id', [...connections, ...getActivityConnections(activityId)]);
  });

  return connections;
};

const getMid = (shape: Point): XY => {
  return {
    x: shape.x + shape.width / 2,
    y: shape.y + shape.height / 2,
  };
};

const notDottedTypes = ['bpmn:SubProcess'];

const getDottedConnections = (connections: any[]): any[] => {
  let dottedConnections: any[] = [];

  connections.forEach(connection => {
    const { target } = connection as any;

    connections.forEach(c => {
      const { source } = c as any;

      if (source === target && !notDottedTypes.includes(source.type)) {
        dottedConnections.push({
          waypoints: [connection.waypoints[connection.waypoints.length - 1], getMid(target), c.waypoints[0]],
        });
      }
    });
  });

  return dottedConnections;
};

export const renderSequenceFlow = (viewer: any, activities: any[]) => {
  const registry = viewer.get('elementRegistry');
  const canvas = viewer.get('canvas');
  const layer = canvas.getLayer('processInstance', 1);
  const connections = getConnections(activities ?? [], registry);

  let defs = domQuery('defs', canvas._svg);
  if (!defs) {
    defs = svgCreate('defs');
    svgAppend(canvas._svg, defs);
  }

  const marker = svgCreate('marker');
  const path = svgCreate('path');

  svgAttr(marker, {
    id: 'arrow',
    viewBox: '0 0 10 10',
    refX: 7,
    refY: 5,
    markerWidth: 4,
    markerHeight: 4,
    orient: 'auto-start-reverse',
  });

  svgAttr(path, {
    d: 'M 0 0 L 10 5 L 0 10 z',
    fill: FILL,
    stroke: 'blue',
    strokeWidth: 0,
  });

  svgAppend(marker, path);
  svgAppend(defs, marker);

  for (const connection of connections) {
    svgAppend(
      layer,
      createCurve((connection as any).waypoints, {
        markerEnd: 'url(#arrow)',
        stroke: FILL,
        strokeWidth: 4,
      })
    );
  }
  const connections_ = getDottedConnections(connections);
  for (const connection of connections_) {
    svgAppend(
      layer,
      createCurve((connection as any).waypoints, {
        strokeDasharray: '1 8',
        strokeLinecap: 'round',
        stroke: FILL,
        strokeWidth: 4,
      })
    );
  }
};
