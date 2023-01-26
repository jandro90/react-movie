import { configureStore } from '@reduxjs/toolkit'
import { TvMazeApi } from '../api/TvMazeApi'
import appReducer  from '../slices/AppSlice'

import userReducer from '../slices/UserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    [TvMazeApi.reducerPath]: TvMazeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TvMazeApi.middleware),

})
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch