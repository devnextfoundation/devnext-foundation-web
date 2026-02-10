import React from 'react';
import Button from './Button';

const GetInvolved = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Grid Pattern Background - simplified for now */}
            {/* <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000000a5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div> */}

            <div className="container max-w-7xl h-full bg-brand-yellow bg-yellow-500 mx-auto px-4 text-center relative z-10">
                <div className="inline-block px-4 py-1 rounded-full text-black font-semibold text-sm mt-6">
                    <span className="w-2 h-2 rounded-full bg-brand-navy inline-block mr-2"></span>
                    Get Involved
                </div>

                <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-black mx-auto mt-6">
                    Your Support Makes Growth Possible
                </h3>

                <p className="text-lg text-black/80 mb-10 w-[50%] font-bold mx-auto mt-6">
                    Whether through volunteering, donating, or partnering with us, your involvement
                    helps schools expand access to skills and learning for young people.
                </p>

                <div className="flex border-2 border-brand-navy flex-col sm:flex-row items-center justify-center">
                    <Button variant="white" size="lg">Volunteer With Us</Button>
                    <Button variant="primary" className='bg-black px-4' size="lg">Donate Now</Button>
                </div>

                {/* Floating Image */}
                <div className="max-w-3xl border-2 border-brand-navy mx-auto mt-12">
                    <img
                        src="/assets/get-involved-image.png"
                        alt="Children collaborating"
                        className="w-full h-80 object-cover grayscale"
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
