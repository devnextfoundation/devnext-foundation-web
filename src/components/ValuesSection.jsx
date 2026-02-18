import React from 'react';
import SectionLabel from './SectionLabel';

const valueItems = [
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        title: 'School-Centered Learning',
        description: 'Programs designed to fit seamlessly into school environments and support existing learning goals.',
        color: 'bg-[#E8F5EE] text-[#25955A]',
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Practical Skill Building',
        description: 'Hands-on digital and technical skills that prepare students for real-world opportunities.',
        color: 'bg-[#FEF3CD] text-[#D79C14]',
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Access Through Partnership',
        description: 'Expanding learning access by working closely with schools and communities.',
        color: 'bg-[#E0F4F5] text-[#2F8588]',
    },
];

const ValuesSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <SectionLabel className="mb-4">Our Values</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mt-4">
                            What Guides Our Work<br />With Schools
                        </h2>
                    </div>
                    <p className="text-brand-gray max-w-sm text-lg">
                        Our values shape how we design programs, partner with schools, and support
                        student learning. They keep our work focused, practical, and impactful.
                    </p>
                </div>

                {/* Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valueItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F9FAFB] rounded-3xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                            <p className="text-brand-gray leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
