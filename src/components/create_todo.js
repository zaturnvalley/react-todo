import React from 'react';

export default class CreateToDo extends React.Component {
  render() {
    return (
      <form className='form-group'>
        <input  className="form-control" type="text" placeholder="What do I need to do?" />
        <button className="btn btn-info">Create</button>
      </form>
      );
  }
}