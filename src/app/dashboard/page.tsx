import { StatsCard } from "@/components/ui/card/StatsCard";
import { SearchField } from "@/components/ui/search-field/SearchField";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl">Dashboard</h1>
        <SearchField />
      </div>

      <div className="grid grid-cols-[25%_75%]">
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

        <div>DIAGRAM</div>
      </div>
    </div>
  );
}
