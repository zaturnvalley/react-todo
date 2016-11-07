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
  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
        <TodosList />
      </div>
    );
  }
}