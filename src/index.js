import React from 'react';
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import boardApp from './store/reducers';

let store = createStore(boardApp)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

registerServiceWorker();
