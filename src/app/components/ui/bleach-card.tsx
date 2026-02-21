import { cn } from "./utils";
import { motion, HTMLMotionProps } from "motion/react";
import { GlowingEffect } from "./glowing-effect";

interface BleachCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    angled?: boolean;
    featured?: boolean;
}

function BleachCard({ children, className, angled = false, featured = false, ...props }: BleachCardProps) {
    return (
        <motion.div
            className={cn(
                "relative group",
                "transition-all duration-300",
                angled && "rotate-[-1deg] hover:rotate-0",
                className
            )}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            {...props}
        >
            {/* GlowingEffect border – mouse-tracking conic gradient */}
            <GlowingEffect
                spread={40}
                glow={false}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
            />

            {/* Background & Border Layer */}
            <div
                className={cn(
                    "absolute inset-0",
                    "border-2",
                    featured ? "bg-white border-black" : "bg-black border-white",
                    featured ? "shadow-[4px_4px_0px_0px] shadow-black" : "shadow-[4px_4px_0px_0px] shadow-white",
                    "transition-all duration-300",
                    "group-hover:translate-x-[-3px] group-hover:translate-y-[-3px]",
                    featured ? "group-hover:shadow-[7px_7px_0px_0px] group-hover:shadow-black" : "group-hover:shadow-[7px_7px_0px_0px] group-hover:shadow-white"
                )}
            />

            {/* Content Layer */}
            <div className={cn(
                "relative p-6 h-full",
                featured ? "text-black" : "text-white"
            )}>
                {children}
            </div>
        </motion.div>
    );
}

export { BleachCard };
