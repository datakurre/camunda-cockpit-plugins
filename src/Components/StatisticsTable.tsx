import React from 'react';
import { useTable } from 'react-table';

import { asctime } from '../utils/misc';

interface Props {
  activities: any[];
}

const StatisticsTable: React.FC<Props> = ({ activities }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Activity Name',
        accessor: 'activityName',
      },
      {
        Header: 'Instances',
        accessor: 'instances',
      },
      {
        Header: 'Total',
        accessor: 'duration',
      },
      {
        Header: 'Average',
        accessor: 'average',
      },
      {
        Header: 'Median',
        accessor: 'median',
      },
    ],
    []
  );
  const counter = React.useMemo(() => {
    const counter: Record<string, number> = {};
    for (const activity of activities) {
      const name = activity.activityName;
      counter[name] = counter[name] ? counter[name] + 1 : 1;
    }
    return counter;
  }, [activities]);
  const [totals, durations] = React.useMemo(() => {
    const totals: Record<string, number> = {};
    const durations: Record<string, number[]> = {};
    for (const activity of activities) {
      const duration = new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime();
      totals[activity.activityName] = totals[activity.activityName]
        ? totals[activity.activityName] + duration
        : duration;
      if (!durations[activity.activityName]) {
        durations[activity.activityName] = [duration];
      } else {
        durations[activity.activityName].push(duration);
      }
    }
    return [totals, durations];
  }, [activities]);
  const activityNames = React.useMemo(() => {
    const activityNames = Object.keys(durations);
    activityNames.sort((a, b) => {
      if (totals[a] > totals[b]) {
        return -1;
      } else if (totals[a] < totals[b]) {
        return 1;
      }
      return 0;
    });
    return activityNames;
  }, [activities]);
  const data = React.useMemo(
    () =>
      activityNames.map((activityName: string) => {
        durations[activityName].sort((a: number, b: number) => {
          if (a > b) {
            return -1;
          } else if (a < b) {
            return 1;
          }
          return 0;
        });
        return {
          activityName,
          instances: counter[activityName],
          duration: asctime(totals[activityName]),
          average: asctime(totals[activityName] / counter[activityName]),
          median: asctime(durations[activityName][Math.floor(durations[activityName].length / 2)]),
        };
      }),
    [activities]
  );
  const tableInstance = useTable({ columns: columns as any, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <table className="cam-table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatisticsTable;
