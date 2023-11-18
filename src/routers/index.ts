import express from "express"
import * as postsServices from '../services/postsService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(postsServices.getEntriesWithoutSensetiveInfo())
})

router.post('/', (_req, res) => {
  res.send('saving post')
})

export default router