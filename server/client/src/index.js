import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import { createBrowserHistory} from 'history';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";
// allows access to redux store from browser
import App from './components/App';
import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
  )
const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

