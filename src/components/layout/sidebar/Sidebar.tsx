import { Account } from './Account';
import { MainMenu } from './MainMenu';
import { Projects } from './Projects';

export function Sidebar() {
  return (
    <aside className="p-4 bg-light-bg h-full">
      <Account />
      <MainMenu />
      <Projects />
    </aside>
  );
}
