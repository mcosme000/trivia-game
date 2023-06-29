import Answer from "./answer";
import he from "he";
import { v4 as uuidv4 } from 'uuid';


const Question = (props) => {
  const correct = { choice: props.answer, correct: true }
  const answers = props.incorrect.map((answer) => {
    return { choice: answer }
  })
  answers.push(correct)
  const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random())

  const renderAnswers = shuffledAnswers.map((answer) => {
    const key = uuidv4();
    return (<Answer
        key={key}
        choice={answer.choice}
        correct={answer.correct}
        onNextQuestion={props.onNextQuestion}/>)
  })


  return (
    <div className="p-5 m-auto w-full md:w-3/5">
      <h2 className="font-bold text-xl text-center mb-4" id={props.id}>{he.decode(props.question)}</h2>
      <div className="grid grid-cols-2 gap-4">
        {renderAnswers}
      </div>
    </div>
  )
}

export default Question;
