'use client';

import { useState } from 'react';
import { MONTHLY_STATISTICS, YEARLY_STATISTICS } from './diagram.data';
import { HeadingForStatistics } from './HeadingForStatistics';
import { StatisticalDiagram } from './StatisticalDiagram';

export function StatisticChart() {
  const [timeRangeValue, setTimeRangeValue] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="px-2 py-2 bg-white rounded-lg">
      <HeadingForStatistics setTimeRangeValue={setTimeRangeValue} />
      <StatisticalDiagram
        data={timeRangeValue === 'yearly' ? YEARLY_STATISTICS : MONTHLY_STATISTICS}
      />
    </div>
  );
}
