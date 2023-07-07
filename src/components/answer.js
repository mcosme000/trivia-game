import { useSelector, useDispatch } from "react-redux";
import { validateQuestion, addScore } from "../slices/triviaSlice";
import he from "he";
import classNames from "classnames";

const Answer = (props) => {
  const dispatch = useDispatch();
  const isValidated = useSelector((state) => state.trivia.isValidated)
  const { correct } = props;

  const validateAnswer = (e) => {
    dispatch(validateQuestion())
    if (e.target.hasAttribute('id')) {
      dispatch(addScore())
    }
  }

  const answerClasses = classNames("flex justify-center items-center border-black font-bold text-xs md:text-sm shadow-custom border text-center border-2 rounded-xl hover:cursor-pointer", {
    "bg-green": isValidated && correct,
    "bg-red": isValidated && !correct,
    "bg-white": !isValidated,
  });

  return (
    <div className={answerClasses}>
      <p id={correct && "true"} onClick={validateAnswer}
      className="w-full px-6 py-4">{he.decode(props.choice)}</p>
    </div>
  );
};

export default Answer;
