import React from 'react';

interface Props {
  processDefinitionId: string;
  processDefinitionName: string;
  processInstanceId: string;
}

const BreadcrumbsPanel: React.FC<Props> = ({ processDefinitionId, processDefinitionName, processInstanceId }) => {
  return (
    <div className="breadcrumbs-panel" cam-breadcrumbs-panel="">
      <ul className="cam-breadcrumb">
        <li>
          <a className="text" href={`#/`}>
            Dashboard
          </a>
        </li>
        <li>
          <span className="divider">»</span>
          <a className="text" href={`#/processes/`}>
            Processes
          </a>
        </li>
        <li>
          <span className="divider">»</span>
          <a className="text" href={`#/process-definition/${processDefinitionId}/runtime`}>
            {processDefinitionName}
          </a>{' '}
          : {processInstanceId} : History
        </li>
      </ul>
    </div>
  );
};

export default BreadcrumbsPanel;
