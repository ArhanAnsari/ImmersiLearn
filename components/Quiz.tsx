'use client';

import { useState, useEffect } from 'react';
import { Client, Databases, Account } from 'appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';

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
  }
];

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>(QUESTIONS);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const databases = new Databases(client);
  const account = new Account(client);

  useEffect(() => {
    // Check if the user is authenticated
    const fetchUser = async () => {
      try {
        const session = await account.get();
        setUserId(session.$id);
        pickRandomQuestion();
      } catch (error) {
        console.error('User not authenticated:', error);
        alert('You must log in to participate in the quiz.');
      }
    };

    fetchUser();
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

  const handleQuizCompletion = async () => {
    if (!userId) {
      alert('Error: Unable to save score. User not authenticated.');
      return;
    }

    try {
      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersScoreCollectionId,
        'unique()',
        { userId, score }
      );
      alert('Score Saved!');
    } catch (error) {
      console.error('Error saving score:', error);
      alert('Error saving score.');
    }
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
              className={`block p-2 w-full text-left mb-2 rounded ${
                userAnswer === option
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {option}
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
            Save Score
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
