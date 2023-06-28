import TriviaContext from "../context/trivia"
import { useContext } from "react"
import { v4 as uuidv4 } from 'uuid';


import Question from "./question"

const Game = () => {
  const { data, currentQuestion, setCurrentQuestion } = useContext(TriviaContext)

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const renderQuestions = data.map((element, index) => {
    const key = uuidv4();
    if (index === currentQuestion) {
      return (
        <Question
          key={key}
          question={element.question}
          id={index + 1}
          incorrect={element.incorrect_answers}
          answer={element.correct_answer}
          onNextQuestion={handleNextQuestion}
        />
      );
    }
    return null;
  });

  console.log(typeof renderQuestions);

  return (
    <div>
      {renderQuestions}

      {currentQuestion > 1 && <button onClick={handleNextQuestion}>Go to next question</button> }
    </div>
  )
}

export default Game
