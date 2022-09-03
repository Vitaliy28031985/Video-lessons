import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const videosApi = createApi({
   reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6312e756a8d3f673ffc0efc3.mockapi.io/api/v1/',
  }),
  tagTypes: ['Video'],
  endpoints: builder => ({
   getVideos: builder.query({
   query: () => '/videos',
   providesTags: ['Video'],
       }),

   addVideo: builder.mutation({
   query: newVideo => ({
   url: '/videos',
   method: 'POST',
   body: newVideo,
   }),
   invalidatesTags: ['Video'],
   }),

   deleteVideo: builder.mutation({
   query: id => ({
   url: `/videos/${id}`,
   method: 'DELETE',
   }),
   invalidatesTags: ['Video'],
   }),
   }),
   });

export const { 
useGetVideosQuery,
useAddVideoMutation,
useDeleteVideoMutation,  
} = videosApi;