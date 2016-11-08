import React from 'react';
import CreateToDo from './create_todo';
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
        <CreateToDo createTask={this.createTask.bind(this)} />
        <TodosList 
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          />
      </div>
    );
  }

  toggleTask(task) {
    const foundToDo = _.find(this.state.todos, todo => todo.task === task);
    foundToDo.isCompleted = !foundToDo.isCompleted;
    this.setState({ todos: this.state.todos });
  }
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
}