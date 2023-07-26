import "../SecondTask.css";
import illustration from "../assets/illustration-thank-you.svg";

function FinalScore(props) {
  return (
    <div className="final-score">
      <img src={illustration} alt="Score" />
      <div className="final-score-out-of">score {props.score} out of 5</div>
      <h3>Thank You !</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default FinalScore;
