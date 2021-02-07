import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPosts } from './postlistSlice';
import { RootState } from '../../app/rootReducer';
import { Select } from '../../app/components/select/Select';


export function PostList() {
  const dispatch = useDispatch()
  const { postsLoading, postsError, postsResults } = useSelector(
    (state: RootState) => {
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

  return (
    <div>
      <Select options={postsResults.userIds} />
      <ul>{renderedPosts}</ul>
    </div>
  );


}