import type { ITask } from './last-tasks.types';

export const LAST_TASKS: ITask[] = [
  {
    id: '1',
    title: 'Travel App User Flow',
    status: 'in progress',
    progress: 56,
    due: 4320,
    users: [
      {
        id: '1',
        name: 'First User',
        email: 'first@mail.com',
        photo: ''
      },
      {
        id: '2',
        name: 'Second User',
        email: 'second@mail.com',
        photo: ''  
      },
    ],
  },
  {
    id: '2',
    title: 'Travel App User Flow',
    status: 'in progress',
    progress: 56,
    due: 7200,
    users: [
      {
        id: '3',
        name: 'Third User',
        email: 'third@mail.com',
        photo: ''
      },
      {
        id: '4',
        name: 'Fourth User',
        email: 'fourth@mail.com',
        photo: ''
      },
    ],
  },
  {
    id: '3',
    title: 'Travel App User Flow',
    status: 'in progress',
    progress: 56,
    due: 1440,
    users: [
      {
        id: '5',
        name: 'Fifth User',
        email: 'first@mail.com',
        photo: ''
      },
      {
        id: '6',
        name: 'Sixth User',
        email: 'sixth@mail.com',
        photo: ''
      },
      {
        id: '7',
        name: 'Seventh User',
        email: 'seventh@mail.com',
        photo: ''
      },
    ],
  },
];
