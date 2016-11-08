import React from 'react';

export default class TodosListItem extends React.Component {
  //this is not best practice, this should be set in top level
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }
  renderTaskSection(){
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    return (
        <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
            {task}
        </td>
      );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button className="btn btn-warning">Save</button>
          <button onClick={this.onCancelClick.bind(this)} className="btn btn-danger">Cancel</button>
        </td>
        );
    } return (
        <td>
          <button onClick={this.onEditClick.bind(this)} className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      );
  }

  render() {
    return (
        <tr>
          {this.renderTaskSection()}
          {this.renderActionsSection()}
        </tr>
      );
  }
  onEditClick() {
    this.setState({ isEditing: true });
  }
  onCancelClick(){
    this.setState({ isEditing: false});
  }
}