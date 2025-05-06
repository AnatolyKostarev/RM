import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterSlice'
import characterReducer from './reducers/characterSlice'
import { rickAndMortyApi } from '../features/characters/characters-api'

export const reducer = combineReducers({
  counter: counterReducer,
  characters: characterReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
})
