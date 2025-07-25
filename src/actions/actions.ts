'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import type { IAuthData, IAuthForm } from '@/types/auth.types';
import { redirect } from 'next/navigation';
import { OPEN_ACCESS_PAGES } from '@/config/pages.config';
import { headers } from 'next/headers';

export async function signup({ username, email, password }: IAuthForm) {
  const supabase = await createClient();

  const credentials = {
    username,
    email,
    password,
  };

  const { error, data } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.username,
      },
    },
  });

  if (error) {
    return {
      status: error.message,
      user: null,
    };
  } else if (data.user?.identities?.length === 0) {
    return {
      status: 'User with this email is already exists',
      user: null,
    };
  }

  revalidatePath(OPEN_ACCESS_PAGES.HOME_PAGE, 'layout');
  return {
    status: 'success',
    user: data.user,
  };
}

export async function login({ email, password }: IAuthData) {
  const supabase = await createClient();

  const credentials = {
    email,
    password,
  };

  const { error, data } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    return {
      status: error.message,
      user: null,
    };
  }

  revalidatePath(OPEN_ACCESS_PAGES.HOME_PAGE, 'layout');
  return {
    status: 'success',
    user: data.user,
  };
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(OPEN_ACCESS_PAGES.ERROR);
  }

  revalidatePath(OPEN_ACCESS_PAGES.HOME_PAGE, 'layout');
  redirect(OPEN_ACCESS_PAGES.LOGIN);
}

export async function getUserSession() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) return null;

  return { status: 'success', user: data?.user };
}

export async function forgotPassword(email: string) {
  const supabase = await createClient();
  const origin = (await headers()).get('origin');

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  });

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  }

  return { status: 'success' };
}

export async function resetPassword(newPassword: string, code: string) {
  const supabase = await createClient();

  const { error: CodeError } = await supabase.auth.exchangeCodeForSession(code);

  if (CodeError) {
    return { status: CodeError.message };
  }

  const { error } = await supabase.auth.updateUser({ password: newPassword });

  if (error) {
    return { status: error.message };
  }

  return {status: 'success'}
}
