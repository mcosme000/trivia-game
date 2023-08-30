import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getHint from "../services/hintService";

export const fetchHint = createAsyncThunk('hint/getHint', async (data) => {
  const hint = await getHint(data);
  return hint;
})

const hintSlice = createSlice({
  name: "hint",
  initialState: {
    hint: "",
    status: "",
    error: null
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


export const hintSliceReducer = hintSlice.reducer
