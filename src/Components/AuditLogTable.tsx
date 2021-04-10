import React from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { TiMinus } from 'react-icons/ti';
import { useSortBy, useTable } from 'react-table';

import { asctime } from '../utils/misc';

interface Props {
  activities: any[];
  decisions: Map<string, string>;
}

const AuditLogTable: React.FC<Props> = ({ activities, decisions }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Activity Name',
        accessor: 'activityName',
        Cell: ({ value }: any) => {
          if (value.activityType === 'businessRuleTask' && decisions.has(value.id)) {
            return <a href={`#/decision-instance/${decisions.get(value.id)}`}>{value.activityName}</a>;
          } else if (value.activityType === 'callActivity' && value.calledProcessInstanceId && value.endTime) {
            return <a href={`#/history/process-instance/${value.calledProcessInstanceId}`}>{value.activityName}</a>;
          } else if (value.activityType === 'callActivity' && value.calledProcessInstanceId) {
            return <a href={`#/process-instance/${value.calledProcessInstanceId}/runtime`}>{value.activityName}</a>;
          }
          return value.activityName;
        },
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
        Header: 'User',
        accessor: 'assignee',
      },
      {
        Header: 'Canceled',
        accessor: 'canceled',
      },
    ],
    [activities, decisions]
  );
  const data = React.useMemo(
    () =>
      activities.map((activity: any) => {
        return {
          activityName: activity,
          startDate: activity.startTime.split('.')[0],
          endDate: activity.endTime ? activity.endTime.split('.')[0] : '',
          duration: activity.endTime
            ? asctime(new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime())
            : '',
          type: activity.activityType,
          assignee: activity.assignee,
          canceled: activity.canceled ? 'true' : 'false',
        };
      }),
    [activities, decisions]
  );
  const tableInstance = useTable({ columns: columns as any, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <table className="cam-table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              /* @ts-ignore */
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span style={{ position: 'absolute', fontSize: '125%' }}>
                  {
                    /* @ts-ignore */
                    column.isSorted ? (
                      /* @ts-ignore */
                      column.isSortedDesc ? (
                        <GoChevronDown style={{ color: '#155cb5' }} />
                      ) : (
                        <GoChevronUp style={{ color: '#155cb5' }} />
                      )
                    ) : (
                      <TiMinus style={{ color: '#155cb5' }} />
                    )
                  }
                </span>
              </th>
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
