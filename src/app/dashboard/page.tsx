import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Dashboard } from './Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[75%_25%] gap-4">
      <Dashboard />
      <div className="bg-violet-200 text-center h-[100vh]">CHAT</div>
    </div>
  );
}
