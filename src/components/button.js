import React from 'react'
import classNames from 'classnames'
import { BiRightArrowAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { updateCurrentQuestion, resetValidated, finishGame } from "../slices/triviaSlice";
import { useDispatch, useSelector } from 'react-redux';
import { hideHint, resetHint, resetHintsUsed } from '../slices/hintSlice';

const Button = (props) => {
  const { content, active, regular, next, exit } = props
  const dispatch = useDispatch()
  const isValidated = useSelector((state) => state.trivia.isValidated)

  const handleClick = () => {
    if (isValidated) {
      handleNextQuestion()
    } else if (exit) {
      dispatch(finishGame())
    }
  }
  const handleNextQuestion = () => {
    dispatch(resetHint());
    dispatch(hideHint());
    dispatch(resetHintsUsed());
    dispatch(updateCurrentQuestion());
    dispatch(resetValidated());
  };

  const buttonStyles = classNames("flex items-center text-sm px-4 py-2 rounded-md font-bold tracking-wide", {
    "font-bold": regular,
    "bg-gray-200": !active,
    "bg-yellow hover:bg-yellow-dark": active,
    "bg-gray-200 text-xs text-red-500 px-2 hover:bg-gray-300 ": exit
  });

  return (
    <button
      className={buttonStyles}
      onClick={handleClick}
      active={isValidated}
    >
      {exit && <RxCross2 className="mr-1 text-md"/>}
      {content}
      {next && <BiRightArrowAlt/>}
    </button>
  )
}

export default Button;
