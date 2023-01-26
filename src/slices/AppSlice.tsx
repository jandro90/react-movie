import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface appState {
  selectedShow: any,
  search: string,
}

const initialState: appState = {
  selectedShow: null,
  search: 'girls',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSelectedShow: (state, action: PayloadAction<any>) => {
      state.selectedShow = action.payload;
    },
    removeSelectedShow: (state) => {
      state.selectedShow = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearch, setSelectedShow, removeSelectedShow } = appSlice.actions

export default appSlice.reducer