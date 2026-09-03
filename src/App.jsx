import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Services from './pages/Services';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Activities from './pages/Activities';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
