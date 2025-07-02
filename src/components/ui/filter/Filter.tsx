import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props<T> {
  filterName: string;
  data: Array<{ label: string; value: T }>;
  stateChangeFunction: Dispatch<SetStateAction<T>>;
}

export function Filter<T extends string>({ filterName, data, stateChangeFunction }: Props<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as T;

    stateChangeFunction(value);
  };

  return (
    <select
      name={filterName}
      onChange={handleChange}
      className="px-3 py-1 border border-light-text-color rounded-full shadow"
    >
      {data.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
