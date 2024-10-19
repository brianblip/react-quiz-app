import PropTypes from "prop-types";
import Options from "./Options";

Question.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
  points: PropTypes.number.isRequired,
};

function Question({ question, dispatch, answer, points }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
}

export default Question;
