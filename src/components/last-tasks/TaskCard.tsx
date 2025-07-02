import { Images, Link, MessageSquareText, Pencil, Plane, Plus } from 'lucide-react';
import type { ITask } from './last-tasks.types';
import Image from 'next/image';
import { parseNumberToTime } from '@/utils/parse-number-to-time';

interface Props {
  task: ITask;
}

export function TaskCard({ task }: Props) {
  return (
    <li className="p-4 space-y-3 bg-light-bg rounded-xl shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 text-center text-primary bg-primary/20 rounded-full">
          <Plane />
        </div>

        <div>
          <h3 className="font-medium text-lg w-40 break-words leading-none">
            {task.title}
          </h3>
          <p className="text-sm opacity-50">Due: {parseNumberToTime(task.due)}</p>
        </div>

        {task.users && (
          <ul className="flex items-center">
            {task.users.map((user) => (
              <Image
                key={user.id}
                src={user.photo || '/user-photo.svg'}
                alt="profile image"
                width={34}
                height={34}
                className="rounded-full"
              ></Image>
            ))}
          </ul>
        )}
      </div>

      <div className="py-3 w-full bg-primary/20 rounded-full">{task.progress}</div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MessageSquareText size={12} />
            <span>3</span>
          </div>
          <div className="flex items-center gap-1">
            <Images size={12} />
            <span>6</span>
          </div>
          <div className="flex items-center gap-1">
            <Link size={12} />
            <span>5</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-primary">
            <Plus size={16} color="white" />
          </button>
          <button className="p-2 rounded-full bg-light-bg border border-primary">
            <Pencil size={16} style={{ color: 'var(--primary)' }} />
          </button>
        </div>
      </div>
    </li>
  );
}
