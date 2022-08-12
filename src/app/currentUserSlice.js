import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: null,
  error: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
     
      state.user = payload;
    },
    removeUser: state => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
