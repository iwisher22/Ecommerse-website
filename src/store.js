import {createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from 'react-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import{userRegisterReducer} from "./reducers/userReducers";

const reducer= combineReducers({
    userRegisterReducer:userRegisterReducer
});

const initialState= {};

const middleware= [thunk];

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
