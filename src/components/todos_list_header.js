import React from 'react';

export default class TodosListHeader extends React.Component {
  render(){
    return (
      <thead className="info">
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      );
  }
}