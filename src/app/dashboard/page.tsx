import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Dashboard } from './Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[75%_25%]">
      <Dashboard />
      <div className="bg-chat-bg-color text-center text-white h-[100vh]">CHAT</div>
    </div>
  );
}
