import React from 'react'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateShowScore } from "../slices/triviaSlice";
import { v4 as uuidv4 } from 'uuid';
import Question from "./question"
import Button from "./button";
import Score from "./score";

const DisplayGame = () => {
  const dispatch = useDispatch()
  const triviaData = useSelector((state) => state.trivia.triviaData)
  const currentQuestion = useSelector((state) => state.trivia.currentQuestion)
  const isValidated = useSelector((state) => state.trivia.isValidated)
  const displayScore = useSelector((state) => state.trivia.displayScore)
  const [ shuffledAnswers, setShuffledAnswers ] = useState([]);

  useEffect(() => {
    if (currentQuestion >= 0 && currentQuestion < triviaData.length) {
      const currentAnswers = triviaData[currentQuestion].incorrect_answers.map((answer) => {
        return { choice: answer, correct: false };
      });

      const correctAnswer = { choice: triviaData[currentQuestion].correct_answer, correct: true };

      const allAnswers = [...currentAnswers, correctAnswer];

      const shuffled = allAnswers.map((answer, index) => ({
        ...answer,
        id: uuidv4(),
        displayOrder: Math.random(),
        index,
      })).sort((a, b) => a.displayOrder - b.displayOrder);

      setShuffledAnswers(shuffled);
    }
    if (currentQuestion === 5) {
      dispatch(updateShowScore())
    }
  }, [currentQuestion, triviaData, dispatch]);

  const renderQuestion = triviaData.map((element, index) => {
    const key = uuidv4();
    if (index === currentQuestion) {
      return (
        <Question
          key={key}
          question={element.question}
          id={index + 1}
          shuffledAnswers={shuffledAnswers}
          incorrect={element.incorrect_answers}
          answer={element.correct_answer}
        />
      );
    }
    return null;
  });

  return (
    <div className="relative h-full">
      { displayScore
      ? ( <Score /> )
      : (
        <div className="h-full w-full m-auto flex flex-col items-center justify-between">
          <div className="w-full flex-1">
            <p className="inline-block px-3 py-1 mb-4 font-bold text-sm bg-yellow-dark rounded-md">{currentQuestion + 1} / 5</p>
            {renderQuestion}
          </div>
          <Button
            active={isValidated}
            content={"Go to next question"}
            next
          />
        </div>
    )}
    </div>
  )
}

export default DisplayGame
