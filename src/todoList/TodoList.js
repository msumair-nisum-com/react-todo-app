import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const TodoList = ({ todos, toggleEdit, editTodo, removeTodo, completeTodo }) => {
  let input;

  const onEvent = (e, event) => {
    e.preventDefault();
  }

  const updateTodo = (index) => {
    editTodo(index, input.value);
    input.value = '';
  }
  // Map through the todos
  const todoNode = todos.map((todo, index) => {
    return (
      <li className={`list-group-item ${todo.completed ? "completed" : ""}`} key={index}>
        {
          todo.edit || <input type="checkbox" onChange={(e) => completeTodo(index, e.target.checked)} style={{ marginRight: '10px' }} />
        }
        <span className="todo">{todo.value}</span>
        {
          todo.edit && <input type="text" className="" placeholder={todo.value} ref={node => {
            input = node;
          }} />
        }
        {
          todo.completed && <button
            className="spacer btn btn-danger btn-xs pull-right"
            onClick={(e) => { onEvent(e); removeTodo(index) }}><Glyphicon glyph="remove" />
          </button>
        }
        {
          todo.edit ?
            <button
              className="btn btn-success btn-xs pull-right"
              onClick={(e) => { onEvent(e); updateTodo(index) }}><Glyphicon glyph="check" />
            </button> :
            <button
              className="btn btn-warning btn-xs pull-right"
              onClick={(e) => { onEvent(e); toggleEdit(index) }}><Glyphicon glyph="edit" />
            </button>
        }
      </li>
    )
  });
  return (
    <div className="row">
      <div className="col-md-12">
        <form>
          <ul className="list-group" style={{ marginTop: '30px' }}>{todoNode}</ul>
        </form>
      </div>
    </div>
  );
}

export default TodoList;