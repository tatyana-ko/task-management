import type { ITask } from '@/types/task.types';
import { TodayTaskCard } from './TodayTaskCard';

const HOURS_SCALE = Array.from({ length: 9 }, (_, i) => i + 9);

export const TasksSchedule = ({ todayTasks }: { todayTasks: ITask[] }) => {
  return (
    <>
      <div className="grid grid-cols-9">
        {HOURS_SCALE.map((hour, i) => (
          <div key={i} className="">
            {hour > 12 ? `${hour - 12} pm` : `${hour} am`}
          </div>
        ))}
      </div>

      <div className="relative">
        {todayTasks.map((task) => {
          const [startHour, startMinute] = task.due.startTime.split(':').map(Number);
          const [endHour, endMinute] = task.due.endTime.split(':').map(Number);

          const startOffset = (startHour - 9) * 60 + startMinute;
          const endOffset = (endHour - 9) * 60 + endMinute;

          const leftPercent = (startOffset / 480) * 100;
          const widthPercent = ((endOffset - startOffset) / 480) * 100;

          return (
            <TodayTaskCard
              leftPercent={leftPercent}
              width={widthPercent}
              task={task}
              key={task.id}
            />
          );
        })}
      </div>
    </>
  );
};
