import { useState } from "react";
import "./styles/app.css";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function startQuiz() {
    setScreen("quiz");
  }

  function nextQuestion(isCorrect) {
    if (isCorrect) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen("result");
    }
  }

  function restartQuiz() {
    setScreen("start");
    setCurrent(0);
    setScore(0);
  }

  return (
    <div className="app">
      {screen === "start" && <StartScreen startQuiz={startQuiz} />}
      {screen === "quiz" && (
        <QuestionCard data={questions[current]} nextQuestion={nextQuestion} />
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
