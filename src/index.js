import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import './index.css';

const store = configureStore;

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        console.log('Logged In.')
    } else {
        console.log('Logged out')
    }
});