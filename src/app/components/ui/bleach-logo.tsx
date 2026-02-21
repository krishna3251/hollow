import { motion } from "motion/react";

export function BleachLogo({ className }: { className?: string }) {
    return (
        <div className={className}>
            <svg viewBox="0 0 600 100" className="w-full h-full">
                <defs>
                    <filter id="displacement" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <mask id="textMask">
                        <text x="50" y="75" fontFamily="'Rajdhani', sans-serif" fontSize="80" fontWeight="bold" fill="white" letterSpacing="10">HOLLOW</text>
                        <text x="450" y="75" fontFamily="'Rajdhani', sans-serif" fontSize="80" fontWeight="bold" fill="white" letterSpacing="10">HQ</text>
                    </mask>
                </defs>

                {/* Main Text with Rough Edge */}
                <text
                    x="50"
                    y="75"
                    fontFamily="'Rajdhani', sans-serif"
                    fontSize="80"
                    fontWeight="bold"
                    fill="white"
                    letterSpacing="10"
                >
                    HOLLOW
                </text>
                <text
                    x="450"
                    y="75"
                    fontFamily="'Rajdhani', sans-serif"
                    fontSize="80"
                    fontWeight="bold"
                    fill="white"
                    letterSpacing="10"
                >
                    HQ
                </text>

                {/* Spiritual Pressure Glitch Effects */}
                <motion.path
                    d="M40 85 L360 85"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="10 20"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
