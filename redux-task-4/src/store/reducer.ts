import { ADD_COUNT, DELETE_COUNT, ActionType } from './actions'

const initialState = {
  cash: 0,
}

interface State {
  cash: number
}

export const cashReducer = (state: State = initialState, action: ActionType): State => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, cash: state.cash + action.payload }
    case DELETE_COUNT:
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}
