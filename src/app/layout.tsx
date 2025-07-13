import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.png',
  },
  title: {
    absolute: 'Task Management',
    template: 'Task Management | %s',
  },
  description: 'App for quick task overview',
  openGraph: {
    type: 'website',
    description: 'Task Management App',
    emails: ['info@test.com'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className} suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers attribute="class" defaultTheme="light" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
