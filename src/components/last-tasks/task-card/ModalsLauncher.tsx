'use client';

import { AddSubtaskModal } from '@/components/ui/modal/AddSubtaskModal';
import { DASHBOARD_PAGES } from '@/config/pages.config';
import { Pencil, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  id: string;
}

export function ModalsLauncher({ id }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        title="add task"
        className="p-2 rounded-full bg-primary"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <Plus size={14} color="white" />
      </button>
      <Link
        href={DASHBOARD_PAGES.EDIT_TASK(id)}
        title="update task"
        className="p-2 rounded-full bg-accent-bg border border-primary"
      >
        <Pencil size={14} style={{ color: 'var(--primary)' }} />
      </Link>

      {isModalOpen && <AddSubtaskModal id={id} handleClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
