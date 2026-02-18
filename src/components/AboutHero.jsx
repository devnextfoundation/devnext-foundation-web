import React from 'react';
import SectionLabel from './SectionLabel';

const AboutHero = () => {
    return (
        <section className="bg-[#05192D] pt-36 pb-20 px-4 lg:px-8">
            <div className="container mx-auto">
                <SectionLabel className="mb-6 text-white [&>span:last-child]:text-white">
                    About DNF
                </SectionLabel>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mt-4">
                    Driven By Purpose<br />And Impact
                </h1>
                <p className="text-gray-400 mt-6 max-w-md text-lg leading-relaxed">
                    Your support powers life-changing missions, communities and hope.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
