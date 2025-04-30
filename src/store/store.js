import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'

export const setupStore = () => {
  return configureStore({
    reducer
  })
}
