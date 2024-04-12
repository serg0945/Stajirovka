import { GET_POST_PENDING, GET_POST_FULFILLED, GET_POST_REJECTED, POST_PUSH, POST_DELETE } from './actionPost'
import { ActionPostType } from './actionPost'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface State {
  posts: Post[]
  isLoading: boolean
  error: string | null
}

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
}

export const postReducer = (state: State = initialState, action: ActionPostType): State => {
  switch (action.type) {
    case GET_POST_PENDING:
      return { ...state, isLoading: true }
    case GET_POST_FULFILLED:
      return { ...state, isLoading: false, posts: action.payload }
    case GET_POST_REJECTED:
      return { ...state, isLoading: false, error: action.payload }
    case POST_PUSH:
      return { ...state, isLoading: false, posts: [...state.posts, action.payload] }
    case POST_DELETE:
      return { ...state, isLoading: false, posts: state.posts.filter(post => post.id !== state.posts.length) }
    default:
      return state
  }
}
