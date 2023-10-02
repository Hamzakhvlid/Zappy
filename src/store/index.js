import { configureStore } from '@reduxjs/toolkit'
import authReducer, { authSlice } from './authReducer'



export default configureStore({
  reducer: {
    auth: authReducer
  }

})