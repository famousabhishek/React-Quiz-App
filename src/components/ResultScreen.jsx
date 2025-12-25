function ResultScreen({ score, total, restartQuiz }) {
  return (
    <div className="card fade-in">
      <h1>Done 🎉</h1>
      <p>
        Score: {score} / {total}
      </p>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  );
}

export default ResultScreen;
