import React from 'react';
import TodosList from './todos_list';

const todos = [
{ 
  task: 'apply to 5 jobs',
  isCompleted: true
},
{
  task: 'walk marley 2 times',
  isCompleted: false
}
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos //this is for ES6, for not es6, do todos: todos
    };
  }
  render() {
    return (
      <div>
        <h1>React To Do App</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}