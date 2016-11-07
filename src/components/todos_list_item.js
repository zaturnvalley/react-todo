import React from 'react';

export default class TodosListItem extends React.Component {
  //this is not best practice, this should be set in top level
  constructor(props) {
    super(props);
  }

  this.state = {
    isEditing: false
  };
  render() {
    return (
        <tr>
          <td>{this.props.task}</td>
          <td>
            <button onClick={this.onEditClick.bind(this)} className="btn btn-warning">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
  }
  onEditClick() {
    this.setState({ isEditing: true });
  }
}