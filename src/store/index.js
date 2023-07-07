import { configureStore } from "@reduxjs/toolkit";
import triviaSlice from "../slices/triviaSlice";

const store = configureStore({
  reducer: {
    trivia: triviaSlice.reducer
  }
})

export default store;
