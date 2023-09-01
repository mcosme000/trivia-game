import React from 'react'
import { fetchHint } from '../slices/hintSlice';
import { useDispatch, useSelector } from 'react-redux';

const Hint = (props) => {

  const dispatch = useDispatch()
  const { status, error, hint } = useSelector((state) => state.hint)
  console.log(status);
  console.log(error);
  console.log(hint);

  return (
    <div>
      <button onClick={() => dispatch(fetchHint(props.question))}>Get hint!</button>
      <p>{hint}</p>
    </div>
  )
}

export default Hint
