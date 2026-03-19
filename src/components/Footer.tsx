export default function Footer() {
    return (
        <footer className="relative bg-black pt-32 pb-16 px-8 md:px-24 overflow-hidden border-t border-white/10">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-24">
                <div className="max-w-xl">
                    <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase text-white">Let&apos;s <span className="text-emerald-400 italic font-light">Connect</span></h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    <a href="mailto:mjroshanackthar@gmail.com" className="inline-block mt-12 text-2xl md:text-4xl font-semibold border-b-2 border-emerald-400 pb-2 hover:text-emerald-400 transition-colors">
                        mjroshanackthar@gmail.com
                    </a>
                </div>

                <div className="flex flex-col gap-6 text-xl text-neutral-400 uppercase tracking-widest font-semibold flex-shrink-0">
                    <a href="https://www.linkedin.com/in/m-j-roshan-ackthar-b43739268/" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-4 transition-colors">
                        LinkedIn <span className="text-sm">↗</span>
                    </a>
                    <a href="https://github.com/mjroshanackthar" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-4 transition-colors">
                        GitHub <span className="text-sm">↗</span>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 gap-4">
                <p>&copy; {new Date().getFullYear()} M J Roshan Ackthar. All rights reserved.</p>
                <p className="flex items-center gap-2">Built with <span className="text-white">Next.js 14</span> & <span className="text-white">Framer Motion</span></p>
                <div className="flex gap-4">
                    <a href="#top" className="uppercase tracking-widest font-semibold hover:text-white transition-colors">Back to top</a>
                </div>
            </div>
        </footer>
    );
}
