import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;