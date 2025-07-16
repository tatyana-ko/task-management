'use client';

import { Field } from '@/components/ui/field/Field';
import type { IAuthForm } from '@/types/auth.types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Auth() {
  const [isALoginForm, setIsALoginForm] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const onSubmitForm = () => {};

  return (
    <div>
      <div className="max-w-md mx-auto mt-8">
        <div className="flex justify-center mb-6 gap-5 ">
          <button
            type="button"
            className={`px-3 py-2 font-semibold ${
              isALoginForm ? 'text-primary border-b-2 border-primary' : 'text-light-text-color'
            }`}
            onClick={() => setIsALoginForm(true)}
          >
            Login
          </button>

          <button
            type="button"
            className={`px-3 py-2 font-semibold ${
              !isALoginForm ? 'text-primary border-b-2 border-primary' : 'text-light-text-color'
            }`}
            onClick={() => setIsALoginForm(false)}
          >
            Registration
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4">
          <Field
            type="email"
            placeholder="example@gmail.com"
            label="Email:"
            registration={register('email', { required: 'Field is required', maxLength: 15 })}
            error={errors.email?.message}
          />

          <Field
            type="password"
            placeholder="******"
            label="Password:"
            registration={register('password', { required: 'Field is required', minLength: 6 })}
            error={errors.password?.message}
          />

          {!isALoginForm && (
            <Field
              type="password"
              placeholder="******"
              label="Please, confirm password"
              registration={register('confirmPassword', {
                required: true,
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
              error={errors.confirmPassword?.message}
            />
          )}

          <button
            className="mt-8 px-3 py-2 self-end text-white bg-primary/60 rounded-lg shadow cursor-pointer"
            type="submit"
          >
            {isALoginForm ? 'Login' : 'Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}
