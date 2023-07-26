import "../SecondTask.css";

function Score(props) {
  const { score, value, setScore } = props;
  return (
    <div
      onClick={() => setScore(value)}
      className={score === value ? "scores scores-active" : "scores"}
    >
      <div className="score">{value}</div>
    </div>
  );
}

export default Score;
