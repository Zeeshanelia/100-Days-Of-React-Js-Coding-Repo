

const QuizResult = ({ score, totalQuestions, restartQuiz }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const grade =
    percentage >= 80 ? "A" :
    percentage >= 60 ? "B" :
    percentage >= 40 ? "C" : "Fail";

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>

      <p className="text-xl mb-2">
        Your Score: {score} / {totalQuestions}
      </p>

      <p className="text-lg mb-1">
        Percentage: {percentage}%
      </p>

      <p className="text-lg mb-6 font-semibold">
        Grade: {grade}
      </p>

      <button
        onClick={restartQuiz}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default QuizResult;
