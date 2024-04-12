import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import {
  ActionPostType,
  getPostPending,
  GET_POST_FULFILLED,
  GET_POST_REJECTED,
  getPostFulfilled,
  getPostRejected,
} from '@/store/actionPost'
import { RootState } from '@/store/store'

export const getPosts = () => {
  return async (dispatch: Dispatch<ActionPostType>) => {
    dispatch(getPostPending())
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: 50,
        },
      })
      dispatch(getPostFulfilled(data))
    } catch (err: any) {
      dispatch(getPostRejected(err))
    }
  }
}

// export const getPosts = (): ThunkAction<void, RootState, unknown,UnknownAction> => {
//   async dispatch => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     dispatch({ type: GET_POST_FULFILLED, payload: data })
//   }
// }
