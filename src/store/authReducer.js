import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginUser (state,action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser (state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser} = authSlice.actions;

//selector 
export const loginState =  (state)=> state.auth.value;
export default authSlice.reducer;