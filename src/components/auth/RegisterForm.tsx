'use client';

import Link from 'next/link';
import { FormHeader } from './Header';
import { signup } from '@/actions/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import type { IAuthForm } from '@/types/auth.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthSchema } from '@/zod-schemas/auth.schemas';
import { Field } from '../ui/field/Field';

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IAuthForm>({
    resolver: zodResolver(AuthSchema),
  });

  const onSubmit = async (data: IAuthForm) => {
    const result = await signup(data);

    if (result.status !== 'success') {
      toast.error(result.status);
      return;
    }

    toast.success('Registration was successful. Please check your email!');
    router.push('/login');
    reset();
  };

  return (
    <section className="max-w-md mx-auto mt-8">
      <FormHeader title="Sign up" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Field
          registration={register('username')}
          placeholder="John Doe"
          type="text"
          error={errors.username?.message}
          label="Username:"
        />

        <Field
          registration={register('email')}
          placeholder="email@email.com"
          type="email"
          error={errors.email?.message}
          label="Email:"
        />

        <Field
          registration={register('password')}
          placeholder="******"
          type="password"
          error={errors.password?.message}
          label="Password:"
        />

        <button
          type="submit"
          className="my-5 px-3 py-1.5 text-white bg-primary rounded-2xl cursor-pointer shadow"
          disabled={isSubmitting}
        >
          Register
        </button>
      </form>

      <div className="flex items-center gap-3">
        <h2>Already have an account?</h2>
        <Link href="/login" className="font-medium">
          Sign In
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <h2>Forgot your password?</h2>
        <Link href="/forgot-password" className="font-medium">
          Reset Password
        </Link>
      </div>
    </section>
  );
}
