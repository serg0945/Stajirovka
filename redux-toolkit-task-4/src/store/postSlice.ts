import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type SliceState =

const initialState = {
  post: 0,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
})

export default postSlice.reducer
