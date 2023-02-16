import { createSlice } from "@reduxjs/toolkit";
// import { Questions } from "../components/index";
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answer: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;
export default questionReducer.reducer;
