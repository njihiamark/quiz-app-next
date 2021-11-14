import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  data?: Question[];
  total_qns: number;
  answered: number;
  answered_correctly: number;
  difficulty_setting: string;
  amount_setting: number;
  pending: boolean;
  error: boolean;
};

type QuizSetting = {
  difficulty_setting: string;
  amount_setting: number;
}


//initialize the initial state
const initialState: QuestionsState = {
  data: [],
  total_qns: 0,
  answered: 0,
  answered_correctly: 0,
  difficulty_setting: "easy",
  amount_setting: 0,
  pending: false,
  error: false,
};

//function to get the questions from third party API
export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (settingsObject: { Amount: number, Difficulty: string }) => {
    const {Amount, Difficulty} = settingsObject;
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${Amount}&difficulty=${Difficulty}&type=boolean`
    );


    let count = 0;
    const processedData = response.data.results?.map((item) => {
      item.id = ++count;
      item.answered_correctly = false;
      item.answered = false;
      return item;
    });

    return processedData;
  }
);


//let us define the slice
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    quizSettings: (state, action: PayloadAction<QuizSetting>) => {
      state.difficulty_setting = action.payload.difficulty_setting;
      state.amount_setting = action.payload.amount_setting;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.pending = true;
      })
      .addCase(getQuestions.fulfilled, (state, {payload} ) => {
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

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  quizSettings
} = questionSlice.actions;

//this helps us get the questions state anywere in the app
export const selectQuestions = (state: AppState) => state.questions;

//we export default the reducers
export default questionSlice.reducer;
