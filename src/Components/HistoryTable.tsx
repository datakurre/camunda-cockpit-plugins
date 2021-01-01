import React from 'react';
import { useTable } from 'react-table';

interface Props {
  instances: any[];
}

const HistoryTable: React.FC<Props> = ({ instances }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Instance ID',
        Cell: ({ value }: any) => <a href={`#/history/process-instance/${value}`}>{value}</a>,
        accessor: 'id',
      },
      {
        Header: 'Start Time',
        accessor: 'startTime',
      },
      {
        Header: 'End Time',
        accessor: 'endTime',
      },
      {
        Header: 'Business Key',
        accessor: 'businessKey',
      },
    ],
    []
  );
  const data = React.useMemo(
    () =>
      instances.map((instance: any) => {
        return {
          id: instance.id,
          businessKey: instance.businessKey,
          startTime: instance.startTime.split('.')[0],
          endTime: instance.endTime ? instance.endTime.split('.')[0] : '',
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

export default HistoryTable;
