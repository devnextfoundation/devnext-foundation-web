import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ImpactSection from '../components/ImpactSection';
import ProgramsSection from '../components/ProgramsSection';
import GetInvolved from '../components/GetInvolved';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-noto">
            <Header />
            <main>
                <Hero />
                <AboutSection />
                <ImpactSection />
                <ProgramsSection />
                <GetInvolved />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
