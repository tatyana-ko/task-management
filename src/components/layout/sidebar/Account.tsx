import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Account() {
  return (
     <div className="mb-4">
      <h2 className="mb-4 text-[#cbced5]">Account</h2>
      <button className="flex items-center gap-3 py-1 px-4 bg-[#f2f2f4] rounded-3xl">
        <Image alt="profile avatar" src="" width={36} className="h-[36px] rounded-full bg-[#8352f6]" />
        <div className="text-left">
          <p className="font-bold text-neutral-950">Awe Std</p>
          <p className="text-sm text-[#83868d]">awestd@gmail.com</p>
        </div>
        <ChevronDown size={18} className="ml-4 text-neutral-500"/>
      </button>
    </div>
  )
}
