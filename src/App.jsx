import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Magazine from './pages/Magazine';
import Events from './pages/Events';
import About from './pages/About';
import LifeAtImpact from './pages/LifeAtImpact';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-bg-dark text-text-main flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/podcasts" element={<Podcasts />} />
                        <Route path="/magazine" element={<Magazine />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/life-at-impact" element={<LifeAtImpact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
