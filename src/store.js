// store is created to store all the states at one place
// act like a centralized collection
import { createStore } from 'redux'
import rootReducer from './reducers/index'
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store

/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() is added so that if you use redux dev tools, everything about store and states is detected. */
