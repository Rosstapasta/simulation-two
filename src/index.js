import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
// import store from './store.js';

ReactDOM.render(
    <HashRouter>
        {/* <Provider store={store}> */}

        <App />

        {/* </Provider> */}

    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
