import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const TvMazeApi = createApi({
    reducerPath: "TvMazeApi",
    baseQuery: fetchBaseQuery({ baseUrl: " https://api.tvmaze.com" }),
    endpoints: (builder) => ({
        getShowsByName: builder.query<any, string>({
            query: (name) => `/search/shows?q=${name}`,
        }),
        getShowById: builder.query<any, string>({
            query: (id) => `/shows/${id}`,
        }),
    }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShowsByNameQuery, useGetShowByIdQuery } = TvMazeApi;
