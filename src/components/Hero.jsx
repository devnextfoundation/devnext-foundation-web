import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-bg-image.jpg"
                    alt="Children in classroom"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/90"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
                <div className="max-w-3xl">
                    <p className="text-lg md:text-xl font-medium mb-4 text-brand-green">
                        Empowering the Next Generation
                    </p>
                    <h2 className="text-2xl font-black mb-8 leading-tight text-white">
                        Digital Skills.<br />
                        Real-World Solutions.
                    </h2>
                    <p className="text-lg text-gray-200 mb-10 max-w-xl">
                        Dev Next Foundation partners with schools, communities, and organizations
                        to deliver digital education programs and develop technology-driven
                        solutions for lasting impact.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button variant="secondary" size="lg">Partner With Us &rarr;</Button>
                        <Button variant="white" size="lg">Explore Our Work &rarr;</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
