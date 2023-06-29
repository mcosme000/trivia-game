import he from "he";
import classNames from "classnames";

const Answer = (props) => {
  const { correct, validated } = props

  const handleClick = (e) => {
    props.validateAnswer()
  }

  const answerClasses = classNames('p-8 border text-center border-3 rounded-xl hover:cursor-pointer', {
    "bg-green-300 border-green-400": validated && correct,
    "bg-red-300 border-red-400": validated && !correct,
    "bg-indigo-300 border-indigo-400": !validated,
  })

  return (
    <p id={correct && "true"}
    className={answerClasses}
    onClick={handleClick}>
    {he.decode(props.choice)}
    </p>
  )

}

export default Answer;
