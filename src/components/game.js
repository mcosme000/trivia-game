import TriviaContext from "../context/trivia"
import { useContext } from "react"
import { v4 as uuidv4 } from 'uuid';


import Question from "./question"

const Game = () => {
  const { data } = useContext(TriviaContext)
  let id = 1

  const renderQuestions = data.map((element) => {
    const key = uuidv4();
    return <Question key={key} question={element.question} id={id++}
    incorrect={element.incorrect_answers} answer={element.correct_answer} />
  })
  return (
    <div>
      {renderQuestions}
    </div>
  )
}

export default Game
