import Proptypes from "prop-types";

Progress.propTypes = {
  index: Proptypes.number.isRequired,
  numQuestions: Proptypes.number.isRequired,
  points: Proptypes.number.isRequired,
  totalPoints: Proptypes.number.isRequired,
  answer: Proptypes.number,
};

function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{totalPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
