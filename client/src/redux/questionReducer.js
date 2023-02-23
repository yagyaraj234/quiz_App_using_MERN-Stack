import { createSlice } from "@reduxjs/toolkit";
// import { Questions } from "../components/index";
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answer: [],
    trace: 0
  },
  reducers: {
    startExamAction: (state, action) => {
      let {question,answers} =action.payload
      return {
        ...state,
        queue: question,
        answers

      };
    },

    moveNextAction:(state)=>{
      return{
        ...state,
        trace:state.trace+1
      }

    },
    movePrevAction:(state)=>{
      return{
        ...state,
        trace:state.trace-1
      }
    },
    resetAllAction:()=>{
      return {
        queue:[],
        answer:[],
        trace:0
      }
    }
  },
});

export const { startExamAction,resetAllAction,moveNextAction, movePrevAction } = questionReducer.actions;
export default questionReducer.reducer;
