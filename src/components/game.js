import TriviaContext from "../context/trivia"
import { useContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


import Question from "./question"

const Game = () => {
  const { data, currentQuestion, setCurrentQuestion, validated, setValidated } = useContext(TriviaContext)
  const [ shuffledAnswers, setShuffledAnswers ] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setValidated(false)
  };

  useEffect(() => {
    if (currentQuestion >= 0 && currentQuestion < data.length) {
      const currentAnswers = data[currentQuestion].incorrect_answers.map((answer) => {
        return { choice: answer, correct: false };
      });

      const correctAnswer = { choice: data[currentQuestion].correct_answer, correct: true };

      const allAnswers = [...currentAnswers, correctAnswer];

      const shuffled = allAnswers.map((answer, index) => ({
        ...answer,
        id: uuidv4(),
        displayOrder: Math.random(),
        index,
      })).sort((a, b) => a.displayOrder - b.displayOrder);

      setShuffledAnswers(shuffled);
    }
  }, [currentQuestion, data]);

  const renderQuestions = data.map((element, index) => {
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
          onNextQuestion={handleNextQuestion}
        />
      );
    }
  });

  console.log(typeof renderQuestions);

  return (
    <div>
      {renderQuestions}
      {validated && <button onClick={handleNextQuestion}>Go to next question</button> }
    </div>
  )
}

export default Game
