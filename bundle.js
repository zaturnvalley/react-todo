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
        <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodosList 
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
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

  saveTask(oldTask, newTask) {
    const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundToDo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    // _.remove is a lodash method
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
import React from 'react';

export default class TodosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }
  renderError(){
    if(!this.state.error){ return null;}

    return <div style={{ color: 'red'}}>{this.state.error}</div>
  }
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} className='form-group'>
        <input className="form-control" type="text" 
        placeholder="What do I need to do?" ref="createInput" />
        <button className="btn btn-info">Create</button>
        {this.renderError()}
      </form>
      );
  }

  handleCreate(e) {
    e.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput){
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task){
    if (!task) {
      return 'Please Input A Task';
    } else if (_.find(this.props.todo, todo => todo.task === task)) {
      return 'Task Already exists'
    } else {
      return null;
    }
  }
}
import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos_list_header';
import TodosListItem from './todos_list_item';

export default class TodosList extends React.Component {
  renderItems(){
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
      } {...todo} {...props} />);
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
import React from 'react';

export default class TodosListHeader extends React.Component {
  render(){
    return (
      <thead className="info">
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      );
  }
}
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
    };
    if (this.state.isEditing) {
      return (
        <td>
        <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" defaultValue={task} ref="editInput" />
        </form>
        </td>
        );
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
          <button onClick={this.onSaveClick.bind(this)} className="btn btn-warning">Save</button>
          <button onClick={this.onCancelClick.bind(this)} className="btn btn-danger">Cancel</button>
        </td>
        );
    } return (
        <td>
          <button onClick={this.onEditClick.bind(this)} className="btn btn-warning">Edit</button>
          <button onClick={this.props.deleteTask.bind(this, this.props.task)} className="btn btn-danger">Delete</button>
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

  onSaveClick(e){
    e.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }
}