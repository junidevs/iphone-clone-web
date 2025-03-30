import './App.css';
import { Navbar } from './components/navbar/navbar.tsx';
import { Hero } from './components/hero/hero.tsx';
import Highlights from './components/highlights/highlights.tsx';
import { Model } from './components/model/model.tsx';
import { KnowHow } from './components/knowHow/know-how.tsx';
import { Features } from './components/features/features.tsx';
import { Footer } from './components/footer/footer.tsx';

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <KnowHow />
      <Footer />
    </main>
  );
}

export default App;
