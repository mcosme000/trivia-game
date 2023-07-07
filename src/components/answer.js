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

  const answerClasses = classNames("flex justify-center items-center border-black font-bold text-xs md:text-sm shadow-custom border text-center border-2 rounded-xl hover:cursor-pointer", {
    "bg-green": validated && correct,
    "bg-red": validated && !correct,
    "bg-white": !validated,
  });

  return (
    <div className={answerClasses}>
      <p id={correct && "true"} onClick={validateAnswer}
      className="w-full px-6 py-4">{he.decode(props.choice)}</p>
    </div>
  );
};

export default Answer;
