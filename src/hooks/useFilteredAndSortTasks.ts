import { useMemo } from 'react';
import type { ITask, TTaskStatus } from '@/types/task.types';

export const useFilteredAndSortTasks = (
  tasks: ITask[],
  filter: 'all' | TTaskStatus,
  sortValue: 'asc' | 'desc',
): ITask[] => {
  return useMemo(() => {
    if (!tasks.length) return [];

    const filtered = (() => {
      switch (filter) {
        case 'completed':
          return tasks.filter((task) => task.subtasks.every((t) => t.isCompleted));

        case 'in progress':
          return tasks.filter((task) => {
            const completedSubtask = task.subtasks.filter((t) => t.isCompleted).length;

            return completedSubtask > 0 && completedSubtask < task.subtasks.length;
          });

        case 'not started':
          return tasks.filter((task) => task.subtasks.every((t) => !t.isCompleted));
        case 'all':

        default:
          return tasks;
      }
    })();

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.due).getTime();
      const dateB = new Date(b.due).getTime();

      return sortValue === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [tasks, filter, sortValue]);
};
