import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import reducers from './store';
import Home from './components/Home';


export const store = createStore(
  reducers,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>

);


