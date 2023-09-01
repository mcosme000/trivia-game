import he from "he";
import Answer from "./answer";
// import Hint from "./hint";

const Question = (props) => {
  const { shuffledAnswers } = props;

  const correct = { choice: props.answer, correct: true };
  const answers = props.incorrect.map((answer) => {
    return { choice: answer };
  });
  answers.push(correct);

  const renderAnswers = shuffledAnswers.map((answer) => {
    const key = answer.id;
    return (
      <Answer
        key={key}
        choice={answer.choice}
        correct={answer.correct}
      />
    );
  });

  return (
    <div>
      {/* <Hint question={he.decode(props.question)} /> */}
      <h2 className="font-bold text-md md:text-lg text-center mb-8" id={props.id}>
        {he.decode(props.question)}
      </h2>
      <div className="p-2 grid md:grid-cols-2 gap-4">{renderAnswers}</div>
    </div>
  );
};

export default Question;
