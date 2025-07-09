import { X } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  handleClose: () => void;
}

export function Modal({ title, children, handleClose }: Props) {
  return (
    <div className="fixed inset-0 bg-background/70 flex items-center justify-center z-500">
      <div className="w-[500px] p-4 bg-light-bg rounded-xl shadow">
        <div className="flex items-center justify-between font-semibold mb-4">
          <h3 className="text-lg">{title}</h3>
          <button type="button" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
