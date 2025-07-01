import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { TTaskStatus } from './last-tasks.types';
import { TASKS_FILTER } from './filter.data';

interface Props {
  setTaskFilterValue: Dispatch<SetStateAction<'all' | TTaskStatus>>;
}

export function TasksFilter({ setTaskFilterValue }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (
      value === 'all' ||
      value === 'in progress' ||
      value === 'not started' ||
      value === 'completed'
    ) {
      setTaskFilterValue(value);
    }
  };

  return (
    <select
      name="time-range"
      onChange={handleChange}
      className="px-3 py-1 border border-neutral-400 rounded-full shadow"
    >
      {TASKS_FILTER.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
