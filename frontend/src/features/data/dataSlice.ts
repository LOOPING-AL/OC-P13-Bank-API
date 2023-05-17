import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface dataState {
  key: string;
}

const initialState: dataState = {
  key: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
  },
});

export const { login } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getKey = (state: RootState) => state;

export default dataSlice.reducer;
