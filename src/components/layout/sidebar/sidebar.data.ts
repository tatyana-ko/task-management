import { DASHBOARD_PAGES } from '@/config/pages.config';
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
    link: DASHBOARD_PAGES.DASHBOARD,
  },
  {
    label: 'Messages',
    icon: MessageCircleMore,
    link: DASHBOARD_PAGES.MESSAGES,
  },
  {
    label: 'Insight',
    icon: AlignEndHorizontal,
    link: DASHBOARD_PAGES.INSIGHT,
  },
  {
    label: 'Team',
    icon: Users,
    link: DASHBOARD_PAGES.TEAM,
  },
  {
    label: 'Schedule',
    icon: CalendarDays,
    link: DASHBOARD_PAGES.SCHEDULE,
  },
  {
    label: 'Report',
    icon: Notebook,
    link: DASHBOARD_PAGES.REPORT,
  },
  {
    label: 'Settings',
    icon: Settings,
    link: DASHBOARD_PAGES.SETTINGS,
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
