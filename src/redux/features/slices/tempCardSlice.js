import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardTexts: []
}

const tempCardSlice = createSlice({
  name: 'tempCard',
  initialState,
  reducers: {
    setCardTexts: (state, action) => {
      state.cardTexts = action.payload
    }
  }
})

export const { setCardTexts } = tempCardSlice.actions
export default tempCardSlice.reducer
