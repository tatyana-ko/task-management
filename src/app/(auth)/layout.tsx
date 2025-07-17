import { getUserSession } from '@/actions/actions';
import { DASHBOARD_PAGES } from '@/config/pages.config';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function layout({ children }: { children: ReactNode }) {
  const response = await getUserSession();

  if (response?.user) {
    redirect(DASHBOARD_PAGES.DASHBOARD);
  }

  return <>{children}</>;
}
