import { Post } from './types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const postService = createApi({
  reducerPath: 'postService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    axiosAllPosts: builder.query({
      query: () => ({ url: '/posts' }),
    }),
  }),
})
