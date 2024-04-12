import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cashReducer } from './reducer'
import { postReducer } from './postReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  cash: cashReducer,
  post: postReducer,
})

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
