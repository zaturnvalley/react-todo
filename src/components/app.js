import React from 'react';

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
      </div>
    );
  }
}