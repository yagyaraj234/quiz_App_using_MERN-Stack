import React, { useEffect } from 'react'
import Questions from './Questions';

// redux store import 
import {useSelector,useDispatch} from 'react-redux'
import questionReducer, { moveNextAction, movePrevAction } from '../redux/questionReducer';
import {FetchQuestion,ques} from '../hooks/FetchQuestions'


const Quiz = () => { 

  const trace = useSelector(state=>state.questions.trace);

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(trace); 
    
  })

  function onNext(){
    dispatch(moveNextAction())
  }
  function onPrev(){
    if(trace>0){
      dispatch(movePrevAction())
    }
  }

  return (
    <div className='conatiner'>
      <h1 className='heading'>Quiz</h1>

      {/* Display questions  */}
      <Questions/>

      {/* Buttons  */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}

export default Quiz;