import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import contactsReducer from '../reducers/contacts';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        contacts: contactsReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;