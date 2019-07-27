import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, createTodo } from '../actions/todo';

// Todo Hover List, click to delete?
// Change Background
// Add transitions

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
        <h1 className="text-center display-2">TodoList</h1>
        <p className="lead text-center">Welcome to my todolist application</p>
        <div className="row">
          <form className="col-8 mx-auto" onSubmit={submitTodo}>
            <div className="input-group">
              <input
                className="form-control"
                name="text"
                placeholder="Create a task"
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <span>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderList = () => {
    return todos.map(todo => {
      return (
        <li key={todo._id}>
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
      <div className="row">
        <ul className="col-8 mx-auto">{renderList()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    todos: Object.values(state.todos)
  };
};

export default connect(
  mapStateToProps,
  { getTodos, createTodo, deleteTodo }
)(TodoList);
