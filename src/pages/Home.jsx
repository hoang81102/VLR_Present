import HeroSection from '../components/HeroSection';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Timeline from '../components/Timeline';
import SummaryFlashcards from '../components/SummaryFlashcards';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-slate-50 font-sans text-slate-900 selection:bg-rose-500/30 relative">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Timeline />
      <SummaryFlashcards />

      {/* Floating Action Button to Quiz */}
      <Link to="/quiz" className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-6 py-4 rounded-full font-black text-xl shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-2 border-white/20">
        <ClipboardList size={28} />
        Làm Trắc Nghiệm Ngay
      </Link>
    </div>
  )
}
