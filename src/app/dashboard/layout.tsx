import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import type { PropsWithChildren, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modals: ReactNode;
}

export default function DashboardLayout({ children, modals }: Props) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <Sidebar />
      <main>{children}</main>
      {modals}
    </div>
  );
}
