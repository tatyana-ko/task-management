'use client'

import dynamicNext from "next/dynamic";
import { Account } from './Account';
import { MainMenu } from './MainMenu';
import { Projects } from './Projects';

const DynamicThemesSwitcher = dynamicNext(() => import('@/components/themes/ThemesSwitcher').then((mod) => mod.ThemesSwitcher), {
	ssr: false})

export function Sidebar() {
  return (
    <aside className="p-4 bg-accent-bg h-full">
      <DynamicThemesSwitcher />
      <Account />
      <MainMenu />
      <Projects />
    </aside>
  );
}
