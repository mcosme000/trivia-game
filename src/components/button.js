import React from 'react'
import classNames from 'classnames'
import { BiRightArrowAlt } from "react-icons/bi";
import { updateCurrentQuestion, resetValidated } from "../slices/triviaSlice";
import { useDispatch, useSelector } from 'react-redux';
import { hideHint, resetHint } from '../slices/hintSlice';

const Button = (props) => {
  const { content, active } = props
  const dispatch = useDispatch()
  const isValidated = useSelector((state) => state.trivia.isValidated)


  const handleNextQuestion = () => {
    dispatch(resetHint());
    dispatch(hideHint());
    dispatch(updateCurrentQuestion());
    dispatch(resetValidated());
  };

  const buttonStyles = classNames("flex items-center text-sm px-4 py-2 rounded-md font-bold tracking-wide", {
    "bg-gray-200": !active,
    "bg-yellow hover:bg-yellow-dark": active
  });

  return (
    <button
      className={buttonStyles}
      onClick={isValidated ? handleNextQuestion : null}
      active={isValidated}
      >
      {content}
      <BiRightArrowAlt />
    </button>
  )
}

export default Button;
