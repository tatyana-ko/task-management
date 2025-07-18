import { DASHBOARD_PAGES } from '@/config/pages.config';
import Link from 'next/link';

export function HomePage() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Link
        href={DASHBOARD_PAGES.DASHBOARD}
        className="p-4 bg-primary/80 rounded-lg text-white uppercase shadow"
      >
        Get started
      </Link>
    </div>
  );
}
