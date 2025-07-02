import Link from 'next/link';
import { MAIN_MENU_DATA } from './sidebar.data';

export function MainMenu() {
  return (
    <div className="mb-4">
      <h2 className="mb-4 text-light-text-color/70">Main Menu</h2>
      <ul className="space-y-3 ml-3">
        {MAIN_MENU_DATA.map((item) => (
          <li key={item.label}>
            <Link href={item.link} className="flex items-center gap-3">
              <item.icon style={{ color: 'var(--light-text-color)' }} size={18} />
              <p className="text-light-text-color">{item.label}</p>
              {item.label === 'Messages' && (
                <span className="px-2 ml-auto text-sm font-semibold text-primary bg-primary/40 rounded-2xl">
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
