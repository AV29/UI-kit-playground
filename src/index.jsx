import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './redux/store/configureStore';

/* Styles */
import './styles/styles.scss';

import './styles/3rd party/theme.css';
import './styles/3rd party/dx.common.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('application-root')
);
