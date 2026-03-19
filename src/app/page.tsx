import Header from '@/components/Header';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="top" className="bg-neutral-950 min-h-screen text-white overflow-x-hidden selection:bg-emerald-500/30">
      <Header />

      <ScrollyCanvas />

      {/* Spacer forcing the page to scroll so Framer Motion maps it to the Canvas context. */}
      <div style={{ height: '3500px' }} className="w-full relative z-0 pointer-events-none" />

      {/* Standard content glides beautifully over the fixed canvas when you reach 3500px */}
      <div className="relative z-10 bg-neutral-950 rounded-t-[4rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
