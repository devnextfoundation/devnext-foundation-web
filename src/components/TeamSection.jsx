import React from 'react';
import SectionLabel from './SectionLabel';

const teamMembers = [
    {
        name: 'Kyle Raw',
        role: 'Founder',
        image: '/assets/students-reached-image.png',
    },
    {
        name: 'Jane Smith',
        role: 'Co-Founder',
        image: '/assets/about-us-image.jpg',
    },
    {
        name: 'Lilly John',
        role: 'Community Coordinator',
        image: '/assets/patnerd-schools-image.png',
    },
    {
        name: 'Jane Smith',
        role: 'Co-Founder',
        image: '/assets/education-and-skill-development-image.png',
    },
    {
        name: 'Kyle Raw',
        role: 'Founder',
        image: '/assets/get-involved-image.png',
    },
    {
        name: 'Lilly John',
        role: 'Community Coordinator',
        image: '/assets/programmes-delivered-image.png',
    },
];

const TeamCard = ({ name, role, image }) => (
    <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[3/4]">
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Name & role */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="font-bold text-lg leading-tight">{name}</p>
            <p className="text-sm text-gray-300">{role}</p>
        </div>
    </div>
);

const TeamSection = () => {
    return (
        <section className="py-24 bg-[#F9FAFB]">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <SectionLabel className="mb-4">Our Team</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mt-4">
                            Educators and Program<br />Leaders
                        </h2>
                    </div>
                    <p className="text-brand-gray max-w-sm text-lg">
                        Our team includes educators, facilitators, and program coordinators
                        dedicated to delivering high-quality learning experiences in partnership
                        with schools.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
