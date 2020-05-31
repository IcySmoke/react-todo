import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos: []
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  render(){
    return(
      <div class="w3-bar w3-large w3-theme-d4">
        <a href="#" class="w3-bar-item w3-button"><i class="fa fa-bars"></i></a>
        <span class="w3-bar-item">Your tasks</span>
        <a href="#" class="w3-bar-item w3-button w3-right"><i class="fa fa-search"></i></a>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
