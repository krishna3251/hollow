import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorGlow() {
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);

    const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Large ambient glow */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    width: 400,
                    height: 400,
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }}
            />
            {/* Tight cursor dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    width: 8,
                    height: 8,
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'rgba(255,255,255,0.9)',
                    boxShadow: '0 0 12px 4px rgba(255,255,255,0.5)',
                }}
            />
        </>
    );
}
