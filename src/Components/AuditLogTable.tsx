import React from 'react';
import { useTable } from 'react-table';

import { asctime } from '../utils/misc';

interface Props {
  activities: any[];
}

const AuditLogTable: React.FC<Props> = ({ activities }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Activity Name',
        accessor: 'activityName',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Canceled',
        accessor: 'canceled',
      },
    ],
    []
  );
  const data = React.useMemo(
    () =>
      activities.map((activity: any) => {
        return {
          activityName: activity.activityName,
          startDate: activity.startTime.split('.')[0],
          endDate: activity.endTime ? activity.endTime.split('.')[0] : '',
          duration: activity.endTime
            ? asctime(new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime())
            : '',
          type: activity.activityType,
          canceled: activity.canceled ? 'true' : 'false',
        };
      }),
    []
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

export default AuditLogTable;
