import React from 'react';
import { PostContext } from './PostList'
import { Select } from '../../components/select/Select';
import { PostItem } from '../../components/postItem/postItem';

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
        return (
          <div>
            <h2>Featured Posts <Select options={context.postsResults.userIds!} onChange={handleOnChange} /></h2>
            <PostItem featured />
          </div>
        )
      }}

    </PostContext.Consumer>
  )
}