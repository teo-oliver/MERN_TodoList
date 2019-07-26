import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import TodoList from './components/TodoList';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <br />
        <TodoList />
      </Fragment>
    </Provider>
  );
};

export default App;
