import axios from 'axios';
import { CREATE_TODO, DELETE_TODO, GET_TODOS } from './types';

// TODO updateTodo axios.put/patch

export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const createTodo = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await axios.post('/api/todos', formData, config);
  dispatch({
    type: CREATE_TODO,
    payload: res.data
  });

  const deleteAfterAWhile = () => {
    dispatch(deleteTodo(res.data._id));
  };
  setTimeout(deleteAfterAWhile, 6000);
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`api/todos/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: res.data
  });
};
