import React from 'react';
import { PostContext } from './PostList'
import { Select } from '../../components/select/Select';

export function FeaturedPosts() {

  return (
    <PostContext.Consumer>
      {context => {
        function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
          context.setSelectedUserID(e.target.value)
        }
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
        return (
          <div>
            <h2>Featured Posts <Select options={context.postsResults.userIds!} onChange={handleOnChange} /></h2>
            <ul>{renderedPosts}</ul>
          </div>
        )
      }}

    </PostContext.Consumer>
  )
}