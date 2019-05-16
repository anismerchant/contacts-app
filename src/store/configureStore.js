import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        contacts: contactsReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;