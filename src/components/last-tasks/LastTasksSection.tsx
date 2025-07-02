'use client';

import { useState } from 'react';
import { ListOfLastTasks } from './ListOfLastTasks';
import type { TTaskStatus } from './last-tasks.types';
import { Filter } from '../ui/filter/Filter';
import { TASKS_FILTER } from './filter.data';

export function LastTasksSection() {
  const [taskFilterValue, setTaskFilterValue] = useState<'all' | TTaskStatus>('all');

  return (
    <section className="my-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Last Tasks <span className="opacity-50">(3)</span>
        </h2>
        <Filter<'all' | TTaskStatus>
          data={TASKS_FILTER}
          stateChangeFunction={setTaskFilterValue}
          filterName="last-task-filter"
        />
      </div>
      <ListOfLastTasks />
    </section>
  );
}
