// import type { ITask } from '@/types/task.types';
// import {  format, getHours, getMinutes } from 'date-fns';

// interface Props {
//   task: ITask;
// }

// export function TodayTaskCard({ task }: Props) {
//   const start = getHours(task.due.startTime);
//   const end = getHours(task.due.endTime);

//   const startMinutes = getMinutes(task.due.startTime);
//   const endMinutes = getMinutes(task.due.endTime);

//   const startPercent = (((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100;
//   const endPercent = (((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100;
//   const widthPercent = endPercent - startPercent;

//   return (
//     <div
//       className="p-5 absolute top-3 bg-primary/60 rounded-lg shadow"
//       style={{ left: `${startPercent}%`, width: `${widthPercent}%` }}
//     >
//       <h3 className="text-white">{task.title}</h3>
//       <span className="text-xs text-white">{format(task.due.startTime, "HH:mm")} : {format(task.due.endTime, "HH:mm")}</span>
//     </div>
//   );
// }

import type { ITask } from '@/types/task.types';
import { format, getHours, getMinutes } from 'date-fns';

interface Props {
  task: ITask;
}

export function TodayTaskCard({ task }: Props) {
  const startHour = getHours(task.due.startTime);
  const endHour = getHours(task.due.endTime);
  const startMin = getMinutes(task.due.startTime);
  const endMin = getMinutes(task.due.endTime);

  const totalMinutes = (17 - 9) * 60;

  const startOffset = ((startHour - 9) * 60 + startMin) / totalMinutes * 100;
  const endOffset = ((endHour - 9) * 60 + endMin) / totalMinutes * 100;
  const height = endOffset - startOffset;

  return (
    <div
      className="absolute left-2 right-2 bg-primary/60 rounded-md p-2 text-white shadow-md"
      style={{
        top: `${startOffset}%`,
        height: `${height}%`,
      }}
    >
      <h3 className="text-sm font-medium">{task.title}</h3>
      <p className="text-xs">
        {format(task.due.startTime, 'HH:mm')} – {format(task.due.endTime, 'HH:mm')}
      </p>
    </div>
  );
}
