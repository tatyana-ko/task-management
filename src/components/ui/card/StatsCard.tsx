import clsx from "clsx";
import Image from "next/image";

interface IStatsCardProps {
  label: string;
  numberStats: number;
  icon: string;
  isHourStat: boolean;
  bgColor: string;
}

export function StatsCard({
  label,
  numberStats,
  icon,
  isHourStat,
  bgColor,
}: IStatsCardProps) {
  return (
    <article className={clsx(bgColor, "px-3 py-3 flex items-center justify-between rounded-xl shadow-sm")}>
      <div>
        <span className="text-3xl font-medium">{numberStats}</span>
        <p className="text-sm">{label}</p>
      </div>
      <Image src={icon} alt="stats decor icon" width={70} height={70} />
    </article>
  );
}
