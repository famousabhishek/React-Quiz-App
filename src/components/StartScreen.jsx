// user saw this csreen first then clicking button to strat quiz
function StartScreen({ startQuiz }) {
  return (
    <div>
      <h1>React Quiz App</h1>
      <p>Test your basic React knowledge</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;
