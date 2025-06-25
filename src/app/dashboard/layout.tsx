import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
