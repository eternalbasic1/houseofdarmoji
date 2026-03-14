import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Team from './sections/Team';
import Challenge from './sections/Challenge';
import Philosophy from './sections/Philosophy';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Team />
        <Challenge />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
