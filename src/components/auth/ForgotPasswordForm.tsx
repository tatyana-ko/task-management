'use client';

import { useForm } from 'react-hook-form';
import { Field } from '../ui/field/Field';
import { FormHeader } from './Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailSchema } from '@/zod-schemas/auth.schemas';
import Link from 'next/link';
import { OPEN_ACCESS_PAGES } from '@/config/pages.config';
import { ChevronLeft } from 'lucide-react';
import  { forgotPassword } from '@/actions/actions';
import { toast } from 'sonner';


export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<{ email: string }>({
    resolver: zodResolver(EmailSchema),
  });

  const onSubmit = async ({ email }: { email: string }) => {
    const result = await forgotPassword(email);

    if (result.status !== 'success') {
      toast.error(result.status);
      return;
    }

    toast.success('Link is send to your email, please check!');
  };

  return (
    <section className="max-w-md mx-auto mt-8">
      <FormHeader title="Forgot Password" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Field
          registration={register('email')}
          placeholder="email@email.com"
          type="email"
          error={errors.email?.message}
          label="Email:"
        />

        <button
          type="submit"
          className="my-5 px-3 py-1.5 text-white bg-primary rounded-2xl cursor-pointer shadow"
          disabled={isSubmitting}
        >
          Send link
        </button>
      </form>

      <Link href={OPEN_ACCESS_PAGES.LOGIN} className="flex items-center gap-2">
        <ChevronLeft /> Back to login page
      </Link>
    </section>
  );
}
