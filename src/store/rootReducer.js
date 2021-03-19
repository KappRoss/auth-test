import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReducer from "./reducer/authReducer";
//import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import postsReducer from "./reducer/postsReducer";
import {starWarsReducer} from "./reducer/StarWarsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    swapi: starWarsReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export let store = createStore(persistedReducer,
//     compose(applyMiddleware(thunk)))

//const logger = createLogger()

export let store = createStore(persistedReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),)

export let persistor = persistStore(store)

