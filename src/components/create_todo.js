import React from 'react';

export default class TodosList extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} className='form-group'>
        <input  className="form-control" type="text" 
        placeholder="What do I need to do?" ref="createInput" />
        <span className="input-group-btn">
          <button className="btn btn-info">Create</button>
        </span>
      </form>
      );
  }
  handleCreate(e) {
    e.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}