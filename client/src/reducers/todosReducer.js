import _ from 'lodash';
import { CREATE_TODO, GET_TODOS, DELETE_TODO } from '../actions/types';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case CREATE_TODO:
      return { [action.payload._id]: action.payload, ...state };
    case DELETE_TODO:
      return _.omit(state, action.payload._id);

    default:
      return state;
  }
};

export default todoReducer;
