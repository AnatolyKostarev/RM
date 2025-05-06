import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer.js'
import { middleware } from './middleware.js'

export const setupStore = () => {
  return configureStore({ reducer, middleware })
}
