import PropTypes from "prop-types";
import Options from "./Options";

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
