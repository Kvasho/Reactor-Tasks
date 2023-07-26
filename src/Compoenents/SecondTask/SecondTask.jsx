import { useState } from "react";
import "./SecondTask.css";
import starIcon from "./assets/icon-star.svg";
import Score from "./Components/Score.jsx";
import ScoreButton from "./Components/ScoreButton";
import FinalScore from "./Components/FinalScore";

const scores = [1, 2, 3, 4, 5];

function SecondTask() {
  const [score, setScore] = useState(null);
  const [submit, setSubmit] = useState(true);

  return (
    <section className="second-task">
      {submit ? (
        <div className="rating">
          <div className="rating-star">
            <img src={starIcon} alt="star icon" className="rating-star-img" />
          </div>
          <div className="rating-header">
            <h1>How did we do?</h1>
          </div>
          <div className="rating-paragraph">
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="rating-scores">
            {scores.map((item) => (
              <Score value={item} score={score} setScore={setScore} />
            ))}
          </div>
          <ScoreButton score={score} setSubmit={setSubmit} />
        </div>
      ) : (
        <FinalScore score={score} />
      )}
    </section>
  );
}

export default SecondTask;
