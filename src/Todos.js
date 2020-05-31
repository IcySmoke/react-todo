import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return(
        <li class="w3-display-container">{todo.content}<span onClick={() => {deleteTodo(todo.id)}} class="w3-button w3-transparent w3-display-right">&times;</span></li>
      )
    })
  ):(
    <h1 class="w3-center w3-animate-top">No more tasks, youre free now! :D</h1>
  )
  return(
    <div class="w3-container">
      <ul class="w3-ul w3-card-4">
        {todoList}
      </ul>
    </div>
  )
}

export default Todos;
