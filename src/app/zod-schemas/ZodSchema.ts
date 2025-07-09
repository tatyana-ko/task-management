import z from 'zod';

export const EditTaskSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
  due: z.date(),
});

export const AddSubtaskSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
});
