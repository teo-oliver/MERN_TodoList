import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, createTodo } from '../actions/todo';

// Todo Hover List, click to delete?
// Change Background
// Add transitions
// Add setTimeOut to todos

const TodoList = ({ todos, getTodos, createTodo, deleteTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const submitTodo = e => {
    e.preventDefault();
    createTodo({ todo: text });
    setText('');
  };

  const handleDelete = id => {
    deleteTodo(id);
  };

  const inputForm = () => {
    return (
      <div className="container">
        <form className="form-inline" onSubmit={submitTodo}>
          <input
            className="form-control mr-sm-2"
            name="text"
            placeholder="Create a task"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  const renderList = () => {
    return todos.map(todo => {
      return (
        <li className="list-group-item" key={todo._id}>
          {todo.todo}
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDelete(todo._id)}
          >
            X
          </button>
        </li>
      );
    });
  };

  return (
    <div className="container">
      {inputForm()}
      <br />
      <ul className="list-group list-group-flush">{renderList()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos)
  };
};

export default connect(
  mapStateToProps,
  { getTodos, createTodo, deleteTodo }
)(TodoList);
