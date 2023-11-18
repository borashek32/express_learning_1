import postsData from './posts.json'
import { PostInterface, getEntriesWithoutSensetiveInfoType } from '../types'

const posts: PostInterface[] = postsData as PostInterface[]

export const getEntries = (): PostInterface[] => posts

export const getEntriesWithoutSensetiveInfo = (): getEntriesWithoutSensetiveInfoType[] => posts

export const addEntry = (): undefined => undefined