import z from 'zod';

export const AuthSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
