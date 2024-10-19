import PropTypes from "prop-types";

Options.propTypes = {
  question: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => {
        return (
          <button className="btn btn-ui" key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
