import type { LucideIcon } from "lucide-react";

export interface ISidebarMenuItem {
  label: string;
  icon: LucideIcon;
  link: string;
}

export interface ISidebarProjectItem {
  color: string;
  label: string;
  link: string;
}
