import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  user: object | null,
  isLoading: boolean,
}

const initialState: userState = {
  user: null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'label',
  initialState,
  reducers: {
    setUser: (state: userState, action) => {
        state.user = action.payload;
    },
    removeUser: (state: userState) => {
        state.user = null;
    },
    setLoading: (state: userState, action) => {
        state.isLoading = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setLoading } = userSlice.actions

 export default userSlice.reducer