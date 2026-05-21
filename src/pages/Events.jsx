import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { eventList as mockEvents } from '../data/mockData';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('events')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    const mappedData = data.map(item => ({
                        id: item.id,
                        title: item.title,
                        date: item.date,
                        location: item.location,
                        image: item.image_url
                    }));
                    setEvents(mappedData);
                } else {
                    setEvents(mockEvents);
                }
            } catch (err) {
                console.error('Error fetching events:', err.message);
                setEvents(mockEvents);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
            <div className="grid-layout">
                {events.map((event) => (
                    <div key={event.id} className="glass-card p-4">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                        <p className="text-sm text-gray-400">{event.date} | {event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;

