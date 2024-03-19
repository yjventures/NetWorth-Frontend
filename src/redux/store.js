import { configureStore } from '@reduxjs/toolkit'
import api from './api/apiSlice'
import tempCardSlice from './features/slices/tempCardSlice'

const store = configureStore({
  reducer: {
    tempCard: tempCardSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export default store
