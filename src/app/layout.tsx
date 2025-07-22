import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matteus Fernandes - Desenvolvedor Full Stack',
  description:
    'Portfólio de Matteus Fernandes, Desenvolvedor Full Stack especializado em Node.js, React, JavaScript e MongoDB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>{children}</body>
    </html>
  );
}
