import React from 'react';

import { asctime } from '../utils';

interface Props {
  activities: any[];
}

const ActivityTable: React.FC<Props> = ({ activities }) => {
  return (
    <table className="cam-table">
      <thead>
        <th sortable-table-head="">Activity Name</th>
        <th sortable-table-head="">Start Date</th>
        <th sortable-table-head="">End Date</th>
        <th sortable-table-head="">Duration</th>
        <th sortable-table-head="">Type</th>
        <th sortable-table-head="">Canceled</th>
      </thead>
      <tbody>
        {activities.map((activity: any) => (
          <tr key={activity.id}>
            <td>{activity.activityName}</td>
            <td>{activity.startTime.split('.')[0]}</td>
            <td>{activity.endTime ? activity.endTime.split('.')[0] : ''}</td>
            <td>
              {activity.endTime
                ? asctime(new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime())
                : ''}
            </td>
            <td>{activity.activityType}</td>
            <td>{activity.canceled}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
