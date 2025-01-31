import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
{/*               <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                +91 97
              </p> */}
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                medalclubhelp@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                Pune, Maharashtra
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
