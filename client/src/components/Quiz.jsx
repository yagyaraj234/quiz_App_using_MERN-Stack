import React, { useEffect } from 'react'
import Questions from './Questions';

// redux store import 
import {useSelector,useDispatch} from 'react-redux'
import { moveNextAction, movePrevAction } from '../redux/questionReducer';
import { pushAnswer } from '../hooks/setResult';

import {Navigate} from 'react-router-dom';
import { useState } from 'react';


const Quiz = () => { 

  const [check, setCheck] = useState(undefined)
  const result =useSelector(state=>state.result.result);
  const {queue, trace} = useSelector(state=>state.questions);

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(trace); 
    
  })

  function onNext(){
    if(trace<queue.length){
      dispatch(moveNextAction());    
      if(result.length <=trace){    
      dispatch(pushAnswer(check))
      }
    }
  }
  function onPrev(){
    if(trace>0){
      dispatch(movePrevAction())
    }
  }

  function onChecked(check){
    setCheck(check);
  }

  // finishing Exam After last question

  if(result.length && result.length >=queue.length ){
    return  <Navigate to={'/result'} replace="true"></Navigate>
  }

  return (
    <div className='conatiner'>
      <h1 className='heading'>Quiz</h1>

      {/* Display questions  */}
      <Questions onChecked={onChecked}/>

      {/* Buttons  */}
      <div className='grid'>
        {trace>0 ? <button className='btn prev' onClick={onPrev}>Prev</button> :<div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}

export default Quiz;