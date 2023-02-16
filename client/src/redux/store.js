import {
  combineReducers,
  configReducer,
  configureStore,
} from "@reduxjs/toolkit";
import { Result } from "../components";

// call reduce 
import  questionReducer  from "./questionReducer";
import  resultReducer  from "./resultReducer";
const rootReducer = combineReducers({
    questions :questionReducer,
    result:resultReducer
});


export default configureStore({reducer:rootReducer})
