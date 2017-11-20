import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import history from './history'
import { rootReducer } from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './index.css';
import LoginPage from './views/Login/';
import { Records } from './views/Records'
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/records' component={Records} />
        <Redirect from='/' to='/login' />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
