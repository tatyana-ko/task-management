'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { IMonthlyStatistic, IYearlyStatistic } from './diagrama.types';
import { DiagramTooltip } from './DiagramTooltip';
import { useMemo } from 'react';

interface Props {
  data: Array<IYearlyStatistic | IMonthlyStatistic>;
}

export function StatisticalDiagram({ data }: Props) {
  const maxValue = useMemo(() => {
    return Math.max(...data.map((item) => item.value));
  }, [data]);

  return (
    <ResponsiveContainer width="95%" height="85%">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="statisticColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c8b3fb" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c8b3fb" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="period" className="text-sm" />
        <YAxis className="text-sm" />

        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip content={<DiagramTooltip />} />
        <ReferenceLine
          stroke="#2d2347"
          segment={[
            { x: 'Apr', y: 0 },
            { x: 'Apr', y: maxValue },
          ]}
        />

        <Area
          type="bump"
          dataKey="value"
          stroke="#987ed8"
          fillOpacity={1}
          fill="url(#statisticColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
