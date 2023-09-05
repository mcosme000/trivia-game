import React from 'react'
import { fetchHint } from '../slices/hintSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayHint } from '../slices/hintSlice';
import Hint from './hint';

const HintContainer = (props) => {
  const dispatch = useDispatch()
  const { displayHint } = useSelector((state) => state.hint)

  let answers = "";
  props.answers.forEach((answer) => answers += `${answer.choice}, `)

  const handleClick = () => {
    dispatch(updateDisplayHint())
    dispatch(fetchHint({question: props.question, answers}))
  }

  return (
    <div className="relative top-[-40px] right-0 flex flex-col">
      <button
        className="self-end bg-yellow flex items-center text-sm px-4 py-2 rounded-md font-bold tracking-wide"
        onClick={handleClick}>Get hint!</button>
      {displayHint && <Hint />}
    </div>
  )
}

export default HintContainer
