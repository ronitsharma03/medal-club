import { Medal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Medal className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">Medal Club</span>
          </div>
          <p className="text-gray-400">
            Empowering athletes and fitness enthusiasts across India
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#locations" className="hover:text-yellow-400">Locations</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Sports Coaching</li>
            <li>Tournaments</li>
            <li>Gym Services</li>
            <li>Health Supplements</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to stay updated with our latest news and events
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full"
            />
            <button className="bg-yellow-400 text-black px-4 rounded-r-lg hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Medal Club. All rights reserved.</p>
      </div>
    </footer>
  );
}