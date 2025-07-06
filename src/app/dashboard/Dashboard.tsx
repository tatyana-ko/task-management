import { LastTasksSection } from '@/components/last-tasks/LastTasksSection';
import { StatisticChart } from '@/components/statistic-chart/StatisticChart';
import { StatsCard } from '@/components/ui/stats-card/StatsCard';
import { SearchField } from '@/components/ui/search-field/SearchField';

export function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl">Dashboard</h1>
        <SearchField />
      </div>

      <section className="grid grid-cols-[25%_75%] gap-2">
        <ul className="space-y-3">
          <li>
            <StatsCard
              label="Active Projects"
              numberStats={92}
              icon="/images/active-projects.svg"
              isHourStat={false}
              bgColor="bg-purple-300"
            />
          </li>
          <li>
            <StatsCard
              label="On Going Projects"
              numberStats={35}
              icon="/images/ongoing-projects.svg"
              isHourStat={false}
              bgColor="bg-yellow-300"
            />
          </li>
          <li>
            <StatsCard
              label="Working hours"
              numberStats={1149}
              icon="/images/working-hours.svg"
              isHourStat={true}
              bgColor="bg-pink-200"
            />
          </li>
        </ul>

        <StatisticChart />
      </section>

      <LastTasksSection />
    </div>
  );
}
