import type { ITask } from '@/types/task.types';
import { TodayTaskCard } from './TodayTaskCard';

const HOURS_SCALE = Array.from({ length: 9 }, (_, i) => i + 9); // 9–17

export const TasksSchedule = ({ todayTasks }: { todayTasks: ITask[] }) => {
  return (
    <div className="grid grid-cols-[60px_1fr]">
      <div className="flex flex-col">
        {HOURS_SCALE.map((hour) => (
          <div key={hour} className="h-16 text-xs text-gray-500 border-b border-gray-200 pl-1">
            {hour > 12 ? `${hour - 12}PM` : `${hour} AM`}
          </div>
        ))}
      </div>

      <div className="relative h-[576px] border-l border-gray-200 bg-white">
        {todayTasks.map((task) => (
          <TodayTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
