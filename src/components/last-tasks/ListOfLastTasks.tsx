import { LAST_TASKS } from './last-tasks.data';
import { TaskCard } from './TaskCard';

export function ListOfLastTasks() {
  return (
    <ul className='flex items-center gap-3'>
      {LAST_TASKS.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  );
}
