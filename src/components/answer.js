import he from "he";

const Answer = (props) => {
  const { onNextQuestion } = props

  const handleClick = () => {
    console.log("selected");
    onNextQuestion()
  }

  return (
    <p onClick={handleClick}>{he.decode(props.choice)}</p>
  )
}

export default Answer;
