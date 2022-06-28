// https://github.com/reactjs/react-modal/issues/283
import './Modal.scss';

import moment, { Moment } from 'moment';
import React, { useContext, useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { TiMinus } from 'react-icons/ti';
import { ReactJason } from 'react-jason';
import github from 'react-jason/themes/github';
import ReactModal from 'react-modal';
import { useSortBy, useTable } from 'react-table';

import { get } from '../utils/api';
import APIContext from './APIContext';
import { Clippy } from './Clippy';

interface ModalProps {
  title: string;
  label: string;
  variable: any;
}

// https://github.com/reactjs/react-modal/issues/283
ReactModal.defaultStyles = {};

const Modal: React.FC<ModalProps> = ({ title, label, variable }) => {
  const [value, setValue] = useState(variable.value);
  const api = useContext(APIContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="btn btn-link"
        style={{
          padding: 0,
          margin: 0,
          border: 0,
        }}
        onClick={async () => {
          if (variable.type !== 'Json') {
            setIsOpen(true);
          } else {
            const data = await get(api, `/history/variable-instance/${variable.id}`, { deserializeValue: 'false' });
            setValue(JSON.parse(data.value));
            setIsOpen(true);
          }
        }}
      >
        {label}
      </button>
      <ReactModal
        className="modal-dialog"
        isOpen={isOpen}
        style={{
          content: {},
          overlay: {
            zIndex: 2000,
          },
        }}
      >
        <div
          className="modal-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="modal-header">
            <h3>Inspect "{title}" variable</h3>
          </div>
          <div className="modal-body">
            <Clippy value={JSON.stringify(value)}>
              <strong>Value</strong>
            </Clippy>
            <ReactJason value={value} theme={github} />
          </div>
          <div
            className="model-footer"
            style={{
              height: '4em',
              paddingRight: '1em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <button onClick={() => setIsOpen(false)} className="btn btn-default">
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

interface Props {
  instance: any;
  activities: Map<string, any>;
  variables: any[];
}

const VariablesTable: React.FC<Props> = ({ instance, activities, variables }) => {
  const api = useContext(APIContext);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }: any) => <Clippy value={value}>{value}</Clippy>,
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ data, row, value }: any) => {
          const raw = data[row.index];
          switch (raw.type) {
            case 'Object':
              return <Modal title={`${raw.name}`} label="View" variable={raw} />;
            case 'File':
              return (
                <Clippy value={`${window.location.origin}${api.engineApi}/history/variable-instance/${raw.id}/data`}>
                  <a href={`${api.engineApi}/history/variable-instance/${raw.id}/data`}>Download</a>
                </Clippy>
              );
            case 'Json':
              return <Modal title={`${raw.name}`} label="View" variable={raw} />;
            default:
              return (
                <Clippy value={typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}>
                  {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}
                </Clippy>
              );
          }
        },
      },
      {
        Header: 'Scope',
        accessor: 'scope',
      },
      {
        Header: 'Created',
        accessor: 'createTime',
        Cell: ({ value }: any) =>
          value
            ? ((value: Moment) => (
                <Clippy value={value.format('YYYY-MM-DDTHH:mm:ss')}>{value.format('YYYY-MM-DDTHH:mm:ss')}</Clippy>
              ))(moment(value))
            : value,
      },
    ],
    []
  );
  const data = React.useMemo(() => {
    return variables
      .filter(
        (variable: any) =>
          variable.activityInstanceId === instance.id ||
          !!(activities.has(variable.activityInstanceId) && activities.get(variable.activityInstanceId).activityName)
      )
      .map((variable: any) => {
        return {
          ...variable,
          scope:
            variable.activityInstanceId === instance.id
              ? instance.processDefinitionName
              : activities?.get(variable.activityInstanceId).activityName,
        };
      });
  }, [instance, variables, activities]);
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

export default VariablesTable;
