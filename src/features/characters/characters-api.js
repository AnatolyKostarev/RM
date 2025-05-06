import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoint } from '../../reference/api-endpoints'

const baseUrl = import.meta.env.VITE_BASE_API

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 60 * 60,
  tagTypes: ['Character', 'Episode', 'Location'],
  endpoints: builder => ({
    // Characters endpoints
    getCharacters: builder.query({
      query: ({
        page = 1,
        name = '',
        status = '',
        species = '',
        type = '',
        gender = ''
      }) => ({
        url: endpoint.character,
        params: {
          page,
          ...(name && { name }),
          ...(status && { status }),
          ...(species && { species }),
          ...(type && { type }),
          ...(gender && { gender })
        }
      }),
      transformResponse: (response, meta, arg) => ({
        characters: response.results || [],
        pagination: response.info,
        currentPage: arg.page,
        filters: {
          name: arg.name,
          status: arg.status,
          species: arg.species,
          type: arg.type,
          gender: arg.gender
        }
      }),
      providesTags: result =>
        result
          ? [
              ...result.characters.map(({ id }) => ({ type: 'Character', id })),
              { type: 'Character', id: 'LIST' }
            ]
          : [{ type: 'Character', id: 'LIST' }]
    }),

    getCharacterById: builder.query({
      query: id => `${endpoint.character}/${id}`,
      transformResponse: response => ({
        ...response,
        episodeIds: response.episode.map(ep => ep.split('/').pop())
      }),
      providesTags: (result, error, id) => [{ type: 'Character', id }]
    }),

    getMultipleCharacters: builder.query({
      query: ids =>
        `${endpoint.character}/${Array.isArray(ids) ? ids.join(',') : ids}`,
      transformResponse: response => {
        const characters = Array.isArray(response) ? response : [response]
        return characters.map(character => ({
          ...character,
          episodeIds: character.episode?.map(ep => ep.split('/').pop()) || []
        }))
      },
      providesTags: result => {
        if (!result) return []
        const characters = Array.isArray(result) ? result : [result]
        return characters.map(({ id }) => ({ type: 'Character', id }))
      }
    }),

    // Episodes endpoints
    getEpisodes: builder.query({
      query: ({ page = 1, name = '', episode = '' }) => ({
        url: endpoint.episode,
        params: {
          page,
          ...(name && { name }),
          ...(episode && { episode })
        }
      }),
      transformResponse: response => ({
        episodes: response.results || [],
        pagination: response.info
      }),
      providesTags: result =>
        result
          ? [
              ...result.episodes.map(({ id }) => ({ type: 'Episode', id })),
              { type: 'Episode', id: 'LIST' }
            ]
          : [{ type: 'Episode', id: 'LIST' }]
    }),

    getEpisodeById: builder.query({
      query: id => `${endpoint.episode}/${id}`,
      transformResponse: response => ({
        ...response,
        characterIds: response?.characters?.map(char => char.split('/').pop())
      }),
      providesTags: (result, error, id) => [{ type: 'Episode', id }]
    }),

    getMultipleEpisodes: builder.query({
      query: ids => {
        const idString = Array.isArray(ids) ? ids.join(',') : ids
        return `${endpoint.episode}/${idString}`
      },
      transformResponse: response => {
        // Убедимся, что всегда работаем с массивом
        const episodes = Array.isArray(response) ? response : [response]
        return episodes.map(episode => ({
          ...episode,
          characterIds:
            episode.characters?.map(char => char.split('/').pop()) || []
        }))
      },
      providesTags: result => {
        // Обрабатываем случаи, когда result может быть массивом или объектом
        if (!result) return []

        const episodes = Array.isArray(result) ? result : [result]
        return episodes.map(({ id }) => ({ type: 'Episode', id }))
      }
    }),

    // Locations endpoints
    getLocations: builder.query({
      query: ({ page = 1, name = '', type = '', dimension = '' }) => ({
        url: endpoint.location,
        params: {
          page,
          ...(name && { name }),
          ...(type && { type }),
          ...(dimension && { dimension })
        }
      }),
      transformResponse: response => ({
        locations: response.results || [],
        pagination: response.info
      }),
      providesTags: result =>
        result
          ? [
              ...result.locations.map(({ id }) => ({ type: 'Location', id })),
              { type: 'Location', id: 'LIST' }
            ]
          : [{ type: 'Location', id: 'LIST' }]
    }),

    getLocationById: builder.query({
      query: id => `${endpoint.location}/${id}`,
      transformResponse: response => ({
        ...response,
        residentIds: response.residents.map(res => res.split('/').pop())
      }),
      providesTags: (result, error, id) => [{ type: 'Location', id }]
    }),

    getMultipleLocations: builder.query({
      query: ids =>
        `${endpoint.location}/${Array.isArray(ids) ? ids.join(',') : ids}`,
      transformResponse: response => {
        const locations = Array.isArray(response) ? response : [response]
        return locations.map(location => ({
          ...location,
          residentIds:
            location.residents?.map(res => res.split('/').pop()) || []
        }))
      },
      providesTags: result => {
        if (!result) return []
        const locations = Array.isArray(result) ? result : [result]
        return locations.map(({ id }) => ({ type: 'Location', id }))
      }
    })
  })
})

export const {
  // Characters
  useGetCharactersQuery,
  useLazyGetCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetCharacterByIdQuery,
  useGetMultipleCharactersQuery,

  // Episodes
  useGetEpisodesQuery,
  useLazyGetEpisodesQuery,
  useGetEpisodeByIdQuery,
  useLazyGetEpisodeByIdQuery,
  useGetMultipleEpisodesQuery,

  // Locations
  useGetLocationsQuery,
  useLazyGetLocationsQuery,
  useGetLocationByIdQuery,
  useLazyGetLocationByIdQuery,
  useGetMultipleLocationsQuery
} = rickAndMortyApi
