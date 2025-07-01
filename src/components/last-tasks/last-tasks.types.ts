import type { IUser } from '@/types/user.types';

export interface ITask {
  id: string;
  title: string;
  status: TTaskStatus;
  progress: number;
  due: number;
  users: IUser[];
}

export type TTaskStatus = 'in progress' | 'not started' | 'completed';
