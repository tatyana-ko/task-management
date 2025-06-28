import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { TIME_RANGE } from "./diagram.data";

interface Props {
  setTimeRangeValue: Dispatch<SetStateAction<"yearly" | "monthly">>;
}

export function HeadingForStatistics({ setTimeRangeValue }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "yearly" || value === "monthly") {
      setTimeRangeValue(value);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">Projects Statistic</h2>
      <select
        name="time-range"
        onChange={handleChange}
        className="px-3 py-1 border border-neutral-400 rounded-full shadow"
      >
        {TIME_RANGE.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
