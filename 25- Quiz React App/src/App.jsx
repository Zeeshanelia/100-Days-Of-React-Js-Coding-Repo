import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import ArrayQuestions from './Component/arrayQuestions.jsx';
import QuizResult from './Component/QuizResult.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [recentQuestion, setRecentQuestion] = useState(0);
  const [Choose, setChoose] = useState(0);
  const [showResult, setShowResult] = useState(false);


  const nextQuestion = () => {
    setScore(prevScore => {
      String(Choose) === String(ArrayQuestions[recentQuestion].correctAnswer)
        ? prevScore + 1
        : prevScore;


      // Compare selected option text
      if (ArrayQuestions[recentQuestion].options[Choose - 1] === ArrayQuestions[recentQuestion].correctAnswer) {
        return prevScore + 1;
      }
      return prevScore;
    });

    setRecentQuestion(prev => {
      if (prev < ArrayQuestions.length - 1) {
        return prev + 1;
      }
      setShowResult(true);
      return prev;
    });

    setChoose(0);
  };







  const prevQuestion = () => {
    setRecentQuestion(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev; // stop at first question
    });           // Reset choice for previous question
  };


  // const updateScore = (Choose) => {
  //   if (Choose === ArrayQuestions[recentQuestion].answer) {
  //     setScore(prevScore => prevScore + 1);
  //   }
  // };


  return (
    <>
      <div className="py-2 bg-gray-500 min-h-screen">

        <div className="py-2 bg-gray-100 mx-auto max-w-4xl px-4 rounded-md h-[28rem]">
          <h1 className="text-center text-3xl font-bold max-w-md mx-auto bg-gradient-to-b from-blue-300 via-yellow-100 to-green-200 shadow-xl rounded-md">Quiz App</h1>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-2">

            {showResult ?
              (
                <QuizResult score={score} totalQuestions={ArrayQuestions.length}
                  restartQuiz={() => {
                    setShowResult(false);
                    setRecentQuestion(0);
                    setScore(0);
                    setChoose(0);
                  }}
                />

              ) : (<>

                <h2 className="max-w-md mx-auto text-2xl text-center mb-2 font-bold shadow-lg ">
                  Choose the correct answer
                </h2>

                <h2 className='text text-center rounded font-bold mb-4 border bg-white py-2 shadow-lg'>
                  <span className='text-xl font-bold mr-2'>
                    ({ArrayQuestions[recentQuestion + 0].id})
                  </span>

                  {ArrayQuestions[recentQuestion].question}

                </h2>

                {ArrayQuestions[recentQuestion].options.map((option, index) => {
                  return (
                    <div key={index} className="mb-4">

                      <button onClick={() => { setChoose(index + 1) }}
                        className={`font-medium bg-blue-200 hover:bg-blue-300 px-4 py-1 rounded-md w-full text-left shadow-md
                   ${Choose === index + 1 ? 'bg-blue-200 text-green-700' : null}`}>
                        {option}

                      </button>
                    </div>
                  );
                })}

                <p className="flex justify-center gap-2 mt-4 text-xl font-bold text-white border mx-auto w-56 bg-gradient-to-b from-blue-300 via-pink-800 to-gareen-300   rounded-xl shadow-white">

                  <i onClick={prevQuestion} className='ri-skip-left-line text-white text-xl bg-slate-700 rounded-xl h-6 mt-[2px] w-6 text-center hover:bg-black'></i>

                  Previous - Next

                  <i onClick={nextQuestion} className='ri-skip-right-line text-white text-xl bg-slate-700 rounded-xl h-6 mt-[2px] w-6 text-center hover:bg-black'></i> </p></>
              )}

          </div>


        </div>
      </div>
    </>
  );
}

export default App;


