import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Mission */}
                    <div className="space-y-6">
                        <img src="/assets/DNF-logo.svg" alt="DNF Logo" className="h-10 brightness-0 invert" />
                        <p className="text-gray-400 max-w-xs">
                            Preparing young people with practical digital and technical skills for a confident future.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-brand-green transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-white hover:text-brand-green transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-white hover:text-brand-green transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-white hover:text-brand-green transition-colors"><FaWhatsapp size={20} /></a>
                            <a href="#" className="text-white hover:text-brand-green transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About DNF</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
                            <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Other Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Register your school</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>Email: enquiry@dnf.com</li>
                            <li>Phone: +2347074511880</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {currentYear} Dev Next Foundation. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
