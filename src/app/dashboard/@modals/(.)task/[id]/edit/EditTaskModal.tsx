'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
}

export function EditTaskModal({ id }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-background/30 flex items-center justify-center z-500">
      <div className="w-[600px] p-4 bg-light-bg rounded-xl shadow">
        <button type="button" onClick={handleClose}>
          <X size={24} />
        </button>
        <div>{id}</div>
      </div>
    </div>
  );
}
