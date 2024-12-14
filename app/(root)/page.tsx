'use client';
import Quiz from '@/components/Quiz';
import Leaderboard from "@/components/Leaderboard";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
          ImmersiLearn
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Leaderboard Component */}
        <Leaderboard />
        {/* Quiz Component */}
        <div className="w-full max-w-3xl">
          <Quiz />
        </div>
      </div>
    </div>
  );
}
