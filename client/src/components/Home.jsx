import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/resultReducer';
import{Quiz,Result} from './index'

const Home = () => {
  const inputRef =useRef(null)
  const dispatch =useDispatch()
  function  startQuiz() {
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <>
    <h1 className='heading'>Quiz</h1>
    <ol className='list'>
        <li className='list-items'>You have only attempts.</li>
        <li className='list-items'>You have To attempt all the questions.</li>
        <li className='list-items'>After completing all the quiz we show the answer.</li>
        <li className='list-items'>Without username you cannot move forward to quiz section.</li>
    </ol>
    <form id='form'>    
    <input required ref={inputRef} className='username' type="text"  placeholder='Enter your username'/>
    </form>
    <Link  onClick={startQuiz} className='button' to={'quiz'}> Start Quiz
    </Link>
    </>
  )
}

export default Home;