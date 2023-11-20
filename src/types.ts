export enum WeatherType {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Snowy = 'snowy',
  Stormy = 'stormy'
}

export enum VisibilityType {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface PostInterface {
  id: number
  date: string
  weather: WeatherType
  visibility: VisibilityType
  comment: string
}

// export type getEntriesWithoutSensetiveInfoType = Pick<PostInterface, id | date | weather | visibility>
export type PostsWithoutCommentType = Omit<PostInterface, 'comment'>

export type NewPostType = Omit<PostInterface, 'id'>
