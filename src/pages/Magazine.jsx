import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { magazineList as mockMagazines } from '../data/mockData';

const Magazine = () => {
    const [magazines, setMagazines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMagazines = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('magazines')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    const mappedData = data.map(item => ({
                        id: item.id,
                        title: item.title,
                        issue: item.issue_name,
                        coverImage: item.cover_image_url,
                        pdfLink: item.pdf_link
                    }));
                    setMagazines(mappedData);
                } else {
                    setMagazines(mockMagazines);
                }
            } catch (err) {
                console.error('Error fetching magazines:', err.message);
                setMagazines(mockMagazines);
            } finally {
                setLoading(false);
            }
        };

        fetchMagazines();
    }, []);

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-purple"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050510] px-6 py-12 md:px-20">
            {/* Header section based on design */}
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-[#E2C371] uppercase">
                    Lumos Magazine
                </h1>
            </header>

            {/* Magazine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 max-w-6xl mx-auto">
                {Magazine.map((item) => (
                    <div key={item.id} className="group flex flex-col items-center">
                        {/* Magazine Cover Container */}
                        <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden border-[1px] border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                            <img 
                                src={item.coverImage} 
                                alt={item.title} 
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay with Read Now Button */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a 
                                    href={item.pdfLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#E2C371] text-black px-6 py-2 font-bold rounded-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    READ NOW
                                </a>
                            </div>
                        </div>
                        
                        {/* Typography matching the Figma screenshot */}
                        <div className="mt-6 text-center">
                            <h2 className="text-[#E2C371] text-lg font-medium leading-tight">
                                {item.issue}
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Jan 2026
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Magazine;

