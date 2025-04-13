'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/sports', label: 'Sports' },
    { href: '/originals', label: 'Originals' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <header className="w-full bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/dacn-logo.svg" alt="DACN" width={32} height={32} />
        </Link>

        {/* Center Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-gray-400 transition ${
                pathname === href ? 'text-yellow-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex space-x-4 text-sm">
          <Link href="/login" className="hover:underline">Log In</Link>
          <Link
            href="/signup"
            className="bg-white text-black font-semibold px-4 py-1 rounded hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
