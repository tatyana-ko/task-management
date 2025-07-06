'use client';

import { useState } from 'react';
import { LastTasksList } from './LastTasksList';
import { Filter } from '../ui/filter/Filter';
import { TASKS_FILTER, TASKS_SORT } from './data/filter.data';
import { LAST_TASKS } from './data/last-tasks.data';
import type { TTaskStatus } from '@/types/task.types';
import { useFilteredAndSortTasks } from '@/hooks/useFilteredAndSortTasks';

export function LastTasksSection() {
  const [taskFilterValue, setTaskFilterValue] = useState<'all' | TTaskStatus>('all');
  const [taskSortValue, setTaskSortValue] = useState<'asc' | 'desc'>('asc');

  const filteredTasks = useFilteredAndSortTasks(LAST_TASKS, taskFilterValue, taskSortValue);

  return (
    <section className="my-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Last Tasks <span className="text-lg opacity-50">({LAST_TASKS.length})</span>
        </h2>

        <div className="flex items-center gap-2">
          <Filter<'all' | TTaskStatus>
            data={TASKS_FILTER}
            stateChangeFunction={setTaskFilterValue}
            filterName="last-task-filter"
            value={taskFilterValue}
          />

          <Filter
            data={TASKS_SORT}
            stateChangeFunction={setTaskSortValue}
            filterName="last-task-sort"
            value={taskSortValue}
          />
        </div>
      </div>

      <LastTasksList tasks={filteredTasks} />
    </section>
  );
}
