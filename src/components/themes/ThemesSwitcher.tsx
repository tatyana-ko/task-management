'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemesSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      role="themes switcher"
      className="mb-3"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
