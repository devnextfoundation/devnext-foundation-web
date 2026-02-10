import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About DNF', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Programs', href: '#programs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/assets/DNF-logo.svg" alt="DevNext Foundation" className="h-8 lg:h-10" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-text font-medium hover:text-brand-navy transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <Button variant="outline" size="sm">Volunteer</Button>
                        <Button variant="primary" size="sm">Donate Now</Button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-brand-text p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-brand-text font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-4 pt-4">
                        <Button variant="outline" className="w-full">Volunteer</Button>
                        <Button variant="primary" className="w-full">Donate Now</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
