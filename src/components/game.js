import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/ClipLoader";
import DisplayGame from "./displayGame";

const Game = () => {
  const {
    status,
    error
  } = useSelector((state) => state.trivia)

  const containerStyles = "h-screen flex justify-center items-center"
  const innerContainerStyles = "p-5 md:p-8 h-[80%] md:h-[60%] w-[95%] md:w-[65%] lg:w-[50%] bg-white rounded-md shadow-lg"
  const centered = "flex justify-center items-center"

  if (status === 'loading') {
    return (
      <div className={containerStyles}>
        <div className={`${innerContainerStyles} ${centered}`}>
          <BeatLoader size={100} color={"#FFF161"}/>
        </div>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className={containerStyles}>
        <div className={`${innerContainerStyles} ${centered}`}>
          <p>There was an error fetching the questions: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={containerStyles}>
      <div className={innerContainerStyles}>
        <DisplayGame />
      </div>
    </div>
  )
}

export default Game
