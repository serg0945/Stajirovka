enum EAction {
  ADD_COUNT = 'ADD_COUNT',
  DELETE_COUNT = 'DELETE_COUNT',
}

export const { ADD_COUNT, DELETE_COUNT } = EAction

interface addCount {
  type: typeof ADD_COUNT
  payload: number
}

interface deleteCount {
  type: typeof DELETE_COUNT
  payload: number
}

export type ActionType = addCount | deleteCount

export const addCount = (payload: number) => ({ type: ADD_COUNT, payload })
export const deleteCount = (payload: number) => ({ type: DELETE_COUNT, payload })
