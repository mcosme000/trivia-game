import { configureStore } from "@reduxjs/toolkit";
import { triviaSliceReducer } from "../slices/triviaSlice"
import { hintSliceReducer } from "../slices/hintSlice";

const store = configureStore({
  reducer: {
    trivia: triviaSliceReducer,
    hint: hintSliceReducer
  }
})

export default store;
