import z from 'zod';

export const EditTaskSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
  due: z.object({
    date: z.coerce.date(),
    startTime: z
      .string()
      .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'Start time must be in HH:MM format'),
    endTime: z
      .string()
      .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'End time must be in HH:MM format'),
  }),
});

export const AddSubtaskSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
});

