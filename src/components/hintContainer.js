import React from 'react'
import { fetchHint } from '../slices/hintSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayHint, updateHintsUsed } from '../slices/hintSlice';
import Hint from './hint';

const HintContainer = (props) => {
  const dispatch = useDispatch()
  const { displayHint, hintsUsed } = useSelector((state) => state.hint)
  let answers = "";
  props.answers.forEach((answer) => answers += `${answer.choice}, `)

  const handleClick = () => {
    if (hintsUsed < 1) {
      dispatch(updateDisplayHint())
      dispatch(fetchHint({question: props.question, answers}))
      dispatch(updateHintsUsed())
    }
  }

  return (
    <div className="absolute top-[-60px] right-[-30px] flex flex-col">
      {hintsUsed < 1 && (
        <div
          className="h-[50px] w-[50px] flex items-center self-end bg-yellow flex items-center text-sm px-3 py-1 rounded-full font-bold tracking-wide hover:bg-yellow-dark hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            className="w-[25px]"
            src={require('../media/hint.png')}
            alt="trivia game logo"
          />
        </div>
      )}
      {hintsUsed >= 1 && (
        <div
          className="h-[50px] w-[50px] flex items-center self-end bg-grey flex items-center text-sm px-3 py-1 rounded-full font-bold tracking-wide hover:bg-grey-dark hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            className="w-[25px]"
            src={require('../media/hint.png')}
            alt="trivia game logo"
          />
        </div>
      )}
      { displayHint && <Hint />}
    </div>
  )
}

export default HintContainer
