import React from 'react';
import Button from './Button';

const ProgramsSection = () => {
    return (
        <section id="programs" className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 text-brand-green font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            <span>Programs</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                            Learning Pathways That<br />Create Opportunity
                        </h2>
                    </div>
                    <p className="text-brand-gray max-w-sm text-lg">
                        Our programs combine education, mentorship, and hands-on experience
                        to help young people develop skills that matter.
                    </p>
                </div>

                {/* Program Feature */}
                <div className="bg-[#F9FAFB] rounded-[3rem] p-8 lg:p-12 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="/assets/education-and-skill-development-image.png"
                                alt="Tech4Teen students"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1 rounded-full border border-brand-yellow text-brand-yellow font-semibold text-sm">
                                Education & Skills Development
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-brand-navy">Tech4Teen</h3>
                            <p className="text-lg text-brand-gray leading-relaxed">
                                Tech4Teen introduces young learners to digital tools, technology concepts,
                                and problem-solving skills that prepare them for future careers.
                            </p>
                            <Button variant="outline">Learn More &rarr;</Button>
                        </div>
                    </div>
                </div>

                {/* Slider Controls Placeholder */}
                <div className="mt-12 flex items-center justify-between">
                    <div className="flex space-x-4">
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-navy hover:text-brand-navy transition-all">
                            &larr;
                        </button>
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                        </div>
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-navy hover:text-brand-navy transition-all">
                            &rarr;
                        </button>
                    </div>
                    <a href="#" className="text-brand-navy font-bold hover:underline">Explore Program &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
