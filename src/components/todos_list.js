import React from 'react';
import TodosListHeader from './todos_list_header';

export default class TodosList extends React.Component {
  render(){
    return (
      <table className="table table-striped">
        <TodosListHeader />
      </table>
      );
  }
}