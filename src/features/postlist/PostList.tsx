import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPosts } from './postlistSlice';
import { RootState } from '../../app/rootReducer';
import { Select } from '../../app/components/select/Select';
import { FeaturedPosts } from "./featuredPosts";
import { SidebarPosts } from "./sidebarPosts";
import PostState from './postlistSlice'

export const PostContext = React.createContext({
  postsResults: {
    posts: null as any,
    error: null as any,
    loading: true,
    userIds: null as any
  },
  selectedUserID: ""
});

export function PostList() {
  const dispatch = useDispatch();
  const [selectedUserID, setSelectedUserID] = useState('1')
  const { postsResults } = useSelector(
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

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedUserID(e.target.value)
  }


  return (
    <>
      <Select options={postsResults.userIds!} onChange={handleOnChange} />
      <PostContext.Provider value={{ postsResults, selectedUserID }}>
        <FeaturedPosts />
        <SidebarPosts />
      </PostContext.Provider>
    </>
  );


}