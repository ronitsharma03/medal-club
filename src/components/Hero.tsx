import { Navbar } from './Navbar';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Excellence in Sports & Fitness
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Professional sports coaching, world-class facilities, and expert guidance 
          from veteran athletes across India
        </p>
        <a 
          href="#contact"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold 
          hover:bg-yellow-500 transition duration-300"
        >
          Join Now
        </a>
      </div>
    </header>
  );
}