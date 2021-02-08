import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPosts } from './postlistSlice';
import { RootState } from '../../app/rootReducer';
import FeaturedPosts from "./FeaturedPosts";
import { SidebarPosts } from "./SidebarPosts";
import './postlist.component.scss';

export const PostContext = React.createContext({
  postsResults: {
    posts: null as any,
    error: null as any,
    loading: true,
    userIds: null as any
  },
  selectedUserID: "",
  setSelectedUserID: null as any
});

export default function PostList() {
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

  return (
    <>
      <div className="container">
        <PostContext.Provider value={{ postsResults, selectedUserID, setSelectedUserID }}>
          <div className="featured">
            <FeaturedPosts />
          </div>
          <div className="other">
            <SidebarPosts />
          </div>
        </PostContext.Provider>
      </div>
    </>
  );


}