import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoint } from '../../reference/api-endpoints'

const baseUrl = import.meta.env.VITE_BASE_API

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 60 * 60,
  endpoints: builder => ({
    getCharacters: builder.query({
      query: ({
        page = 1,
        name = '',
        status = '',
        species = '',
        gender = ''
      }) => ({
        url: endpoint.character,
        params: {
          page,
          ...(name && { name }),
          ...(status && { status }),
          ...(species && { species }),
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
          gender: arg.gender
        }
      }),
      merge: (currentCache, newItems) => {
        // Если новые фильтры или первая страница - заменяем данные
        if (
          !currentCache ||
          newItems.currentPage === 1 ||
          JSON.stringify(currentCache.filters) !==
            JSON.stringify(newItems.filters)
        ) {
          return newItems
        }

        // Иначе объединяем результаты
        return {
          ...newItems,
          characters: [
            ...currentCache.characters,
            ...(newItems.characters || [])
          ]
        }
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Уникальный ключ для комбинации фильтров
        return `${endpointName}_${queryArgs.name || ''}_${
          queryArgs.status || ''
        }_${queryArgs.species || ''}_${queryArgs.gender || ''}`
      },
      forceRefetch({ currentArg, previousArg }) {
        // Обновляем при изменении страницы или фильтров
        return (
          currentArg?.page !== previousArg?.page ||
          currentArg?.name !== previousArg?.name ||
          currentArg?.status !== previousArg?.status ||
          currentArg?.species !== previousArg?.species ||
          currentArg?.gender !== previousArg?.gender
        )
      }
    })
  })
})

export const {
  useGetCharactersQuery,
  useLazyGetCharactersQuery,
  useGetAllSpeciesQuery
} = characterApi
