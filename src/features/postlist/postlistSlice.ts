import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Post, PostResults, getPosts } from '../../app/api/postAPI'

interface PostsState {
  posts: Post[] | null
  error: string | null
}

const initialState = {
  posts: [],
  error: null
} as PostsState;

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsSuccess(state, action: PayloadAction<PostResults>) {
      state.posts = action.payload.posts
      state.error = null
    },
    getPostsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload
    }
  }
})

export const {
  getPostsSuccess,
  getPostsFailed
} = posts.actions

export default posts.reducer

export const fetchPosts = (): AppThunk => async dispatch => {
  try {
    const posts = await getPosts()
    dispatch(getPostsSuccess(posts))
  } catch (err) {
    dispatch(getPostsFailed(err.toString()))
  }
}