import { SearchField } from "@/components/ui/search-field/SearchField";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl">Dashboard</h1>
      <SearchField />
    </div>
  );
}
