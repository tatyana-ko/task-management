import { LAST_TASKS } from '@/components/last-tasks/data/last-tasks.data';
import type { ISubTask, ITask, TTaskFormData, TTaskStatus } from '@/types/task.types';
import { makeAutoObservable } from 'mobx';

class TaskStore {
  tasks: ITask[] = LAST_TASKS;
  filterValue: TTaskStatus | 'all' = 'all';
  sorting: 'asc' | 'desc' = 'asc';

  constructor() {
    makeAutoObservable(this);
  }

  getTaskById(id: string): ITask | undefined {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) return;

    return task;
  }

  updateTask(id: string, body: TTaskFormData) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === id) {
        return { ...t, ...body };
      } else {
        return t;
      }
    });
  }

  addSubtask(taskId: string, title: string) {
    const taskIdx = this.tasks.findIndex((t) => t.id === taskId);

    if (taskIdx === -1) return;

    const newSubtask: ISubTask = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    const updatedTask = {
      ...this.tasks[taskIdx],
      subtasks: [...this.tasks[taskIdx].subtasks, newSubtask],
    };

    this.tasks[taskIdx] = updatedTask;
  }

  setFilterValue(value: TTaskStatus | 'all') {
    this.filterValue = value;
  }

  setSorting(value: 'asc' | 'desc') {
    this.sorting = value;
  }

  get filteredTasks(): ITask[] {
    let tasks = [...this.tasks];

    switch (this.filterValue) {
      case 'completed':
        tasks = tasks.filter((task) => task.subtasks.every((t) => t.isCompleted));
        break;

      case 'in progress':
        tasks = tasks.filter((task) => {
          const completedSubtask = task.subtasks.filter((t) => t.isCompleted).length;

          return completedSubtask > 0 && completedSubtask < task.subtasks.length;
        });
        break;

      case 'not started':
        tasks = tasks.filter((task) => task.subtasks.every((t) => !t.isCompleted));
        break;

      case 'all':
      default:
        break;
    }

    return [...tasks].sort((a, b) => {
      const dateA = new Date(a.due).getTime();
      const dateB = new Date(b.due).getTime();

      return this.sorting === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
}

export const taskStore = new TaskStore();
