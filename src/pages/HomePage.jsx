import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedMetrics from '../components/TrustedMetrics';
import AwardWinningSection from '../components/AwardWinningSection';
import ServicesSection from '../components/ServicesSection';
import WorkingProcessSection from '../components/WorkingProcessSection';
import AboutLeadershipSection from '../components/AboutLeadershipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ContactCTA from '../components/ContactCTA';
import LocationMapSection from '../components/LocationMapSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedMetrics />
        <AboutLeadershipSection />
        <AwardWinningSection />
        <ServicesSection />
        <WorkingProcessSection />
        
        <TestimonialsSection />
        <FaqSection />
        <ContactCTA />
        <LocationMapSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
