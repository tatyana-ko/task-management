import { Images, Link, MessageSquareText, Pencil, Plane, Plus } from 'lucide-react';
import Image from 'next/image';
import { formatDistance, subDays } from 'date-fns';
import type { ITask } from '@/types/task.types';
import { ProgressBar } from './ProgressBar';

export function TaskCard({ task }: { task: ITask }) {
  const completedSubtasks = task.subtasks.filter((t) => t.isCompleted).length;
  const progress =
    task.subtasks.length > 0 ? Math.trunc((completedSubtasks / task.subtasks.length) * 100) : 0;

  return (
    <li className="w-[280px] p-4 space-y-3 bg-light-bg rounded-xl shadow">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-fit p-1.5 text-primary bg-primary/20 rounded-full">
            <Plane />
          </div>

          <div className="w-[100px]">
            <h3 className="font-medium text-base leading-none">{task.title}</h3>
            <p className="text-xs opacity-50">
              Due: {formatDistance(subDays(task.due, 0), new Date())}
            </p>
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
            <Link size={12} style={{ color: 'var(--light-text-color)' }} />
            <span>{task.links.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button title="add task" className="p-2 rounded-full bg-primary">
            <Plus size={14} color="white" />
          </button>
          <button
            title="update task"
            className="p-2 rounded-full bg-light-bg border border-primary"
          >
            <Pencil size={14} style={{ color: 'var(--primary)' }} />
          </button>
        </div>
      </div>
    </li>
  );
}
