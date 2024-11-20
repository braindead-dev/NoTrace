"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noHeaderFooterRoutes = ['/login', '/signup'];

  const shouldShowHeaderFooter =
    !pathname.startsWith('/dashboard') && !noHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      {children}
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}
