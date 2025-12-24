// two function passed as parameter
import { useState } from "react";

function QuestionCard({ questionData, nextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleNext() {
    const isCorrect = selectedOption === questionData.correctAnswer;
    nextQuestion(isCorrect);
    setSelectedOption(null);
  }

  return (
    <div>
      <h2>{questionData.question}</h2>

      {questionData.options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelectedOption(index)}
          style={{
            display: "block",
            margin: "8px 0",
            backgroundColor: selectedOption === index ? "lightgreen" : "white",
          }}
        >
          {option}
        </button>
      ))}

      <button onClick={handleNext} disabled={selectedOption === null}>
        Next
      </button>
    </div>
  );
}

export default QuestionCard;
