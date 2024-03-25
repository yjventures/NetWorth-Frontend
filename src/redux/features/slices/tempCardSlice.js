import { CARD_COLORS } from '@/configs/common'
import { createSlice } from '@reduxjs/toolkit'

const initialCardDetails = {
  card_name: '',
  address: '',
  design: 'linear',
  color: CARD_COLORS[0].color,
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

const initialState = {
  cardTexts: [],
  cardId: '',
  cardDetails: initialCardDetails,
  updateCardDetails: initialCardDetails
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
      const allDetails = { ...state.cardDetails, ...action.payload }
      state.cardDetails = allDetails
      //localStorage.setItem('cardDetails', JSON.stringify(allDetails))
    },
    setUpdateCardDetails: (state, action) => {
      const allDetails = { ...state.updateCardDetails, ...action.payload }
      state.updateCardDetails = allDetails
    },
    setCardId: (state, action) => {
      state.cardId = action.payload
    }
  }
})

export const { setCardTexts, resetCardTexts, setCardDetails, setUpdateCardDetails, setCardId } = tempCardSlice.actions
export default tempCardSlice.reducer
