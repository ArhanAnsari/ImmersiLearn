'use client';
import { useState } from 'react';
import Quiz from '@/components/Quiz';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">          ImmersiLearn</span></h1>
      <Quiz />
    </div>
  );
}
