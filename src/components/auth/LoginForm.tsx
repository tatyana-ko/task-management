'use client';

import Link from 'next/link';
import { FormHeader } from './Header';

export function LoginForm() {
  const handleSubmit = () => {};

  return (
    <section className='max-w-md mx-auto mt-8'>
      <FormHeader title="Sign in" />

      <form onSubmit={handleSubmit} className='space-y-3'>
        <label className="block text-sm font-medium">
          <span className='text-sm block mb-2 text-light-text-color font-semibold'>Email:</span>
          <input
            type="email"
            placeholder="email@email.com"
            id="Email"
            name="email"
            className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
          />
        </label>

        <div>
          <label className="block text-sm font-medium">
            <span className='text-sm block mb-2 text-light-text-color font-semibold'>Password:</span>
            <input
              type="password"
              placeholder="******"
              name="password"
              id="password"
              className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
            />
          </label>
        </div>

        <button type="button" />
      </form>

      <div className="flex items-center gap-3">
        <h1>Don't have an account?</h1>
        <Link href="/register" className="font-medium">
          Sign Up
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <h1>Forgot your password?</h1>
        <Link href="/forgot-password" className="font-medium">
          Reset Password
        </Link>
      </div>
    </section>
  );
}
