import { ThemeProvider, type ThemeProviderProps } from 'next-themes';
import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children, ...props }: { children: ReactNode } & ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: '#816CEE',
          },
        }}
      />
    </ThemeProvider>
  );
}
