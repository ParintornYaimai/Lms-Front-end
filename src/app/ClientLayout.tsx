'use client'

import { usePathname } from 'next/navigation';
import { shouldHideTopNavbar } from '@/utils';
import Navbar from '../component/topnavbar';
import Sidebar from '../component/sidebar';
import ToastProvider from './toast';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideTopNavbar = shouldHideTopNavbar(pathname);

  if(hideTopNavbar){
    return <>{children}</>;
  }

  return (
    
    <div >
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Body */}
      <div className="flex ">
        {/* Sidebar */}
        <div className="hidden md:block fixed left-0 top-[56px] h-[calc(100vh-56px)] w-[70px] z-40">
          <Sidebar />
        </div>
        {/* Main content area */}
        <div className="w-full h-full ml-[71px]">{/* อยากให้ scroll ได้ใช้h-screen */}
          {children}
        </div>
      </div>
      <ToastProvider />
    </div>
  );
}
