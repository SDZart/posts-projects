import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import filterReducer from './filterSlice'

const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer,
  },
})

export default store
