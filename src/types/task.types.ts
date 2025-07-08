import type { IUser } from '@/types/user.types';

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: string;
  title: string;

  due: Date;
  users: IUser[];
  subtasks: ISubTask[];
  comments: string[];
  resources: string[];
  links: string[];
}

export type TTaskStatus = 'in progress' | 'not started' | 'completed';

export type TTaskFormData = Pick<ITask, 'title' | 'due'>;
