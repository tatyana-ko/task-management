import type { ITask } from '@/types/task.types';
import { TaskCard } from './task-card/TaskCard';

interface Props {
  tasks: ITask[];
}

export function LastTasksList({ tasks }: Props) {
  return (
    <ul className="w-full flex flex-wrap items-center gap-3">
      {tasks.length ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>Not tasks</p>
      )}
    </ul>
  );
}
