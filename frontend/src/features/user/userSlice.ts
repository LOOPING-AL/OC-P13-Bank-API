import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { userState } from "../../global";

const initialState: userState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
