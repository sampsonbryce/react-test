import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/container.jsx'
import configureStore from './redux/store.js'
import {Provider} from 'react-redux'

let initialState = {
    todos: []
};

let store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
document.getElementById('react-app'));
