import { useSelector, useDispatch } from "react-redux";
import { finishGame, resetScore, resetCurrentQuestion, updateShowScore } from "../slices/triviaSlice";

const Score = () => {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.trivia.score)

  const handleFinishGame = () => {
    dispatch(resetCurrentQuestion())
    dispatch(resetScore())
    dispatch(finishGame())
    dispatch(updateShowScore())
  }

  return (
    <div className="flex justify-center flex-col items-center h-full">
      <div className="absolute flex flex-col justify-center items-center">
        { score === 0 && <p>Ups...! You didn't get any answer correct. </p>}
        { score > 0 && <p>You got <strong>{score}</strong> correct answer{score > 1 && 's'}!</p>}
        <button onClick={handleFinishGame}
        className="mt-3 bg-yellow hover:bg-yellow-dark text-sm px-8 py-2 rounded-md font-bold tracking-wide cursor-pointer">
          Play again
        </button>
      </div>
    </div>
  )
}

export default Score;
