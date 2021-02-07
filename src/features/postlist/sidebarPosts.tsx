import React from 'react';
import { PostItem } from '../../components/postItem/postItem';
import { PostContext } from './PostList'

export function SidebarPosts() {

  return (

    <div>
      <h2>Other Posts</h2>
      <PostItem />
    </div>

  )
}