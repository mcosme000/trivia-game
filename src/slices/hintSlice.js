import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getHint from "../services/hintService";

export const fetchHint = createAsyncThunk('hint/getHint', async ({ question, answers }) => {
  const hint = await getHint(question, answers);
  return hint;
})

const hintSlice = createSlice({
  name: "hint",
  initialState: {
    hint: "",
    status: "",
    error: null,
    displayHint: false
  },
  reducers: {
    resetHint(state) {
      state.hint = ""
    },
    updateDisplayHint(state) {
      state.displayHint = true
    },
    hideHint(state) {
      state.displayHint = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHint.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHint.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hint = action.payload;
      })
      .addCase(fetchHint.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
})

export const { updateDisplayHint, hideHint, resetHint } = hintSlice.actions;
export const hintSliceReducer = hintSlice.reducer
