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
    <div className="absolute top-[-60px] right-[-30px] flex flex-col">
      <div
        className="h-[50px] w-[50px] flex items-center self-end bg-gray-300 flex items-center text-sm px-3 py-1 rounded-full font-bold tracking-wide hover:bg-gray-400 hover:cursor-pointer"
        onClick={handleClick}>
        <img
          className="w-[25px]"
          src={require('../media/hint.png')}
          alt="trivia game logo"
        />
        </div>
      {displayHint && <Hint />}
    </div>
  )
}

export default HintContainer
