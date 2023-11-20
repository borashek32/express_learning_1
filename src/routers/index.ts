import express from 'express'
import * as postsServices from '../services/postsService'
import { PostsWithoutCommentType } from '../types'
import toNewPost from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(postsServices.getPostsWithoutComment())
})

router.get('/:id', (req, res) => {
  const post: PostsWithoutCommentType | undefined = postsServices.findById(+req.params.id)

  return (post !== null)
    ? res.send(post)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newPostEntry = toNewPost(req.body)
    const addedPost = postsServices.addPost(newPostEntry)

    res.json(addedPost)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
