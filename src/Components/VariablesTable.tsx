import React from 'react';
import { useTable } from 'react-table';

import { asctime } from '../utils/misc';

interface Props {
  variables: any[];
}

const VariablesTable: React.FC<Props> = ({ variables }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ value }: any) =>
          typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value),
      },
      {
        Header: 'State',
        accessor: 'state',
      },
    ],
    []
  );
  const data = React.useMemo(() => variables, []);
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

export default VariablesTable;
