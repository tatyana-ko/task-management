import Link from "next/link";
import { MAIN_MENU_DATA } from "./sidebar.data";

export function MainMenu() {
  return (
    <div className="mb-4">
      <h2 className="mb-4 text-[#cbced5]">Main Menu</h2>
      <ul className="space-y-3 ml-3">
        {MAIN_MENU_DATA.map((item) => (
          <li key={item.label}>
            <Link href={item.link} className="flex items-center gap-3">
              <item.icon color="#a3a5a8" size={18}/>
              <p className="text-[#a3a5a8]">{item.label}</p>
              {item.label === "Messages" && <span className="px-2 text-sm ml-auto bg-indigo-300 rounded-2xl">4</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}