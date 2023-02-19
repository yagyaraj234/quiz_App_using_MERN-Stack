// fetch question hook 

import data from "../database/data";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Action from '../redux/questionReducer'

export const useFetchQuestion =()=>{

    const dispatch = useDispatch()
    const [getData,setGetData]=useState({
      isLoading:false,
      apiData :[],
    serverError:null
    })

    useEffect(() => {
      setGetData(prev=>({...prev,isLoading:true}))

      (async()=>{
            try{
                let question =await data;
                if(question.length>0){

                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData :question}));
                    dispatch(Action.startExamAction(question));
                }else{
                    throw new Error('No  Question available');
                }
            }catch(error){
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,serverError:error}))
            }
      })()
    },[dispatch]);

    return[getData,setGetData];
    
}