import he from "he";
import classNames from "classnames";
import { useContext } from "react";
import TriviaContext from "../context/trivia";

const Answer = (props) => {
  const { correct } = props;
  const { validated, setValidated, setScore } = useContext(TriviaContext);

  const validateAnswer = (e) => {
    setValidated(true)
    if (e.target.hasAttribute('id')) {
      setScore((prevScore) => prevScore += 1)
    }
  }

  const answerClasses = classNames("px-6 py-4 border-black font-bold text-xs md:text-sm shadow-custom border text-center border-2 rounded-xl hover:cursor-pointer", {
    "bg-green text-white": validated && correct,
    "bg-red text-white": validated && !correct,
    "bg-white": !validated,
  });

  return (
    <p
      id={correct && "true"}
      className={answerClasses}
      onClick={validateAnswer}
    >
      {he.decode(props.choice)}
    </p>
  );
};

export default Answer;
