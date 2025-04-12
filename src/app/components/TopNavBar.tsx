import Link from 'next/link';
import Image from 'next/image';

export default function TopNavBar() {
  return (
    <header className="w-full bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-start space-x-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/dacn-logo.svg" alt="DACN" width={32} height={32} />
        </Link>

        {/* Center Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/schedule" className="hover:text-gray-400">Schedule</Link>
          <Link href="/sports" className="hover:text-gray-400">Sports</Link>
          <Link href="/originals" className="hover:text-gray-400">Originals</Link>
          <Link href="/settings" className="hover:text-gray-400">Settings</Link>
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
