// components/ProgressBar.tsx - Personalized Learning Feature
'use client';

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  return (
    <div className="progress-bar w-full bg-gray-200 rounded-full h-4">
      <div
        className="progress-bar-filled bg-blue-500 h-full rounded-full"
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;