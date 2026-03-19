'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const FRAME_COUNT = 120; // 120 extracted frames

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(4, '0');
            img.src = `/sequence/${frameNum}.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    if (canvasRef.current) {
                        const ctx = canvasRef.current.getContext('2d');
                        if (ctx && loadedImages[0]) {
                            drawCover(ctx, loadedImages[0], canvasRef.current.width, canvasRef.current.height);
                        }
                    }
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const currentIndexRef = useRef(0);

    const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
        const imgRatio = img.width / img.height;
        const canvasRatio = w / h;
        let renderW, renderH, x, y;

        if (imgRatio < canvasRatio) {
            renderW = w;
            renderH = w / imgRatio;
            x = 0;
            y = (h - renderH) / 2;
        } else {
            renderH = h;
            renderW = h * imgRatio;
            y = 0;
            x = (w - renderW) / 2;
        }
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, x, y, renderW, renderH);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                    ctx.scale(dpr, dpr);
                    if (images[currentIndexRef.current]) {
                        drawCover(ctx, images[currentIndexRef.current], window.innerWidth, window.innerHeight);
                    }
                }
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]);

    const { scrollY } = useScroll();

    // We map 3500px of scrolling down to our 120 frame sequence.
    // The canvas is fixed, so the GIF always stays in view and simply stops on the final frame once we scroll past 3500px.
    const scrollDistanceForSequence = 3500;
    const frameIndex = useTransform(scrollY, [0, scrollDistanceForSequence], [0, FRAME_COUNT - 1], { clamp: true });
    const progress = useTransform(scrollY, [0, scrollDistanceForSequence], [0, 1], { clamp: true });

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        const idx = Math.floor(latest);
        if (idx !== currentIndexRef.current && images[idx]) {
            currentIndexRef.current = idx;
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    drawCover(ctx, images[idx], window.innerWidth, window.innerHeight);
                }
            }
        }
    });

    return (
        <div className="fixed inset-0 z-0 bg-neutral-950 flex items-center justify-center pointer-events-none">
            {/* The canvas layer */}
            <canvas ref={canvasRef} className="w-full h-full block absolute inset-0 opacity-80 mix-blend-lighten" />

            {/* A bottom gradient shadow to help transition to the actual standard DOM content when it slides over */}
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-0" />

            {/* Parallax Overlay */}
            <div className="absolute inset-0">
                <Overlay progress={progress} />
            </div>
        </div>
    );
}
