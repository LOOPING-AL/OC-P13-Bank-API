import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { nameType, userState } from "../../global";

const initialState: userState = {
  token: "",
  user: {
    email: "",
    firstName: "",
    id: "",
    lastName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = initialState.token;
      state.user = initialState.user;
    },
    updateName: (state, action: PayloadAction<nameType>) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    },
  },
});

export const { login, logout, updateName } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getToken = (state: RootState) => state.user.token;
export const getProfile = (state: RootState) => state.user.user;

export default userSlice.reducer;
