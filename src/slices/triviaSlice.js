import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../services/triviaService";

export const fetchTriviaData = createAsyncThunk('trivia/callApi', async (data) => {
  const triviaData = await callApi(data);
  return triviaData;
});

const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    triviaData: [],
    status: '',
    error: null,
    currentQuestion: 0,
    isValidated: false,
    score: 0,
    displayScore: false,
    isPlaying: false,
    formData: {
      category: '',
      difficulty: ''
    }
  },
  reducers: {
    updateFormData(state, action) {
      const { name, value } = action.payload;
      return {
        ...state,
        formData: {
          ...state.formData,
          [name]: value
        }
      }
    },
    startGame(state) {
      state.isPlaying = true
    },
    finishGame(state) {
      state.isPlaying = false
    },
    addScore(state) {
      state.score += 1
    },
    resetScore(state) {
      state.score = 0
    },
    updateCurrentQuestion(state) {
      state.currentQuestion += 1
    },
    resetCurrentQuestion(state) {
      state.currentQuestion = 0
    },
    validateQuestion(state) {
      state.isValidated = true
    },
    resetValidated(state) {
      state.isValidated = false
    },
    updateShowScore(state) {
      state.displayScore = !state.displayScore
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTriviaData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTriviaData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.triviaData = action.payload;
      })
      .addCase(fetchTriviaData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export const { updateFormData, startGame, finishGame, addScore, resetScore, updateCurrentQuestion, resetCurrentQuestion, validateQuestion, resetValidated, updateShowScore } = triviaSlice.actions;
export const triviaSliceReducer = triviaSlice.reducer
