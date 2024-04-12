import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cashReducer from './cashSlice'

const devTools = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({
  cash: cashReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
