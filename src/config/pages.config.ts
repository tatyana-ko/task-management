class OpenAccessPages {
  HOME_PAGE = '/';

  ERROR = '/error'
  LOGIN = '/login';
  REGISTER = '/register';
  FORGOT_PASSWORD = '/forgot-password';
  RESET_PASSWORD = '/reset-password';
}

class DashboardPages {
  private _BASE = '/dashboard';

  DASHBOARD = `${this._BASE}`;

  EDIT_TASK = (id: string) => `dashboard/task/${id}/edit`;

  MESSAGES = `${this._BASE}/messages`;
  INSIGHT = `${this._BASE}/insight`;
  TEAM = `${this._BASE}/team`;
  SCHEDULE = `${this._BASE}/schedule`;
  REPORT = `${this._BASE}/report`;
  SETTINGS = `${this._BASE}/settings`;
}

export const OPEN_ACCESS_PAGES = new OpenAccessPages();
export const DASHBOARD_PAGES = new DashboardPages();
