// File Location: app/components/Quiz.tsx
'use client';

import { useState } from 'react';
import { Client, Account, Databases, Storage } from "appwrite";
import { appwriteConfig } from '@/lib/appwrite/config';

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);
  const account = new Account(client);
  const databases = new Databases(client);
  const storage = new Storage(client);

  const handleQuizCompletion = async () => {
    try {
      await databases.createDocument(
        appwriteConfig.databaseId, // Replace with your Database ID
        appwriteConfig.usersCollectionId, // Replace with your Collection ID
        'unique()',
        { userId: 'USER_ID', score }
      );
      alert('Score Saved!');
      setCompleted(true);
    } catch (error) {
      console.error(error);
      alert('Error saving score.');
    }
  };

  return (
    <div className="quiz-container">
      <h2>Your Quiz</h2>
      <button
        onClick={() => setScore(score + 10)}
        className="p-2 bg-yellow-500 text-white mb-2"
      >
        Answer Correctly (+10 Points)
      </button>
      <button
        onClick={handleQuizCompletion}
        className="p-2 bg-blue-500 text-white w-full"
        disabled={completed}
      >
        Complete Quiz & Save Score
      </button>
      <p>Your Score: {score}</p>
    </div>
  );
}
