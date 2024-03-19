import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardTexts: [],
  cardId: '',
  cardDetails: {
    card_name: '',
    address: '',
    design: 'linear',
    color: '',
    profile_image: '',
    cover_image: '',
    name: '',
    type: 'Public',
    bio: '',
    company_name: '',
    company_logo: '',
    email: [],
    phone_number: [],
    designation: ''
  }
}

const tempCardSlice = createSlice({
  name: 'tempCard',
  initialState,
  reducers: {
    setCardTexts: (state, action) => {
      state.cardTexts = action.payload
    },
    resetCardTexts: state => {
      state.cardTexts = []
    },
    setCardDetails: (state, action) => {
      state.cardDetails = { ...state.cardDetails, ...action.payload }
    },
    setCardId: (state, action) => {
      state.cardId = action.payload
    }
  }
})

export const { setCardTexts, resetCardTexts, setCardDetails, setCardId } = tempCardSlice.actions
export default tempCardSlice.reducer
