import React from 'react';
import Button from './Button';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-[#F1F7FF] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8 animate-fade-in">
                        <div className="inline-flex items-center space-x-2 text-brand-green font-semibold">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            <span>About DNF</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
                            Who We Are and Why We Exist
                        </h2>
                        <p className="text-lg text-brand-gray-700 max-w-lg leading-relaxed">
                            Dev Next Foundation is a youth-centered nonprofit dedicated to closing
                            the gap between education and real-world opportunity. We create access
                            to practical digital and technical skills that help young people build
                            confidence, capability, and long-term growth by working directly with
                            schools to deliver practical digital and technical skills.
                        </p>
                        <Button variant="outline" size="md">Learn More &rarr;</Button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            <img
                                src="/assets/about-us-image.jpg"
                                alt="Community work"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
