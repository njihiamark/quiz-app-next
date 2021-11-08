import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "../../app/store";
import axios from "axios";

//define the Question type
export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  id?: string;
  answered_correctly?: boolean;
  answered?: boolean;
};

//define how the state of this slice will look like
export type QuestionsState = {
  data: Question[];
  total_qns: number;
  answered: number;
  answered_correctly: number;
  difficulty: string;
  pending: boolean;
  error: boolean;
};


//initialize the initial state
const initialState: QuestionsState = {
  data: [],
  total_qns: 0,
  answered: 0,
  answered_correctly: 0,
  difficulty: "easy",
  pending: false,
  error: false,
};

//function to get the questions from third party API
export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (amount, difficulty) => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
    );

    let count = 0;
    const processedData = await response.data?.map((item) => {
      item.id = ++count;
      item.answered_correctly = false;
      item.answered = false;
    });

    return processedData;
  }
);


//let us define the slice
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.pending = true;
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
        state.pending = false;
        state.data = payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

//this helps us get the questions state anywere in the app
export const selectQuestions = (state: AppState) => state.questions;

//we export default the reducers
export default questionSlice.reducer;
