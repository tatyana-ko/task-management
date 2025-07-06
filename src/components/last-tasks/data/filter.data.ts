import type { TTaskStatus } from '@/types/task.types';

export const TASKS_FILTER: Array<{ label: string; value: 'all' | TTaskStatus }> = [
  { label: 'All', value: 'all' },
  { label: 'In progress', value: 'in progress' },
  { label: 'Not started', value: 'not started' },
  { label: 'Completed', value: 'completed' },
];

export const TASKS_SORT: Array<{ label: string; value: 'asc' | 'desc' }> = [
  { label: 'Asc', value: 'asc' },
  { label: 'Desc', value: 'desc' },
];
