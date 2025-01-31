import { MapPin, ChevronRight } from 'lucide-react';

export function Locations() {
  return (
    <section id="locations" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Locations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-yellow-400" />
              Pune
            </h3>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                alt="Medal Club Pune HQ"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white">123 Sports Complex, Koregaon Park, Pune</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pan India Presence</h3>
            <p className="text-gray-600 mb-4">
              Find us in major cities across India:
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Mumbai
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Delhi
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Bangalore
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Chennai
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Hyderabad
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                Kolkata
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
