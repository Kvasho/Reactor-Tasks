import "../SecondTask.css";

function ScoreButton(props) {
  return (
    <div className={props.score ? "rating-button" : "rating-button disabled"}>
      <button
        onClick={() => {
          props.setSubmit(false);
        }}
        className="rating-button-submit"
      >
        Submit
      </button>
    </div>
  );
}

export default ScoreButton;
