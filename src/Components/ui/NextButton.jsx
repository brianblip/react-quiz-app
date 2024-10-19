import PropTypes from "prop-types";

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
