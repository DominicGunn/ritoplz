'use strict'

/* global window */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

const logger = createLogger()
const middlewares = [logger, thunk]

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  )
}

export default configureStore
