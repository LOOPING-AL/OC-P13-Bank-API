import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    email: null,
    token: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    login: (state, token) => {
      state.token = token;
    },
  },
});

export const { login } = dataSlice.actions;

export default dataSlice.reducer;
