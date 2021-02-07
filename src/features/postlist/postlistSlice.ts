import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Post, PostResults, getPosts } from '../../app/api/postAPI'
import { SelectItem } from '../../components/select/Select'

export interface PostsState {
  posts: Post[] | null
  error: string | null
  loading: boolean
  userIds: SelectItem[] | null
}

const initialState = {
  posts: [],
  error: null,
  loading: false,
  userIds: []
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
    },
    setUserIds(state, action: PayloadAction<PostResults>) {
      const selectArr = extractUserIds(action.payload).map(id => {
        return { value: id, label: id, id }
      })
      state.userIds = selectArr;
    }
  }
})

export const {
  getPostsStart,
  getPostsSuccess,
  getPostsFailed,
  setUserIds
} = postsResults.actions

export default postsResults.reducer

export const fetchPosts = (): AppThunk => async dispatch => {
  try {
    const posts = await getPosts()
      .then((data) => {
        dispatch(getPostsSuccess(data))
        dispatch(setUserIds(data))
      })
  } catch (err) {
    dispatch(getPostsFailed(err.toString()))
  }

}

export const extractUserIds = (data: PostResults) => {
  return [...new Set(data.postsResults.map((post) => post.userId.toString()))]
}