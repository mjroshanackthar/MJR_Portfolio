'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
    // 0% -> center
    const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.2], [0, -100]);

    // 30% -> left
    const opacity2 = useTransform(progress, [0.2, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
    const x2 = useTransform(progress, [0.2, 0.25], [-100, 0]);

    // 60% -> right
    const opacity3 = useTransform(progress, [0.55, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const x3 = useTransform(progress, [0.55, 0.6], [100, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center text-white p-8 md:p-24 overflow-hidden">
            {/* Section 1 */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 drop-shadow-2xl">
                    M J Roshan Ackthar
                </h1>
                <p className="mt-4 text-2xl md:text-4xl font-light text-neutral-300 tracking-wide">
                    Junior Java <span className="text-blue-400">&</span> Full Stack Developer.
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div style={{ opacity: opacity2, x: x2 }} className="absolute inset-0 flex flex-col items-start justify-center text-left w-full h-full p-8 md:p-24">
                <h2 className="text-5xl md:text-8xl font-bold max-w-3xl leading-tight text-white drop-shadow-xl">
                    I build scalable <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        backend systems
                    </span>.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div style={{ opacity: opacity3, x: x3 }} className="absolute inset-0 flex flex-col items-end justify-center text-right w-full h-full p-8 md:p-24">
                <h2 className="text-5xl md:text-8xl font-bold max-w-4xl leading-tight text-white drop-shadow-xl">
                    Bridging <span className="italic font-light text-neutral-400">clean code</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-600">
                        & architecture.
                    </span>
                </h2>
            </motion.div>
        </div>
    );
}
