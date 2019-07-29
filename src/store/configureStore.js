import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducer, filtersReducer, 
         appAuthReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: appAuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;
