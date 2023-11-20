import { NewPostType, VisibilityType, WeatherType } from './types'

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromReq
}

const parseDate = (dateFromReq: any): string => {
  if (!isDate(dateFromReq) || !isString(dateFromReq)) {
    throw new Error('Inncorect or missing date')
  }

  return dateFromReq
}

const parseWeather = (weatherFromReq: any): WeatherType => {
  if (!isWeather(weatherFromReq) || !isString(weatherFromReq)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): VisibilityType => {
  if (!isVisibility(visibilityFromReq) || !isString(visibilityFromReq)) {
    throw new Error('incorrect or missing visibility')
  }

  return visibilityFromReq
}

const isString = (param: string): boolean => typeof param === 'string'
const isDate = (param: string): boolean => Boolean(Date.parse(param))
const isWeather = (param: any): boolean => Object.values(WeatherType).includes(param)
const isVisibility = (param: any): boolean => Object.values(VisibilityType).includes(param)

const toNewPost = (object: any): NewPostType => {
  const newPost: NewPostType = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newPost
}

export default toNewPost
