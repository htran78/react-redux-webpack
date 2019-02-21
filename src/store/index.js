import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'

import reducerRoot from './reducerRoot'
import sagaRoot from './sagaRoot'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const enhancers = []
const middleware = [sagaMiddleware]

// dev tool
if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__())
  }
}

// compose enhancers
const composedEnhancers =  compose(
  applyMiddleware(...middleware),
  ...enhancers
)

// create store
const store = createStore(
  reducerRoot,
  composedEnhancers
)

export default store;
sagaMiddleware.run(sagaRoot)