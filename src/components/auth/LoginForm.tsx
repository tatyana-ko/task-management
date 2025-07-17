'use client';

import Link from 'next/link';
import { FormHeader } from './Header';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { IAuthData } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInSchema } from '@/zod-schemas/auth.schemas';
import { login } from '@/actions/actions';
import { Field } from '../ui/field/Field';
import { toast } from 'sonner';
import { DASHBOARD_PAGES, OPEN_ACCESS_PAGES } from '@/config/pages.config';

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IAuthData>({
    resolver: zodResolver(LogInSchema),
  });

  const onSubmit = async (data: IAuthData) => {
    const result = await login(data);

    if (result.status !== 'success') {
      toast.error(result.status);
      return;
    }

    toast.success('You have successfully logged in!');
    router.push(DASHBOARD_PAGES.DASHBOARD);
    reset();
  };

  return (
    <section className="max-w-md mx-auto mt-8">
      <FormHeader title="Sign in" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
          Log In
        </button>
      </form>

      <div className="flex items-center gap-3">
        <h1>Don't have an account?</h1>
        <Link href={OPEN_ACCESS_PAGES.REGISTER} className="font-medium">
          Sign Up
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <h1>Forgot your password?</h1>
        <Link href={OPEN_ACCESS_PAGES.FORGOT_PASSWORD} className="font-medium">
          Reset Password
        </Link>
      </div>
    </section>
  );
}
