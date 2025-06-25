"use client";

import { usePathname } from "next/navigation";
import { useState, createContext, useContext } from "react";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Context for drawer state
const DrawerContext = createContext<{
  closeDrawer: () => void;
} | null>(null);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within DrawerProvider');
  }
  return context;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


interface RootLayoutProps {
  list: React.ReactNode;
  detail: React.ReactNode;
  children: React.ReactNode;
}

export default function RootLayout({
  list,
  detail,
  children,
}: RootLayoutProps) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMailPage = pathname?.startsWith('/inbox') || pathname?.startsWith('/sent');

  if (!isMailPage) {
    return <html lang="en">
      <body
        className={`h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          {children}
        </div>
      </body>
    </html>
  }

  return (
    <html lang="en">
      <body
        className={`h-screen overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-full">
          {/* Top Navigation Bar */}
          <nav className="border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Mobile Menu Button for Email List */}
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="md:hidden p-1 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold">Email</h1>
            </div>

            <div className="flex space-x-6">
              <Link
                href="/inbox"
                className={`text-sm font-medium text-blue-600 transition-colors ${pathname !== '/inbox' ? 'text-blue-800' : 'text-blue-400'
                  }`}
              >
                Inbox
              </Link>
              <Link
                href="/sent"
                className={`text-sm font-medium text-blue-600 transition-colors ${pathname !== '/sent' ? 'text-blue-800' : 'text-blue-400'
                  }`}
              >
                Sent
              </Link>
            </div>
          </nav>

          <div className="flex flex-1 overflow-hidden">
            {/* Overlay for mobile */}
            {isDrawerOpen && (
              <div
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setIsDrawerOpen(false)}
              />
            )}

            {/* Email List Sidebar */}
            <DrawerContext.Provider value={{ closeDrawer: () => setIsDrawerOpen(false) }}>
              <aside className={`
                fixed md:static inset-y-0 left-0 top-16 z-40 w-80 md:w-1/3 lg:w-1/4
                border-r overflow-y-auto
                transform transition-transform duration-300 ease-in-out
                ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              `}>
                {list}
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto">{detail}</main>
            </DrawerContext.Provider>
          </div>
        </div>
      </body>
    </html>
  );
}
