import { ThemesSwitcher } from '@/components/themes/ThemesSwitcher';
import { Account } from './Account';
import { MainMenu } from './MainMenu';
import { Projects } from './Projects';

export function Sidebar() {
  return (
    <aside className="p-4 bg-accent-bg h-full">
      <ThemesSwitcher />
      <Account />
      <MainMenu />
      <Projects />
    </aside>
  );
}
