import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import QueryProvider from '@/components/providers/QueryProvider';
import { ReactNode } from 'react';
import './globals.css';
import * as metadataObj from './metadata';

export const metadata = metadataObj.metadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
