// Leaderboard.tsx - Gamification Feature
'use client';

import { useState, useEffect } from 'react';
import { Client, Databases, Query } from 'appwrite'; //Importing necessary things from Appwrite
import { appwriteConfig } from '@/lib/appwrite/config'; //Appwrite Config

// Appwrite configuration
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpointUrl) // My Appwrite endpoint
  .setProject(appwriteConfig.projectId); // My project ID

const databases = new Databases(client);

interface LeaderboardEntry {
  username: string;
  score: number;
}

const Leaderboard = () => {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);
  const COLLECTION_ID = appwriteConfig.leaderboardCollectionID; // My collection ID
  const DATABASE_ID = appwriteConfig.databaseId; // My database ID

  const fetchLeaderboard = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc('score'),
        Query.limit(10),
      ]);

      const leaderboard: LeaderboardEntry[] = response.documents.map((doc) => ({
        username: doc.username,
        score: doc.score,
      }));
      setScores(leaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container p-4 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">🏆 Leaderboard</h2>
      <ul>
        {scores.map((entry, idx) => (
          <li
            key={idx}
            className={`flex justify-between py-2 px-4 rounded-lg ${
              idx === 0 ? 'bg-yellow-100' : 'bg-gray-100'
            }`}
          >
            <span className="font-medium">
              {idx + 1}. {entry.username}
            </span>
            <span>{entry.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
