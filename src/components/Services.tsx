import { Trophy, Calendar, Dumbbell } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-4">Sports Coaching</h3>
            <p className="text-gray-600">
              Professional training under retired veteran athletes with 
              personalized progress monitoring
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-4">Tournaments</h3>
            <p className="text-gray-600">
              Regular sports tournaments organized across India for 
              various age groups and skill levels
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Dumbbell className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-4">Fitness Services</h3>
            <p className="text-gray-600">
              State-of-the-art gym facilities and premium health supplements 
              available PAN India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}