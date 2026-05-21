import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { podcastList as mockPodcasts } from '../data/mockData';

const Podcasts = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('podcasts')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    // Map Supabase fields to mock data structure if they differ
                    const mappedData = data.map(item => ({
                        id: item.id,
                        title: item.title,
                        host: item.host,
                        image: item.image_url,
                        link: item.audio_link
                    }));
                    setPodcasts(mappedData);
                } else {
                    // Fallback if table is empty
                    setPodcasts(mockPodcasts);
                }
            } catch (err) {
                console.error('Error fetching podcasts:', err.message);
                // Fallback on error
                setPodcasts(mockPodcasts);
            } finally {
                setLoading(false);
            }
        };

        fetchPodcasts();
    }, []);

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue"></div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Impact Podcasts</h1>
            <div className="grid-layout">
                {podcasts.map((podcast) => (
                    <div key={podcast.id} className="glass-card p-4">
                        <img src={podcast.image} alt={podcast.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold text-white">{podcast.title}</h2>
                        <p className="text-accent-blue">{podcast.host}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Podcasts;

