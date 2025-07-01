import { Images, Link, MessageSquareText, Pencil, Plane, Plus } from 'lucide-react';
import type { ITask } from './last-tasks.types';
import Image from 'next/image';
import { parseNumberToTime } from '@/utils/parse-number-to-time';

interface Props {
  task: ITask;
}

export function TaskCard({ task }: Props) {
  return (
    <li className="p-4 space-y-3 bg-white rounded-xl shadow">
      <div>
        <div className="flex items-center gap-3">
          <div className="p-2 text-center bg-[#e3dffa] rounded-full">
            <Plane color="#806df2" />
          </div>
          <h3 className="font-medium text-lg w-40 break-words leading-none">
            {task.title}
          </h3>
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
        <p className='opacity-50'>Due: {parseNumberToTime(task.due)}</p>
      </div>

      <div className="py-3 w-full bg-violet-200 rounded-full">{task.progress}</div>

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
          <button className="p-2 rounded-full bg-[#806df2]">
            <Plus size={16} color="white" />
          </button>
          <button className="p-2 rounded-full bg-[#fff] border border-[#806df2]">
            <Pencil size={16} color="#806df2" />
          </button>
        </div>
      </div>
    </li>
  );
}
