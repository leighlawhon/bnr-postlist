import React from 'react';
import { PostContext } from '../../features/postlist/PostList'

export function PostItem() {

  return (
    <PostContext.Consumer>
      {(context: any) => {
        if (context === undefined) {
          throw new Error('CountConsumer must be used within a CountProvider')
        }
        const filteredPosts = context.postsResults.posts.filter((post: any) => {
          return post.userId.toString() === context.selectedUserID
        })
        const renderedPosts = (
          filteredPosts ? filteredPosts.map((post: any) => {
            return <li key={`post-${post.id}`}><h2>{post.title}</h2><p>{post.body}</p></li>
          }) : <div>No Posts Available</div>
        )
        return (<ul>{renderedPosts}</ul>)
      }}

    </PostContext.Consumer>
  )
}