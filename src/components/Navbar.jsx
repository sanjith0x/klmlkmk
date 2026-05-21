import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-bg-dark border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
                    IMPACT<span className="text-accent-blue">.</span>
                </Link>
                <div className="space-x-8 hidden md:flex">
                    <Link to="/" className="text-gray-300 hover:text-accent-blue transition-colors">Home</Link>
                    <Link to="/podcasts" className="text-gray-300 hover:text-accent-blue transition-colors">Podcasts</Link>
                    <Link to="/magazine" className="text-gray-300 hover:text-accent-blue transition-colors">Magazine</Link>
                    <Link to="/events" className="text-gray-300 hover:text-accent-blue transition-colors">Events</Link>
                    <Link to="/about" className="text-gray-300 hover:text-accent-blue transition-colors">About</Link>
                    <Link to="/life-at-impact" className="text-gray-300 hover:text-accent-blue transition-colors">Life at Impact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
