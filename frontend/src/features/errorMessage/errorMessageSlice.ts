import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface errorMessageState {
  errorMessage: string | null;
}

const initialState: errorMessageState = {
  errorMessage: null,
};

export const errorMessageSlice = createSlice({
  name: "errorMessage",
  initialState,
  reducers: {
    changeErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { changeErrorMessage } = errorMessageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getMessage = (state: RootState) => state.errorMessage.errorMessage;

export default errorMessageSlice.reducer;
