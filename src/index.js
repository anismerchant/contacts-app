import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routes/AppRouter';
import { beginSetContacts } from './actions/contacts';
import { login, logout } from './actions/auth'
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import LoadingGif from './components/LoadingGif';
import './styles/style.css';

const store = configureStore;

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let renderOnce = false;
const renderApp = () => {
    if(!renderOnce) {
        ReactDOM.render(jsx, document.getElementById('root'));
        renderOnce = true;
    }
}

ReactDOM.render(<LoadingGif />, document.getElementById('root'));

firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(beginSetContacts()).then( () => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();