import { Medal } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Medal className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-bold text-white">Medal Club</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-white">
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#locations" className="hover:text-yellow-400">Locations</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
}