import { useSelector, useDispatch } from "react-redux";
import { finishGame, resetScore, resetCurrentQuestion, updateShowScore } from "../slices/triviaSlice";
import Lottie from "react-lottie";
import AnimationData from "../lotties/celebration.json"
import GameLost from "../lotties/bw.json"

const Score = () => {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.trivia.score)

  const handleFinishGame = () => {
    dispatch(resetCurrentQuestion())
    dispatch(resetScore())
    dispatch(finishGame())
    dispatch(updateShowScore())
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const gameLost = {
    loop: true,
    autoplay: true,
    animationData: GameLost,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="flex justify-center flex-col items-center h-full">
      <div className="w-full h-full relative">
        { score === 0 &&
           <Lottie
            options={gameLost}
            height={200}
            width={300}
            isClickToPauseDisabled
          />
        }
        { score > 0 &&
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isClickToPauseDisabled
          />
        }
      </div>
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
