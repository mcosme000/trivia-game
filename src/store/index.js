import { configureStore } from "@reduxjs/toolkit";
import { triviaSliceReducer } from "../slices/triviaSlice"

const store = configureStore({
  reducer: {
    trivia: triviaSliceReducer
  }
})

export default store;
