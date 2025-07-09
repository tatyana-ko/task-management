'use client'

import { LastTasksList } from './LastTasksList';
import { Filter } from '../ui/filter/Filter';
import { TASKS_FILTER, TASKS_SORT } from './data/filter.data';
import { LAST_TASKS } from './data/last-tasks.data';
import type { TTaskStatus } from '@/types/task.types';
import { observer } from 'mobx-react-lite';
import { taskStore } from '@/stores/task.store';

export const LastTasksSection = observer(() => {
  const filteredTasks = taskStore.filteredTasks;
  const taskFilterValue = taskStore.filterValue;
  const taskSortValue = taskStore.sorting;

  return (
    <section className="my-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Last Tasks <span className="text-lg opacity-50">({LAST_TASKS.length})</span>
        </h2>

        <div className="flex items-center gap-2">
          <Filter<TTaskStatus | 'all'>
            data={TASKS_FILTER}
            stateChangeFunction={(value) => taskStore.setFilterValue(value)}
            filterName="last-task-filter"
            value={taskFilterValue}
          />

          <Filter
            data={TASKS_SORT}
            stateChangeFunction={(value) => taskStore.setSorting(value)}
            filterName="last-task-sort"
            value={taskSortValue}
          />
        </div>
      </div>

      <LastTasksList tasks={filteredTasks} />
    </section>
  );
});
