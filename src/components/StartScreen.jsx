// user saw this csreen first then clicking button to strat quiz
function StartScreen({ startQuiz }) {
  return (
    <div className="card fade-in">
      <h1>React Quiz</h1>
      <p>Test your React basics</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;
