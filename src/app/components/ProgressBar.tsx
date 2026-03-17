import { useEffect, useState } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const percentage = ((current + 1) / total) * 100;

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
