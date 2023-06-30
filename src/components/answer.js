import he from "he";
import classNames from "classnames";
import { useContext } from "react";
import TriviaContext from "../context/trivia";

const Answer = (props) => {
  const { correct } = props;
  const { validated, setValidated } = useContext(TriviaContext);

  const answerClasses = classNames("px-6 py-4 font-bold text-sm border text-center border-2 rounded-xl hover:cursor-pointer", {
    "bg-green-300 border-green-400": validated && correct,
    "bg-red-300 border-red-400": validated && !correct,
    "bg-white border-black": !validated,
  });

  return (
    <p
      id={correct && "true"}
      className={answerClasses}
      onClick={() => setValidated(true)}
    >
      {he.decode(props.choice)}
    </p>
  );
};

export default Answer;
