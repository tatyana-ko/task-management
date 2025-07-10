import type { ITask } from '@/types/task.types';

interface Props {
  task: ITask;
  leftPercent: number;
  width: number;
}

export function TodayTaskCard({ task, leftPercent, width }: Props) {
  return (
    <div
      className="p-5 absolute top-3 bg-primary/60 rounded-lg shadow"
      style={{
        left: `${leftPercent}%`,
        width: `${width}%`,
      }}
    >
      <h3 className='text-white'>{task.title}</h3>
      <span className='text-xs text-white'>{task.due.startTime} : {task.due.endTime}</span>
    </div>
  );
}
