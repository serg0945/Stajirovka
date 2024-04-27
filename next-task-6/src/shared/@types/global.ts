import { ParsedUrlQuery } from 'querystring'

export type Nullable<T> = T | null

export type Character = {
  name: string
  image: string
  id: number
}

export type Episode = {
  id: number
  name: string
}

export interface Params extends ParsedUrlQuery {
  episode: string
}
