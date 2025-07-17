'use client';

import Image from 'next/image';
import { ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';
import { logout } from '@/actions/actions';
import clsx from 'clsx';

export const Account = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 text-light-text-color/70">Account</h2>

      <div className="relative">
        <button
          onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
          className="flex items-center gap-3 py-1 px-4 bg-primary/10 rounded-3xl"
        >
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

        {isAccountMenuOpen && (
          <div
            className={clsx(
              `absolute w-full p-3 text-center bg-sidebar-bg border border-primary/30 rounded-md transition-all duration-300 ease-in-out`,
              `${
                isAccountMenuOpen
                  ? 'opacity-100 translate-y-2 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`,
            )}
          >
            <button
              onClick={() => handleLogout()}
              type="button"
              className="flex items-center gap-3 cursor-pointer"
            >
              <LogOut size={20} />
              <span>Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
