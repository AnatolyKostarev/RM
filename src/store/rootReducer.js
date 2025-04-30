import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterSlice'

export const reducer = combineReducers({
  counter: counterReducer
})
