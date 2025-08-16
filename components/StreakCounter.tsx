
import React from 'react';
import FlameIcon from './icons/FlameIcon';

interface StreakCounterProps {
  count: number;
}

const StreakCounter: React.FC<StreakCounterProps> = ({ count }) => {
  const isActive = count > 0;

  return (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isActive ? 'bg-orange-500/20 text-orange-400' : 'bg-gray-700 text-gray-500'}`}>
      <FlameIcon className={`w-6 h-6 ${isActive ? 'text-orange-500' : ''}`} />
      <span className="text-2xl font-bold">{count}</span>
      <span className="text-sm font-semibold">Day{count !== 1 ? 's' : ''}</span>
    </div>
  );
};

export default StreakCounter;
