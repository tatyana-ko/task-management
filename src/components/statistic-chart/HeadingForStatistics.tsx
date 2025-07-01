import type { Dispatch, SetStateAction } from 'react';
import { TIME_RANGE } from './diagram.data';
import { Filter } from '../ui/filter/Filter';

interface Props {
  setTimeRangeValue: Dispatch<SetStateAction<'yearly' | 'monthly'>>;
}

export function HeadingForStatistics({ setTimeRangeValue }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">Projects Statistic</h2>
      <Filter
        filterName="time-range"
        stateChangeFunction={setTimeRangeValue}
        data={TIME_RANGE}
      />
    </div>
  );
}
