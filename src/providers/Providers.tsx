import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" toastOptions={{
        style: {
          color: '#816CEE'
        }
      }} />
    </>
  );
}
