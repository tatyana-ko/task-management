export interface IYearlyStatistic {
  period: string;
  value: number;
}

export interface IMonthlyStatistic {
  period: string;
  value: number;
}

export interface ITimeRange {
  label: 'Yearly' | 'Monthly';
  value: 'yearly' | 'monthly';
}
