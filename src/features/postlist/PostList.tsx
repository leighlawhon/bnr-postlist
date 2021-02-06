import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPosts } from './postlistSlice';
import { RootState } from '../../app/rootReducer';
// import { getPosts, PostResults } from '../../app/api/postAPI'


export function PostList() {
  const dispatch = useDispatch()
  const { postsLoading, postsError, postsResults } = useSelector(
    (state: RootState) => {
      console.log(state.postsResults.posts)
      return {
        postsLoading: state.postsResults.loading,
        postsError: state.postsResults.error,
        postsResults: state.postsResults
      }
    },
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderedPosts = (
    postsResults.posts ? postsResults.posts.map(post => {
      return <li key={`post-${post.id}`}><h2>{post.title}</h2><p>{post.body}</p></li>
    }) : <div>No Posts Available</div>
  )

  return (<div><ul>{renderedPosts}</ul></div>);


}