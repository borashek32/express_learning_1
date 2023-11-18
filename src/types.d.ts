import { PostInterface } from './types.d';
export type WeatherType = 'sunny' | 'rainy' | 'snowy' | 'stormy'

export type VisibilityType = 'great' | 'good' | 'ok' | 'poor'

export interface PostInterface {
  id: number
  date: string
  weather: WeatherType
  visibility: VisibilityType
  comment: string
}

// export type getEntriesWithoutSensetiveInfoType = Pick<PostInterface, id | date | weather | visibility>
export type getEntriesWithoutSensetiveInfoType = Omit<PostInterface, 'comment'>