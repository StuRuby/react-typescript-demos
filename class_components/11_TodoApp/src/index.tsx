import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './App';
import 'todomvc-app-css/index.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
