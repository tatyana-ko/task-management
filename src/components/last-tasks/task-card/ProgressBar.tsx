import { CircleCheck } from 'lucide-react';
import styles from './progressBar.module.css';

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  let progressColor = 'bg-primary/90';

  if (progress < 30) progressColor = `${styles.red}`;
  if (progress > 70) progressColor = `${styles.inProcess}`;
  if (progress === 100) progressColor = `${styles.done}`;

  return (
    <div className={styles.container}>
      <div
        role="progressbar"
        className={`${styles.progress} ${progressColor}`}
        style={{ width: `${progress}%` }}
      >
        <span className="flex items-center gap-1 justify-center text-sm cursor-default">
          {progress === 100 ? (
            <>
              <CircleCheck size={16} /> Done
            </>
          ) : progress === 0 ? (
            ''
          ) : (
            `${progress} %`
          )}
        </span>
      </div>
    </div>
  );
}
