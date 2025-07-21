import { ChevronDown } from 'lucide-react';
import type { ChangeEvent } from 'react';
import styles from './filter.module.css';

interface Props<T> {
  filterName: string;
  data: Array<{ label: string; value: T }>;
  stateChangeFunction: (value: T) => void;
  value: T;
}

export function Filter<T extends string>({
  filterName,
  data,
  stateChangeFunction,
  value,
}: Props<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as T;

    stateChangeFunction(value);
  };

  return (
    <div className={styles.wrapper}>
      <select name={filterName} onChange={handleChange} className={styles.select} value={value}>
        {data.length === 0 ? (
          <option>No option</option>
        ) : (
          data.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))
        )}
      </select>
      <div>
        <ChevronDown className={styles.icon} />
      </div>
    </div>
  );
}
