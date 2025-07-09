import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Dashboard } from './Dashboard';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[75%_25%]">
      <Dashboard />
      <div className="bg-chat-bg-color text-center text-white h-[100%]">
        <Image
          src="/chat-img.png"
          alt="chat image"
          width={0}
          height={0}
          sizes="100vw"  
          className="w-full h-auto"
        />
        <div>CHAT</div>
      </div>
    </div>
  );
}
