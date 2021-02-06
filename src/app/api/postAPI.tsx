import axios from 'axios';


export interface Post {
  id: number
  userId: number
  title: string
  body: string
}


export interface PostResults {
  postsResults: Post[]
}

export async function getPosts(
): Promise<PostResults> {
  const url = `https://jsonplaceholder.typicode.com/posts`

  try {
    const postResponse = await axios.get<Post[]>(url)
    return {
      postsResults: postResponse.data
    }
  } catch (err) {
    throw err
  }
}
