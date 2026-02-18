import React from 'react';
import SectionLabel from './SectionLabel';

const MissionVisionSection = () => {
    return (
        <>
            {/* Mission Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text */}
                        <div className="lg:w-1/2 space-y-6">
                            <SectionLabel>Our Mission</SectionLabel>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                                Connecting Education to<br />Real-World Skills
                            </h2>
                            <p className="text-lg text-brand-gray leading-relaxed max-w-lg">
                                Our mission is to support schools in equipping students with practical
                                digital and technical skills. Through structured programs, we help
                                learners build confidence, problem-solving ability, and awareness of
                                future pathways.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="lg:w-1/2">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                                <img
                                    src="/assets/about-us-image.jpg"
                                    alt="Students learning digital skills"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        {/* Text */}
                        <div className="lg:w-1/2 space-y-6">
                            <SectionLabel>Our Vision</SectionLabel>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                                From Classroom to<br />Future Opportunity
                            </h2>
                            <p className="text-lg text-brand-gray leading-relaxed max-w-lg">
                                We envision schools as launch points for future-ready learners.
                                Students graduate with skills, clarity, and confidence to navigate
                                further education, careers, and lifelong learning.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="lg:w-1/2">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                                <img
                                    src="/assets/education-and-skill-development-image.png"
                                    alt="Students in a classroom"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MissionVisionSection;
