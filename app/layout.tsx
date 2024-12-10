import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "./components/AuthButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KaryaKram",
  description: "Event Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="border-b bg-white/80 backdrop-blur-md fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  K
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Karyakram
                </h1>
              </Link>
              <div className="flex items-center gap-6">
                <Link 
                  href="/events" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Browse Events
                </Link>
                <Link 
                  href="/dashboard" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/admin/events" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Manage Events
                </Link>
                <AuthButton />
              </div>
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed navbar */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
