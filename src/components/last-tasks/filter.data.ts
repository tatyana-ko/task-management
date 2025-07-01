import type { TTaskStatus } from "./last-tasks.types";

export const TASKS_FILTER: Array<{label: string, value:'all' | TTaskStatus}> = [
  { label: 'All', value: 'all' },
  { label: 'In progress', value: 'in progress' },
  { label: 'Not started', value: 'not started' },
  { label: 'Completed', value: 'completed' },
];
