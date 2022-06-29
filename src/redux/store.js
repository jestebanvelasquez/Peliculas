import { createStore, applyMiddleware, compose } from "redux";
import reducerMovies from './reducer/reducerMovies.js'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducerMovies, composeEnhancers(applyMiddleware(thunk)))

export default store;