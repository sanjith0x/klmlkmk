import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bg-dark border-t border-gray-800 p-12 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
                <div>
                    <h3 className="text-white font-bold text-xl mb-4">IMPACT</h3>
                    <p className="text-sm">Empowering voices, creating impact.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-accent-blue">Newsletter</a></li>
                        <li><a href="#" className="hover:text-accent-blue">Careers</a></li>
                        <li><a href="#" className="hover:text-accent-blue">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Social</h4>
                    <div className="flex space-x-4">
                        <span className="cursor-pointer hover:text-accent-purple">Instagram</span>
                        <span className="cursor-pointer hover:text-accent-purple">Twitter</span>
                        <span className="cursor-pointer hover:text-accent-purple">LinkedIn</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12 text-xs text-gray-600 border-t border-gray-900 pt-8">
                &copy; {new Date().getFullYear()} Impact Organization. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
