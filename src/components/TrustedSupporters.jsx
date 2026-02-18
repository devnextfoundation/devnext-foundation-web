import React from 'react';

// Trusted supporter logos - using text/SVG placeholders styled like the design
const supporters = [
    { name: 'Webflow', icon: '🌐' },
    { name: 'Webflow', icon: '🌐' },
    { name: 'Relume', icon: '⬡' },
    { name: 'Webflow', icon: '🌐' },
    { name: 'Relume', icon: '⬡' },
    { name: 'Webflow', icon: '🌐' },
    { name: 'Relume', icon: '⬡' },
];

const SupporterLogo = ({ name }) => (
    <div className="flex items-center space-x-2 text-gray-500 font-semibold text-lg whitespace-nowrap px-6">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{name}</span>
    </div>
);

const TrustedSupporters = () => {
    const logos = [...supporters, ...supporters]; // duplicate for seamless loop

    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 mb-6">
                <div className="inline-flex items-center space-x-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></span>
                    <span className="text-black">Our Trusted Supporters</span>
                </div>
            </div>
            {/* Marquee scroll */}
            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee">
                    {logos.map((s, i) => (
                        <SupporterLogo key={i} name={s.name} />
                    ))}
                </div>
                <div className="flex animate-marquee" aria-hidden="true">
                    {logos.map((s, i) => (
                        <SupporterLogo key={`dup-${i}`} name={s.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedSupporters;
