import type { ITask } from '@/types/task.types';

export const LAST_TASKS: ITask[] = [
  {
    id: '1',
    title: 'Travel App User Flow',
    due: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    subtasks: [
      {
        id: '1',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '2',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '3',
        title: 'first',
        isCompleted: false,
      },
    ],
    users: [
      {
        id: '1',
        name: 'First User',
        email: 'first@mail.com',
        photo: '',
      },
      {
        id: '2',
        name: 'Second User',
        email: 'second@mail.com',
        photo: '',
      },
    ],
    comments: ['1', '1', '1'],
    resources: ['1', '1', '1', '1', '1', '1'],
    links: ['1', '1'],
  },
  {
    id: '2',
    title: 'Travel App User Flow',
    due: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
    subtasks: [
      {
        id: '1',
        title: 'first',
        isCompleted: true,
      },
      {
        id: '2',
        title: 'first',
        isCompleted: true,
      },
      {
        id: '3',
        title: 'first',
        isCompleted: true,
      },
    ],
    users: [
      {
        id: '3',
        name: 'Third User',
        email: 'third@mail.com',
        photo: '',
      },
      {
        id: '4',
        name: 'Fourth User',
        email: 'fourth@mail.com',
        photo: '',
      },
    ],
    comments: ['2'],
    resources: ['2'],
    links: ['2'],
  },
  {
    id: '3',
    title: 'Travel App User Flow',
    due: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    subtasks: [
      {
        id: '1',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '2',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '3',
        title: 'first',
        isCompleted: true,
      },
    ],
    users: [
      {
        id: '5',
        name: 'Fifth User',
        email: 'first@mail.com',
        photo: '',
      },
      {
        id: '6',
        name: 'Sixth User',
        email: 'sixth@mail.com',
        photo: '',
      },
      {
        id: '7',
        name: 'Seventh User',
        email: 'seventh@mail.com',
        photo: '',
      },
    ],
    comments: ['3'],
    resources: ['3'],
    links: ['3'],
  },
  {
    id: '4',
    title: 'Travel App User Flow',
    due: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    subtasks: [
      {
        id: '1',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '2',
        title: 'first',
        isCompleted: false,
      },
      {
        id: '3',
        title: 'first',
        isCompleted: true,
      },
      {
        id: '3',
        title: 'first',
        isCompleted: false,
      },
    ],
    users: [
      {
        id: '3',
        name: 'Third User',
        email: 'third@mail.com',
        photo: '',
      },
      {
        id: '4',
        name: 'Fourth User',
        email: 'fourth@mail.com',
        photo: '',
      },
    ],
    comments: ['2'],
    resources: ['2'],
    links: ['2'],
  },
];
