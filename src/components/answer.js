import he from "he";

const Answer = (props) => {
  return (
    <p>{he.decode(props.choice)}</p>
  )
}

export default Answer;
