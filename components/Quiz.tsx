'use client';

import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

const QUESTIONS: Question[] = [
  {
    id: '1',
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 'Paris',
  },
  {
    id: '2',
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'J.K. Rowling', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    id: '3',
    question: 'What is 89 + 56?',
    options: ['1223', '456', '145', '6'],
    correctAnswer: '145',
  },
  {
    id: '4',
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Mars'],
    correctAnswer: 'Jupiter',
  },
  {
    id: '5',
    question: 'What is the boiling point of water?',
    options: ['100°C', '0°C', '50°C', '75°C'],
    correctAnswer: '100°C',
  },
  {
    id: '6',
    question: 'Which language is known as the language of the web?',
    options: ['Python', 'Java', 'HTML', 'C++'],
    correctAnswer: 'HTML',
  },
  {
    id: '7',
    question: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Galileo Galilei'],
    correctAnswer: 'Albert Einstein',
  },
  {
    id: '8',
    question: 'What is the square root of 64?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
  },
];

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>(QUESTIONS);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  useEffect(() => {
    pickRandomQuestion();
  }, []);

  const pickRandomQuestion = () => {
    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      setCurrentQuestion(remainingQuestions[randomIndex]);
      setRemainingQuestions((prev) =>
        prev.filter((_, index) => index !== randomIndex)
      );
      setUserAnswer(null);
    } else {
      setCompleted(true);
    }
  };

  const handleAnswer = (option: string) => {
    if (!currentQuestion || completed) return;
    setUserAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 10);
    }
  };

  const handleQuizCompletion = () => {
  setScore(0);
  setCompleted(false);
  setRemainingQuestions(QUESTIONS);
  setCurrentQuestion(null);
  setUserAnswer(null);
  
  // Reset and pick a random question
  setTimeout(() => pickRandomQuestion(), 0);
};


  return (
    <div className="quiz-container">
      <h2>Your Quiz</h2>
      {currentQuestion && !completed ? (
        <div>
          <p className="mb-4">{currentQuestion.question}</p>
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!userAnswer}
              className={`flex items-center justify-between block p-2 w-full text-left mb-2 rounded border ${
    userAnswer
      ? option === currentQuestion.correctAnswer
        ? 'bg-green-500 text-white border-green-700'
        : userAnswer === option
        ? 'bg-red-500 text-white border-red-700'
        : 'bg-gray-200 border-gray-400'
      : 'bg-gray-200 border-gray-400'
  }`}
            >
              {option}
              {userAnswer && (
                <span>
                  {option === currentQuestion.correctAnswer ? (
                    <FaCheckCircle className="ml-2" />
                  ) : userAnswer === option ? (
                    <FaTimesCircle className="ml-2" />
                  ) : null}
                </span>
              )}
            </button>
          ))}
          {userAnswer && (
            <button
              onClick={pickRandomQuestion}
              className="p-2 bg-blue-500 text-white w-full mt-4"
            >
              Next Question
            </button>
          )}
        </div>
      ) : completed ? (
        <div>
          <p className="mb-4">You have completed the quiz!</p>
          <p className="mb-4">Your Score: {score}</p>
          <button
            onClick={handleQuizCompletion}
            className="p-2 bg-green-500 text-white w-full"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
