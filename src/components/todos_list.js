import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos_list_header';
import TodosListItem from './todos_list_item';

export default class TodosList extends React.Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
      } {...todo} />);
  }
  render(){
    return (
      <table className="table table-striped">
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
      );
  }
}