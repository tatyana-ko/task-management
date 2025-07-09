import { CircleCheck } from 'lucide-react';

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  let progressColor = 'bg-primary/90';

  if (progress < 30) progressColor = 'bg-[#B90000]';
  if (progress > 80) progressColor = 'bg-[#F6BF23]';
  if (progress === 100) progressColor = 'bg-[#1FC3AD]';

  return (
    <div className="relative w-full h-7 bg-primary/20 rounded-full">
      <div
        className={`absolute top-0 left-0 h-full rounded-full text-center ${progressColor}`}
        style={{ width: `${progress}%` }}
      >
        <span className="text-sm cursor-default">
          {progress === 100 ? 'Done' : progress === 0 ? '' : `${progress} %`}
        </span>
      </div>
    </div>
  );
}
