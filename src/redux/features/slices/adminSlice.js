import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navbarOpen: false
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setNavbar: (state, action) => {
      state.navbarOpen = action.payload
    }
  }
})

export const { setNavbar } = adminSlice.actions

export default adminSlice.reducer
