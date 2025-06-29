import Link from 'next/link';
import { PROJECTS_DATA } from './sidebar.data';
import { clsx } from 'clsx';

export function Projects() {
  return (
    <div className="mb-4">
      <h2 className="mb-4 text-[#cbced5]">Projects</h2>
      <ul className="space-y-3 ml-3">
        {PROJECTS_DATA.map((item) => (
          <li key={item.label}>
            <Link href={item.link} className="flex items-center gap-3">
              <div className={clsx(item.color, 'h-3 w-3 block')} />
              <p className="text-[#83868d]">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
