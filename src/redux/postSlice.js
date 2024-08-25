import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      throw error
    }
  }
)

const addIsLikedPropsToArray = (array) => {
  return array.map((el) => {
    return { ...el, isLiked: false }
  })
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload)
    },
    toggleLike: (state, action) => {
      state.forEach((post) => {
        if (post.id === action.payload) {
          post.isLiked = !post.isLiked
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      action.payload = addIsLikedPropsToArray(action.payload)
      state.push(...action.payload)
    })
  },
})

export const { deletePost, toggleLike } = postSlice.actions

export const selectPosts = (state) => state.posts

export default postSlice.reducer
