import postsData from './posts.json'
import { NewPostType, PostInterface, PostsWithoutCommentType } from '../types'

const posts: PostInterface[] = postsData as PostInterface[]

export const getPosts = (): PostInterface[] => posts

export const findById = (id: number): PostsWithoutCommentType | undefined => {
  const post = posts.find(post => post.id === id)

  if (post !== undefined) {
    const { comment, ...restProps } = post
    return restProps
  }
  return undefined
}

export const getPostsWithoutComment = (): PostsWithoutCommentType[] => {
  return posts.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addPost = (newPostEntry: NewPostType): PostInterface => {
  const newPost = {
    id: Math.max(...posts.map(p => p.id)) + 1,
    ...newPostEntry
  }
  posts.push(newPost)

  return newPost
}
