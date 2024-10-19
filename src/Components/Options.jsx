import PropTypes from "prop-types";

Options.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${answer === index ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
