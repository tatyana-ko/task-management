import type { IMonthlyStatistic, ITimeRange, IYearlyStatistic } from "./diagrama.types";

export const YEARLY_STATISTICS: IYearlyStatistic[] = [
  { period: "Jan", value: 29 },
  { period: "Feb", value: 15 },
  { period: "Mar", value: 25 },
  { period: "Apr", value: 38 },
  { period: "May", value: 28 },
  { period: "Jun", value: 18 },
  { period: "Jul", value: 27 },
];

export const MONTHLY_STATISTICS: IMonthlyStatistic[] = [
  { period: "Week 1", value: 17 },
  { period: "Week 2", value: 19 },
  { period: "Week 3", value: 15 },
  { period: "Week 4", value: 25 },
];

export const TIME_RANGE: ITimeRange[] = [
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];
