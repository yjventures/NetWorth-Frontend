import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCard: ''
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload
    }
  }
})

export const { setSelectedCard } = cardSlice.actions

export default cardSlice.reducer
