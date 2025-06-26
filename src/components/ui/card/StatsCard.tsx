import Image from "next/image";

interface IStatsCardProps {
  label: string;
  numberStats: number;
  icon: string;
  isHourStat: boolean;
}

export function StatsCard({
  label,
  numberStats,
  icon,
  isHourStat,
}: IStatsCardProps) {
  return (
    <article>
      <span>{numberStats}</span>
      <p>{label}</p>
      <Image
        src={icon}
        alt="stats decor icon"
        width={80}
        height={80}
      />
    </article>
  )
}
