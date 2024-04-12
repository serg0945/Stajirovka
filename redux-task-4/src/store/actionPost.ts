import { Post } from './postReducer'

enum EPost {
  GET_POST_PENDING = 'GET_POST_PENDING',
  GET_POST_FULFILLED = 'GET_POST_FULFILLED',
  GET_POST_REJECTED = 'GET_POST_REJECTED',
  POST_PUSH = 'POST_PUSH',
  POST_DELETE = 'POST_DELETE',
}

export const { GET_POST_PENDING, GET_POST_FULFILLED, GET_POST_REJECTED, POST_PUSH, POST_DELETE } = EPost

interface GetPostPending {
  type: typeof GET_POST_PENDING
}

interface GetPostFulfilled {
  type: typeof GET_POST_FULFILLED
  payload: Post[]
}

interface GetPostRejected {
  type: typeof GET_POST_REJECTED
  payload: string
}

interface PostPush {
  type: typeof POST_PUSH
  payload: Post
}

interface PostDelete {
  type: typeof POST_DELETE
}

// interface IPost<T, U> {
//   type: T
//   payload: U
// }

export type ActionPostType = GetPostPending | GetPostFulfilled | GetPostRejected | PostPush | PostDelete

export const getPostPending = (): GetPostPending => ({ type: GET_POST_PENDING })
export const getPostFulfilled = (payload: Post[]): GetPostFulfilled => ({ type: GET_POST_FULFILLED, payload })
export const getPostRejected = (payload: string): GetPostRejected => ({ type: GET_POST_REJECTED, payload })
export const postPush = (payload: Post): PostPush => ({ type: POST_PUSH, payload })
export const postDelete = (): PostDelete => ({ type: POST_DELETE })
