import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Post, PostResults, getPosts } from '../../app/api/postAPI'

interface PostsState {
  posts: Post[] | null
  error: string | null
  loading: boolean
}

const initialState = {
  posts: [],
  error: null,
  loading: false
} as PostsState;

const postsResults = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true
      state.error = null
    },
    getPostsSuccess(state, action: PayloadAction<PostResults>) {
      state.posts = action.payload.postsResults
      state.loading = false
      state.error = null
    },
    getPostsFailed(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getPostsStart,
  getPostsSuccess,
  getPostsFailed
} = postsResults.actions

export default postsResults.reducer

export const fetchPosts = (): AppThunk => async dispatch => {
  try {
    const posts = await getPosts()
    dispatch(getPostsSuccess(posts))
  } catch (err) {
    dispatch(getPostsFailed(err.toString()))
  }

}