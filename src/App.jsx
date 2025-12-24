import { useState } from "react";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function startQuiz() {
    setScreen("quiz");
  }

  function nextQuestion(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("result");
    }
  }

  function restartQuiz() {
    setScreen("start");
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <div>
      {screen === "start" && <StartScreen startQuiz={startQuiz} />}

      {screen === "quiz" && (
        <QuestionCard
          questionData={questions[currentQuestion]}
          nextQuestion={nextQuestion}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
