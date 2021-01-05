import { Activity, Point } from 'bpmn-moddle';
import { filter, forEach, map, uniqueBy } from 'min-dash';
import { query as domQuery } from 'min-dom';
import { createCurve } from 'svg-curves';
import { append as svgAppend, attr as svgAttr, create as svgCreate } from 'tiny-svg';

const FILL = '#52B415';

const OFFSET_TOP = -15,
  OFFSET_RIGHT = 15;

interface XY {
  x: number;
  y: number;
}

const getConnections = (activities: any[], elementRegistry: any): Activity[] => {
  const activityById: Map<string, any> = new Map(
    map(activities, (activity: any) => {
      return [activity.activityId, activity];
    })
  );
  const elementById: Map<string, Activity> = new Map(
    map(activities, (activity: any) => {
      return [activity.activityId, elementRegistry.get(activity.activityId) as Activity];
    })
  );
  const getActivityConnections = (activityId: string): any[] => {
    const element = elementById.get(activityId);
    if (element) {
      const incoming = filter(element.incoming, (connection: any) => !!activityById.get(connection.source.id)?.endTime);
      const outgoing = filter(element.incoming, (connection: any) => !!activityById.get(connection.source.id)?.endTime);
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

const getDottedConnections = (connections: any[]): any[] => {
  let dottedConnections: any[] = [];

  connections.forEach(connection => {
    const { target } = connection as any;

    connections.forEach(c => {
      const { source } = c as any;

      if (source === target) {
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
