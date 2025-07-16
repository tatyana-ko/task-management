'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import type { IAuthForm } from '@/types/auth.types';

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

  revalidatePath('/', 'layout');
  return {
    status: 'success',
    user: data.user,
  };
}

export async function login(formData: FormData) {}
