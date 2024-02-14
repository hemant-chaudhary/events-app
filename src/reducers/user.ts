import {createSlice} from '@reduxjs/toolkit';
import type {User} from '../types';

// Define the initial state using that type
const initialState: User = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload;
    },
    resetUser: state => {
      state.name = '';
    },
  },
});

export const {addUser, resetUser} = userSlice.actions;

export default userSlice.reducer;
