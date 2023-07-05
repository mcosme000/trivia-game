import { useContext } from "react";
import TriviaContext from "../context/trivia";

const Score = ({hideScore}) => {

  const { score } = useContext(TriviaContext)

  return (
    <div className="h-full p-8 flex flex-col justify-center items-center">
      { score === 0 && <p>Ups...! You didn't get any answer correct. </p>}
      { score > 0 && <p>You got <strong>{score}</strong> correct answer{score > 1 && 's'}!</p>}
      <button onClick={() => hideScore()}
      className="mt-3 bg-yellow hover:bg-yellow-dark text-sm px-8 py-2 rounded-md font-bold tracking-wide cursor-pointer">
        Play again</button>
    </div>
  )
}

export default Score;
