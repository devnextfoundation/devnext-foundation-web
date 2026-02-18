import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import TrustedSupporters from '../components/TrustedSupporters';
import MissionVisionSection from '../components/MissionVisionSection';
import ValuesSection from '../components/ValuesSection';
import ImpactSection from '../components/ImpactSection';
import TeamSection from '../components/TeamSection';
import GetInvolved from '../components/GetInvolved';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-noto">
            <Header />
            <main>
                <AboutHero />
                <TrustedSupporters />
                {/* Who We Are — reuse the AboutSection content inline since it's a full-width block */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                                    Who We Are and<br />Why We Exist
                                </h2>
                                <p className="text-lg text-brand-gray leading-relaxed max-w-lg">
                                    Dev Next Foundation is a youth-centered nonprofit dedicated to closing
                                    the gap between education and real-world opportunity. We create access
                                    to practical digital and technical skills that help young people build
                                    confidence, capability, and long-term growth by working directly with
                                    schools to deliver practical digital and technical skills.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src="/assets/about-us-image.jpg"
                                        alt="Community work"
                                        className="w-full h-[420px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <MissionVisionSection />
                <ValuesSection />
                <ImpactSection />
                <TeamSection />
                <GetInvolved />
            </main>
            <Footer />
        </div>
    );
};

export default About;
