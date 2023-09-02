import React from 'react'
import { fetchHint } from '../slices/hintSlice';
import { useDispatch } from 'react-redux';

const Hint = (props) => {
  const dispatch = useDispatch()
  let answers = "";
  props.answers.forEach((answer) => answers += `${answer.choice}, `)
  // const { status, error, hint } = useSelector((state) => state.hint)
  // console.log(status);
  // console.log(error);
  // console.log(hint);

  return (
    <div>
      <button onClick={() => dispatch(fetchHint({question: props.question, answers}))}>Get hint!</button>
    </div>
  )
}

export default Hint
