import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { CaseReducer } from '@reduxjs/toolkit'

// export const addCash: CaseReducer<number, PayloadAction<number>> = (state, action) => state + action.payload

// type SliceState = { state: 'loading' } | {state: 'loading'; data: string}
type SliceState = { cash: number }

const initialState: SliceState = { cash: 0 }

const cashSlice = createSlice({
  name: 'cash',
  initialState,
  reducers: {
    addCash(state, action: PayloadAction<number>) {
      state.cash += action.payload
    },
    deleteCash(state) {
      state.cash -= 1
    },
  },
})

export const { addCash, deleteCash } = cashSlice.actions
export default cashSlice.reducer
