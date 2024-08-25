import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLiked: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLikeFilter: (state) => {
      state.isLiked = !state.isLiked
    },
  },
})

export const { setLikeFilter } = filterSlice.actions

export const selectLikeFilter = (state) => state.filter.isLiked

export default filterSlice.reducer
