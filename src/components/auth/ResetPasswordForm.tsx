'use client';

import { PasswordSchema } from '@/zod-schemas/auth.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormHeader } from './Header';
import { Field } from '../ui/field/Field';
import { resetPassword } from '@/actions/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { OPEN_ACCESS_PAGES } from '@/config/pages.config';

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<{ password: string }>({
    resolver: zodResolver(PasswordSchema),
  });

  const onSubmit = async ({ password }: { password: string }) => {
    const code = searchParams.get('code');

    if (code) {
      const result = await resetPassword(password, code);

      if (result.status !== 'success') {
        toast.error(result.status);
        return;
      } else {
        router.push(OPEN_ACCESS_PAGES.HOME_PAGE);
      }
    }
  };

  return (
    <section className="max-w-md mx-auto mt-8">
      <FormHeader title="Reset Password" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Field
          registration={register('password')}
          placeholder="******"
          type="password"
          error={errors.password?.message}
          label="New password:"
        />

        <button
          type="submit"
          className="my-5 px-3 py-1.5 text-white bg-primary rounded-2xl cursor-pointer shadow"
          disabled={isSubmitting}
        >
          Save
        </button>
      </form>
    </section>
  );
}
