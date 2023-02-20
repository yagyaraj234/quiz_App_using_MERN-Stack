import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {ResultTable} from './index'


import { resetResultAction } from '../redux/resultReducer';
import {resetAllAction} from '../redux/questionReducer'


const Result = () => {

  const dispatch =useDispatch();
  function onRestart(){
    // console.log('on Restart');
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='result-container'>

      <h1 className='heading'>Result </h1>

      <div className='result flex-center'>

      <div className='flex'>
        <span className='user'>Username</span>
        <span className='bold'>Daily Tuition</span>
      </div>
      <div className='flex'>
        <span className='user'>Total Quiz points :</span>
        <span className='bold'>50</span>
      </div>
      <div className='flex'>
        <span className='user'>Total Questions : </span>
        <span className='bold'>05</span>
      </div>
      <div className='flex'>
        <span className='user'>Total  points :</span>
        <span className='bold'>03</span>
      </div>
      <div className='flex'>
        <span className='user'>Total earn points :</span>
        <span className='bold'>30</span>
      </div>
      <div className='flex'>
        <span className='user'>Quiz result </span>
        <span className='bold'>Passed</span>
      </div>

      </div>

    <div className='start'>
      <Link  to='/' className='button' onClick={onRestart}>Restart</Link>
    </div>

    <div className="container">
      {/* result table  */}
      <ResultTable/>
    </div>




    </div>
  )
}

export default Result