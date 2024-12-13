// Leaderboard.tsx - Gamification Feature
'use client';
import { useEffect, useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, getDocs, orderBy, limit, query } from 'firebase/firestore';

// Define the type for leaderboard entries
interface LeaderboardEntry {
  username: string;
  score: number;
}

const Leaderboard = () => {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const leaderboardQuery = query(
          collection(db, 'leaderboard'),
          orderBy('score', 'desc'),
          limit(10)
        );
        const snapshot = await getDocs(leaderboardQuery);
        const leaderboard = snapshot.docs.map((doc) => doc.data() as LeaderboardEntry);
        setScores(leaderboard);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="leaderboard-container p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {scores.map((entry, idx) => (
          <li key={idx} className="flex justify-between py-2 border-b">
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
