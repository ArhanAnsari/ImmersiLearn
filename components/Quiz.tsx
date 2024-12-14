//components/Quiz.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ProgressBar from '@/components/ProgressBar';

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
  //Add more questions
  {
    id: '9',
    question: 'What is the chemical symbol for gold?',
    options: ['Ag', 'Au', 'Hg', 'Pb'],
    correctAnswer: 'Au',
  },
  {
    id: '10',
    question: 'Who wrote the book "To Kill a Mockingbird"?',
    options: ['F. Scott Fitzgerald', 'Harper Lee', 'Jane Austen', 'William Shakespeare'],
    correctAnswer: 'Harper Lee',
  },
  {
    id: '11',
    question: 'A knish is traditionally stuffed with what filling?',
    options: ['Potato', 'Creamed Corn', 'Lemon Custard', 'Raspberry Jelly'],
    correctAnswer: 'Potato',
  },
];

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>(QUESTIONS);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const totalQuestions = QUESTIONS.length;

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
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Increment index
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
    setCurrentQuestionIndex(0); // Reset index
    setCurrentQuestion(null);
    setUserAnswer(null);
  
    // Reset and pick a random question
    setTimeout(() => pickRandomQuestion(), 0);
  };

  return (
    <div className="quiz-container p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Quiz Game</h2>
      <ProgressBar current={currentQuestionIndex} total={totalQuestions} />
      {currentQuestion && !completed ? (
        <div>
          <p className="mb-4 text-lg font-medium">{currentQuestion.question}</p>
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!userAnswer}
              className={`flex items-center justify-between block p-3 w-full text-left mb-2 rounded-lg border transition-colors duration-200 font-medium ${
                userAnswer
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-100 text-green-800 border-green-400'
                    : userAnswer === option
                    ? 'bg-red-100 text-red-800 border-red-400'
                    : 'bg-gray-100 text-gray-800 border-gray-300'
                  : 'bg-white hover:bg-blue-100 text-gray-800 border-gray-300'
              }`}
            >
              {option}
              {userAnswer && (
                <span>
                  {option === currentQuestion.correctAnswer ? (
                    <FaCheckCircle className="ml-2 text-green-500" />
                  ) : userAnswer === option ? (
                    <FaTimesCircle className="ml-2 text-red-500" />
                  ) : null}
                </span>
              )}
            </button>
          ))}
          {userAnswer && (
            <button
              onClick={pickRandomQuestion}
              className="p-3 bg-blue-500 text-white w-full mt-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
            >
              Next Question
            </button>
          )}
        </div>
      ) : completed ? (
        <div>
          <p className="mb-4 text-lg">You have completed the quiz!</p>
          <p className="mb-4 text-lg font-medium">Your Score: {score}</p>
          <button
            onClick={handleQuizCompletion}
            className="p-3 bg-green-500 text-white w-full rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
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
