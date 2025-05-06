import { rickAndMortyApi } from '../features/characters/characters-api'

export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(rickAndMortyApi.middleware)
