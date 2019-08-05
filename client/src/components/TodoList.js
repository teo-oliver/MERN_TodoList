import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, createTodo } from '../actions/todo';

import Image from '../img/carmine-de-fazio-3ytjETpQMNY-unsplash.jpg';

// Todo Hover List, click to delete?
// Change Background
// Add transitions to items

const TodoList = ({ todos, getTodos, createTodo, deleteTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    // document.body.style.backgroundImage = `url(${Image})`;
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
      <div>
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
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary my-2 my-sm-0"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderList = () => {
    return (
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition key={todo._id} timeout={500} classNames="fade">
            <li key={todo._id}>
              {todo.todo}

              <button
                style={{ float: 'right' }}
                className="btn btn-outline-secondary my-2 my-sm-0"
                onClick={() => handleDelete(todo._id)}
              >
                X
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  };

  return (
    <div className="container">
      <br />
      <br />
      <h1 className="text-center display-2">TodoList</h1>
      <p className="lead text-center">Welcome...let's plan the day.</p>

      {inputForm()}
      <div className="row">
        <ul className="col-8 mx-auto">{renderList()}</ul>
      </div>
      <p class="lead font-italic text-center mt-5">
        Obs: "Todos" will be deleted automatically after 8 seconds to keep the
        app clean for newcomers to test.
      </p>
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
