import { useContext } from "react";
import TriviaContext from "../context/trivia";

const Score = ({displayScore}) => {

  const { score } = useContext(TriviaContext)
  return (
    <div>
      <p>Your score is {score}</p>
      <button onClick={() => displayScore()}>Play again!</button>
    </div>
  )
}

export default Score;
