import React from 'react';

const ImpactCard = ({ number, label, description, image, color }) => {
    const bgColors = {
        green: 'bg-[#25955A]',
        yellow: 'bg-[#D79C14]',
        cyan: 'bg-[#2F8588]',
    };

    return (
        <div className={`${bgColors[color]} rounded-[2rem] overflow-hidden relative h-[360px] p-6 text-white group transition-all duration-300 hover:shadow-xl`}>
            
            <img
                src={image}
                alt={label}
                className="absolute bottom-0 left-0 w-auto h-2/3 object-contain object-bottom grayscale contrast-125 scale-[1.2] group-hover:scale-[1.30] origin-bottom-left transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 text-white z-10 pointer-events-none ml-3">
                <h3 className="text-4xl font-bold mb-1">{number}</h3>
                <p className="text-lg font-semibold">{label}</p>
                <p className="text-sm font-medium leading-relaxed max-w-[240px] opacity-90">
                    {description}
                </p>
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
                    <p className="text-brand-gray-700 max-w-sm text-lg">
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
