import React from 'react';
import Navigator from './components/Navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}