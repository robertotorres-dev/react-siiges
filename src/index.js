import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Login from './containers/Login'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

ReactDOM.render(<Login />, document.getElementById('app'));

const initialState = {
    "user": {}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);