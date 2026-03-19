'use client';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-8 md:px-16 lg:px-24 py-6 bg-neutral-950/50 backdrop-blur-md border-b border-white/5 shadow-2xl"
        >
            <a href="#top" className="text-white font-black text-2xl tracking-tighter uppercase leading-none hover:opacity-80 transition-opacity">
                MJR<span className="text-emerald-400">.</span>
            </a>

            <nav className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-white">
                <a href="#toolkit" className="hover:text-emerald-400 focus:text-emerald-400 transition-colors duration-300">Toolkit</a>
                <a href="#experience" className="hover:text-emerald-400 focus:text-emerald-400 transition-colors duration-300">Experience</a>
                <a href="#works" className="hover:text-emerald-400 focus:text-emerald-400 transition-colors duration-300">Works</a>
            </nav>

            <a
                href="mailto:mjroshanackthar@gmail.com"
                className="hidden md:inline-block px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
                Start a Project
            </a>

            {/* Mobile Menu Icon Placeholder */}
            <div className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </div>
        </motion.header>
    );
}
