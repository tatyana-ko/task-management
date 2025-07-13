'use client'

import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { TasksSchedule } from './TasksSchedule';
import { taskStore } from '@/stores/task.store';

export const TodayTasksSection = observer(() => {
  const todayTasks = taskStore.TodayTasks;
  const users = [...new Set(todayTasks.map((task) => task.users).flat())];

  return (
    <section className="min-h-[400px] p-5 bg-accent-bg rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-medium">Today Tasks</h2>
        <ul className='flex'>
          {users &&
            users.map((user) => (
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
      </div>
      <TasksSchedule todayTasks={todayTasks} />
    </section>
  );
});
