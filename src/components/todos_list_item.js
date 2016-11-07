import React from 'react';

export default class TodosListItem extends React.Component {
  render() {
    return (
        <tr>
          <td>{this.props.task}</td>
          <td>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
  }
}