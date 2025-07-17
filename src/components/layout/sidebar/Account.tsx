'use client'

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export const Account = () => {
  return (
    <div className="mb-4">
      <h2 className="mb-4 text-light-text-color/70">Account</h2>
      <button className="flex items-center gap-3 py-1 px-4 bg-primary/10 rounded-3xl">
        <Image
          alt="profile avatar"
          src="/favicon.png"
          width={36}
          height={36}
          className="h-[36px] rounded-full bg-primary"
        />
        <div className="text-left">
          <p className="font-medium">Awe Std</p>
          <p className="text-xs text-light-text-color">awestd@gmail.com</p>
        </div>
        <ChevronDown size={18} style={{ color: 'var(--light-text-color)' }} />
      </button>
    </div>
  );
};
