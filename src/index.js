import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import './index.css';
import { addContact } from './actions/contacts';

const store = configureStore;

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

// Seed Data for dev purposes
// store.dispatch(addContact({firstname: 'Rohinton', lastname: 'Mistry', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Sheryl', lastname: 'Sandberg', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Elon', lastname: 'Musk', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Grace', lastname: 'Hopper', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Pearl', lastname: 'Buck', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Jeff', lastname: 'Bezos', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Isaac', lastname: 'Newton', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Marie', lastname: 'Curie', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Rosalind', lastname: 'Franklin', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Sigrid', lastname: 'Undset', email: undefined, cell: undefined}));
// store.dispatch(addContact({firstname: 'Donna', lastname: 'Strickland', email: undefined, cell: undefined}));

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