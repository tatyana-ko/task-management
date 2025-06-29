import { PAGES } from '@/config/pages.config';
import type { ISidebarMenuItem, ISidebarProjectItem } from '@/types/sidebar.types';

import {
  AlignEndHorizontal,
  CalendarDays,
  LayoutGrid,
  MessageCircleMore,
  Notebook,
  Settings,
  Users,
} from 'lucide-react';

export const MAIN_MENU_DATA: ISidebarMenuItem[] = [
  {
    label: 'Dashboard',
    icon: LayoutGrid,
    link: PAGES.DASHBOARD,
  },
  {
    label: 'Messages',
    icon: MessageCircleMore,
    link: PAGES.MESSAGES,
  },
  {
    label: 'Insight',
    icon: AlignEndHorizontal,
    link: PAGES.INSIGHT,
  },
  {
    label: 'Team',
    icon: Users,
    link: PAGES.TEAM,
  },
  {
    label: 'Schedule',
    icon: CalendarDays,
    link: PAGES.SCHEDULE,
  },
  {
    label: 'Report',
    icon: Notebook,
    link: PAGES.REPORT,
  },
  {
    label: 'Settings',
    icon: Settings,
    link: PAGES.SETTINGS,
  },
];

export const PROJECTS_DATA: ISidebarProjectItem[] = [
  {
    color: 'bg-[#794be6]',
    label: 'Landing Page',
    link: '',
  },
  {
    color: 'bg-[#e24be6]',
    label: 'Mobile App',
    link: '',
  },
  {
    color: 'bg-[#e3e95d]',
    label: 'Dashboard',
    link: '',
  },
  {
    color: 'bg-[#efaa33]',
    label: 'Fyler',
    link: '',
  },
  {
    color: 'bg-[#1a8964]',
    label: 'Branding',
    link: '',
  },
];
