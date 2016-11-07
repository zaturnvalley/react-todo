import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos_list_header';

export default class TodosList extends React.Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
      } {...todo} />);
  }
  render(){
    return (
      <table className="table table-striped">
        <TodosListHeader />
        <tr>
          {this.renderItems()}
        </tr>
      </table>
      );
  }
}