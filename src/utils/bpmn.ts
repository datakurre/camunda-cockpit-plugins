import { Activity, Point } from 'bpmn-moddle';
import { filter, forEach, map, uniqueBy } from 'min-dash';
import { query as domQuery } from 'min-dom';
import { createCurve } from 'svg-curves';
import { append as svgAppend, attr as svgAttr, create as svgCreate, remove as svgRemove } from 'tiny-svg';

const FILL = '#52B415';

interface XY {
  x: number;
  y: number;
}

const getConnections = (activities: any[], elementRegistry: any): Activity[] => {
  const validActivity: Map<string, boolean> = new Map();
  const startTimesById: Map<string, any[]> = new Map();
  const endTimesById: Map<string, any[]> = new Map();
  const connectionDenyList: Set<string> = new Set();
  for (const activity of activities) {
    if (activity.endTime && !(activity.canceled && !activity.activityType.endsWith('Gateway'))) {
      validActivity.set(activity.activityId, true);
    }
    if (endTimesById.has(activity.activityId)) {
      const endTimes = endTimesById.get(activity.activityId) ?? [];
      endTimes.push(activity.endTime || 'Z');
    } else {
      endTimesById.set(activity.activityId, [activity.endTime || 'Z']);
    }
    if (startTimesById.has(activity.activityId)) {
      const startTimes = startTimesById.get(activity.activityId) ?? [];
      startTimes.push(activity.startTime || 'Z');
    } else {
      startTimesById.set(activity.activityId, [activity.startTime || 'Z']);
    }
  }
  const elementById: Map<string, Activity> = new Map(
    map(activities, (activity: any) => {
      const element = elementRegistry.get(activity.activityId) as Activity;

      // Side effect! Populate connectionDenyList for gateways by sorting outgoing
      // paths in ascending order by their target activity start time and list everything
      // but the first ones in deny list to prevent coloring them as active.
      if (activity.activityType === 'exclusiveGateway' && element.outgoing.length) {
        const activeConnections = [];
        const myEndTimes = endTimesById.get(activity.activityId) || [];
        for (let idx = 0; idx < myEndTimes.length; idx++) {
          const myEndTime = myEndTimes[idx];
          element.outgoing.sort((a: any, b: any): number => {
            const startTimesA = startTimesById.get(a.target.id) || [];
            const startTimesB = startTimesById.get(b.target.id) || [];
            const startA = startTimesA?.[idx] ?? 'Z';
            const startB = startTimesB?.[idx] ?? 'Z';
            return startTimesA.length <= idx
              ? 1
              : startTimesB.length <= idx
              ? -1
              : startA < myEndTime
              ? 1
              : startB < myEndTime
              ? -1
              : startA > startB
              ? 1
              : startA < startB
              ? -1
              : 0;
          });
          activeConnections.push(element.outgoing[0].id);
        }
        for (const connection of element.outgoing) {
          if (
            !activeConnections.includes(connection.id) &&
            (connection as any)?.target?.type !== 'bpmn:ParallelGateway'
          ) {
            connectionDenyList.add(connection.id);
          }
        }
      }

      return [activity.activityId, element];
    })
  );
  const getActivityConnections = (activityId: string): any[] => {
    const current: any = elementById.get(activityId);
    const currentEndTimes = endTimesById.get(activityId) ?? [];
    if (current && validActivity.get(activityId)) {
      const incoming = filter(current.incoming, (connection: any) => {
        if (connectionDenyList.has(connection.id)) {
          return false;
        }
        const incomingEndTimes = validActivity.get(connection.source.id)
          ? endTimesById.get(connection.source.id) ?? []
          : [];
        return incomingEndTimes.reduce(
          (acc: boolean, iET: string) =>
            acc || currentEndTimes.reduce((acc_: boolean, cET: string) => acc_ || iET <= cET, false),
          false
        );
      });
      const outgoing = filter(current.outgoing, (connection: any) => {
        if (connectionDenyList.has(connection.id)) {
          return false;
        }
        const outgoingEndTimes = endTimesById.get(connection.target.id) ?? [];
        return outgoingEndTimes.reduce(
          (acc: boolean, oET: string) =>
            acc || currentEndTimes.reduce((acc_: boolean, cET: string) => acc_ || oET >= cET, false),
          false
        );
      });
      return [...incoming, ...outgoing];
    } else {
      return [];
    }
  };

  let connections: Activity[] = [];

  forEach(Array.from(elementById.keys() as any), (activityId: any) => {
    connections = uniqueBy('id' as any, [...connections, ...getActivityConnections(activityId)]) as any;
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

export const renderSequenceFlow = (viewer: any, activities: any[]): any[] => {
  const registry = viewer.get('elementRegistry');
  const canvas = viewer.get('canvas');
  const layer = canvas.getLayer('processInstance', 1);
  const connections = getConnections(activities ?? [], registry);
  const paths = [];

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
  paths.push(marker);

  for (const connection of connections) {
    const curve = createCurve((connection as any).waypoints, {
      markerEnd: 'url(#arrow)',
      stroke: FILL,
      strokeWidth: 4,
    });
    svgAppend(layer, curve);
    paths.push(curve);
  }
  const connections_ = getDottedConnections(connections);
  for (const connection of connections_) {
    const curve = createCurve((connection as any).waypoints, {
      strokeDasharray: '1 8',
      strokeLinecap: 'round',
      stroke: FILL,
      strokeWidth: 4,
    });
    svgAppend(layer, curve);
    paths.push(curve);
  }
  return paths;
};

export const clearSequenceFlow = (nodes: any[]) => {
  for (const node of nodes) {
    svgRemove(node);
  }
};
