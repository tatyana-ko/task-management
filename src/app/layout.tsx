import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "favicon.png",
  },
  title: {
    absolute: "Task Management",
    template: "Task Management | %s",
  },
  description: "App for quick task overview",
  openGraph: {
    type: "website",
    description: "Task Management App",
    emails: ["info@test.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
