// two function passed as parameter
import { useState } from "react";

function QuestionCard({ data, nextQuestion }) {
  const [selected, setSelected] = useState(null);

  function handleNext() {
    nextQuestion(selected === data.correctAnswer);
    setSelected(null);
  }

  return (
    <div className="card slide-in">
      <h2>{data.question}</h2>

      {data.options.map((opt, i) => (
        <button
          key={i}
          className={selected === i ? "option active" : "option"}
          onClick={() => setSelected(i)}
        >
          {opt}
        </button>
      ))}

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={selected === null}
      >
        Next
      </button>
    </div>
  );
}

export default QuestionCard;
