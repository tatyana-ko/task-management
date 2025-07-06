class Pages {
  HOME_PAGE = '/';
  DASHBOARD = '/dashboard';

  EDIT_TASK = (id: string) => `dashboard/task/${id}/edit`;

  MESSAGES = '/messages';
  INSIGHT = '/insight';
  TEAM = '/team';
  SCHEDULE = '/schedule';
  REPORT = '/report';
  SETTINGS = '/settings';
}

export const PAGES = new Pages();
