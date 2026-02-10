import React from 'react';
import Button from './Button';

const GetInvolved = () => {
    return (
        <section className="py-20 bg-brand-yellow relative overflow-hidden">
            {/* Grid Pattern Background - simplified for now */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-brand-navy font-semibold text-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand-navy inline-block mr-2"></span>
                    Get Involved
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-navy max-w-4xl mx-auto">
                    Your Support Makes Growth Possible
                </h3>

                <p className="text-lg text-brand-navy/80 mb-10 max-w-2xl mx-auto">
                    Whether through volunteering, donating, or partnering with us, your involvement
                    helps schools expand access to skills and learning for young people.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button variant="white" size="lg">Volunteer With Us</Button>
                    <Button variant="primary" size="lg">Donate Now</Button>
                </div>

                {/* Floating Image */}
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl transform translate-y-20">
                    <img
                        src="/assets/get-involved-image.png"
                        alt="Children collaborating"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
