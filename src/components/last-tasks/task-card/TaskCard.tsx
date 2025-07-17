import { Images, Link as LucideLink, MessageSquareText, Plane } from 'lucide-react';
import Image from 'next/image';
import { formatDistance, isToday } from 'date-fns';
import type { ITask } from '@/types/task.types';
import { ProgressBar } from './ProgressBar';
import { ModalsLauncher } from './ModalsLauncher';
import { useMemo } from 'react';

export function TaskCard({ task }: { task: ITask }) {
  const completedSubtasks = useMemo(
    () => task.subtasks.filter((t) => t.isCompleted).length,
    [task.subtasks],
  );

  const progress = useMemo(
    () =>
      task.subtasks.length > 0 ? Math.trunc((completedSubtasks / task.subtasks.length) * 100) : 0,
    [completedSubtasks, task.subtasks],
  );

  const due = useMemo(() => {
    const date = new Date(task.due.date);

    return isToday(date) ? 'today' : formatDistance(date, new Date(), { addSuffix: true });
  }, [task.due.date]);

  return (
    <li className="w-[280px] p-4 space-y-3 bg-accent-bg rounded-xl shadow">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-fit p-1.5 text-primary bg-primary/20 rounded-full">
            <Plane />
          </div>

          <div className="w-[100px]">
            <h3 className="font-medium text-base leading-none">{task.title}</h3>
            <p className="text-xs opacity-50">Due: {due}</p>
          </div>
        </div>

        {task.users && (
          <ul className="flex">
            {task.users.map((user) => (
              <li key={user.id}>
                <Image
                  src={user.photo || '/user-photo.svg'}
                  alt="profile image"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <ProgressBar progress={progress} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MessageSquareText size={12} style={{ color: 'var(--light-text-color)' }} />
            <span>{task.comments.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Images size={12} style={{ color: 'var(--light-text-color)' }} />
            <span>{task.resources.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <LucideLink size={12} style={{ color: 'var(--light-text-color)' }} />
            <span>{task.links.length}</span>
          </div>
        </div>

        <ModalsLauncher id={task.id} />
      </div>
    </li>
  );
}
