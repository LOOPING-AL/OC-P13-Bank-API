import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/data/dataSlice";

export default configureStore({
  reducer: {
    data: counterReducer,
  },
});
