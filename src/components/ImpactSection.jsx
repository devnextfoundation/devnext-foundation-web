import React from 'react';

const ImpactCard = ({ number, label, description, image, color }) => {
    const bgColors = {
        green: 'bg-brand-green/10 border-brand-green/20',
        yellow: 'bg-brand-yellow/10 border-brand-yellow/20',
        cyan: 'bg-brand-cyan/10 border-brand-cyan/20',
    };

    return (
        <div className={`rounded-3xl overflow-hidden border bg-yellow ${bgColors[color]} group transition-all duration-300 hover:shadow-xl`}>
            <div className="h-64 overflow-hidden relative">
                <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-4xl font-bold mb-1">{number}</h3>
                    <p className="text-lg font-semibold">{label}</p>
                </div>
            </div>
            <div className="p-6">
                <p className="text-brand-gray">{description}</p>
            </div>
        </div>
    );
};

const ImpactSection = () => {
    const impacts = [
        {
            number: '10+',
            label: 'Partner Schools',
            description: 'Schools collaborating to deliver Dev Next Foundation programs.',
            image: '/assets/patnerd-schools-image.png',
            color: 'green'
        },
        {
            number: '300+',
            label: 'Students Reached',
            description: 'Learners actively participating in skills-based education.',
            image: '/assets/students-reached-image.png',
            color: 'yellow'
        },
        {
            number: '5+',
            label: 'Programs Delivered',
            description: 'Structured learning programs implemented in schools.',
            image: '/assets/programmes-delivered-image.png',
            color: 'cyan'
        }
    ];

    return (
        <section id="impact" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 text-brand-green font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            <span>Our Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                            Impact Through School Partnerships
                        </h2>
                    </div>
                    <p className="text-brand-gray max-w-sm text-lg">
                        We work with schools to deliver structured programs that equip students
                        with practical, future-ready skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impacts.map((impact, index) => (
                        <ImpactCard key={index} {...impact} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
