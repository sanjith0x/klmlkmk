import React from 'react';

const Home = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Impact</h1>
            <p className="text-gray-300">Driving change through media, events, and community.</p>
            <div className="grid-layout mt-8">
                <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold text-accent-blue">Latest Impact</h2>
                    <p className="text-sm text-gray-400">Junior 2 will add content here.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
