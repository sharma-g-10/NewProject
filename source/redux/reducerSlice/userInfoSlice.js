import {createSlice} from '@reduxjs/toolkit';
import { actionType } from '../actionType';

const initialState = {
  userData: null,

};

const userInfoSlice = createSlice({
  name: actionType.userInfo,
  initialState,
  reducers: {
    storeUserData: (state, action) => {
        state.userData = action?.payload?.data?.data;
    },
    
  },
});

export const {storeUserData} =
userInfoSlice.actions;

export default userInfoSlice.reducer;
