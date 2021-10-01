import moment from 'moment';
import React from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { TiMinus } from 'react-icons/ti';
import { useSortBy, useTable } from 'react-table';

import { asctime } from '../utils/misc';
import { Clippy } from './Clippy';

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
          const baseUrl = `${window.location.href.split('#')[0]}/`
            .replace(/\/+$/, '/')
            .replace(/\/app\/tasklist\//, '/app/cockpit/');
          if (value.activityType === 'businessRuleTask' && decisions.has(value.id)) {
            return <a href={`${baseUrl}#/decision-instance/${decisions.get(value.id)}`}>{value.activityName}</a>;
          } else if (value.activityType === 'callActivity' && value.calledProcessInstanceId && value.endTime) {
            return (
              <a href={`${baseUrl}#/history/process-instance/${value.calledProcessInstanceId}`}>{value.activityName}</a>
            );
          } else if (value.activityType === 'callActivity' && value.calledProcessInstanceId) {
            return (
              <a href={`${baseUrl}#/process-instance/${value.calledProcessInstanceId}/runtime`}>{value.activityName}</a>
            );
          }
          return <Clippy value={value.activityName}>{value.activityName}</Clippy>;
        },
      },
      {
        Header: 'Start Time',
        accessor: 'startDate',
        Cell: ({ value }: any) => (
          <Clippy value={value ? value.format('YYYY-MM-DDTHH:mm:ss') : value}>
            {value ? value.format('YYYY-MM-DDTHH:mm:ss') : value}
          </Clippy>
        ),
      },
      {
        Header: 'End Time',
        accessor: 'endDate',
        Cell: ({ value }: any) => (
          <Clippy value={value ? value.format('YYYY-MM-DDTHH:mm:ss') : value}>
            {value ? value.format('YYYY-MM-DDTHH:mm:ss') : value}
          </Clippy>
        ),
      },
      {
        Header: 'Duration',
        accessor: 'duration',
        Cell: ({ value }: any) => <Clippy value={value}>{value}</Clippy>,
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell: ({ value }: any) => <Clippy value={value}>{value}</Clippy>,
      },
      {
        Header: 'User',
        accessor: 'assignee',
        Cell: ({ value }: any) => <Clippy value={value}>{value}</Clippy>,
      },
      {
        Header: 'Canceled',
        accessor: 'canceled',
        Cell: ({ value }: any) => <Clippy value={value}>{value}</Clippy>,
      },
    ],
    [activities, decisions]
  );
  const data = React.useMemo(
    () =>
      activities.map((activity: any) => {
        return {
          activityName: activity,
          startDate: moment(activity.startTime),
          endDate: activity.endTime ? moment(activity.endTime) : '',
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
