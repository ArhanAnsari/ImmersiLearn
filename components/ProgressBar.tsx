// components/ProgressBar.tsx - Personalized Learning Feature
'use client';

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progressPercentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
        {`${Math.round(progressPercentage)}%`}
      </span>
    </div>
  );
};

export default ProgressBar;
