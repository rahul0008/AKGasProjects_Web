import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AkGasProjects - Excellence in All Gas Pipeline Services & Industrial Solutions',
  description: 'AkGasProjects is an Authorized IGL Vendor and MSME-certified organization specializing in Gas Pipeline IT Services, Industrial Piping, and Gas Manifolds.',
  keywords: 'PNG Pipeline, IGL Connections, Gas Manifolds, Industrial Gas Installation, High-Pressure Gas Manifold, LPG Tank Installation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}