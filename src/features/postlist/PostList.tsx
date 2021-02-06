import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postlistSlice';
import { RootState } from '../../app/rootReducer';
import { getPosts, PostResults } from '../../app/api/postAPI'


export function PostList() {
  const dispatch = useDispatch()
  const [postsResult, setPosts] = useState<PostResults>({ posts: [] })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [issuesError, setIssuesError] = useState<Error | null>(null)
  const openIssueCount = useSelector(
    (state: RootState) => state.posts
  )

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts()
      setPosts(posts)
    }

    fetchPosts()
  })

  const renderedPosts = (
    postsResult ? postsResult.posts.map(post => {
      return <li><h2>{post.title}</h2><p>{post.body}</p></li>
    }) : null
  )

  return (<div><ul>{renderedPosts}</ul></div>);


}