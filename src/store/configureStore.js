import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';
import appAuthReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: appAuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
);

console.log(store.getState());
export default store;