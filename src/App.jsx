import React from 'react';
import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Childhood from './pages/Childhood.jsx';
import MusicCareer from './pages/MusicCareer.jsx';
import Achievements from './pages/Achievements.jsx';
import Inspiration from './pages/Inspiration.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return <div className="site-shell"><Navbar /><main><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/childhood" element={<Childhood />} />
    <Route path="/music-career" element={<MusicCareer />} />
    <Route path="/achievements" element={<Achievements />} />
    <Route path="/inspiration" element={<Inspiration />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes></main><Footer /></div>;
}
