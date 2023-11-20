import { PostInterface, VisibilityType, WeatherType } from '../types'

const postsEntries: PostInterface[] = [
  {
    id: 1,
    date: '2017-02-03',
    weather: WeatherType.Rainy,
    visibility: VisibilityType.Poor,
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text1'
  },
  {
    id: 2,
    date: '2017-10-03',
    weather: WeatherType.Stormy,
    visibility: VisibilityType.Poor,
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text2'
  },
  {
    id: 3,
    date: '2019-02-03',
    weather: WeatherType.Sunny,
    visibility: VisibilityType.Good,
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text3'
  },
  {
    id: 4,
    date: '2017-12-03',
    weather: WeatherType.Snowy,
    visibility: VisibilityType.Poor,
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text4'
  }
]

export default postsEntries
