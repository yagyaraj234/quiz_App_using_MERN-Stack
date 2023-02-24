import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResultTable } from './index';
import { attemptsNumber, flagResult, earnPoints_Number } from '../helper/helper';

import { resetResultAction } from '../redux/resultReducer';
import { resetAllAction } from '../redux/questionReducer'
import { usePublishResult } from '../hooks/setResult';

const Result = () => {

  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints);

  // store user data

  usePublishResult({ result, username: userId, attempts, points: earnPoints, achived: flag ? "Passed" : "Fail" })


  function onRestart() {
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
          <span className='bold'>{userId}</span>
        </div>
        <div className='flex'>
          <span className='user'>Total Questions : </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span className='user'>Total  points :</span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span className='user'>Total earn points :</span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex'>
          <span className='user'>Quiz result </span>
          <span className='bold' style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}>{flag ? "Passed" : "Failed"}</span>
        </div>

      </div>

      <div className='start'>
        <Link to='/' className='button' onClick={onRestart}>Restart</Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>




    </div>
  )
}

export default Result