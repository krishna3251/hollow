import { Outlet } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SplineScene } from "./components/ui/splite";
import { CursorGlow } from "./components/CursorGlow";

export function Layout() {

    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans text-foreground selection:bg-purple-500/30">

            {/* Custom cursor glow */}
            <CursorGlow />

            {/* --- Global Background Layer (Z-0) --- */}
            <div className="fixed inset-0 z-0">

                {/* 1. Spline 3D Scene (Base Layer) */}
                <div className="absolute inset-0 z-10">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>

                {/* 2. Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />

                {/* 3. Floating Particles */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                    <AnimatedBackground />
                </div>

                {/* 4. Scanline overlay for premium CRT effect */}
                <div
                    className="absolute inset-0 z-40 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
                        backgroundSize: '100% 3px',
                    }}
                />

                {/* 5. Vignette */}
                <div
                    className="absolute inset-0 z-50 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)',
                    }}
                />
            </div>

            {/* --- Page Content (Z-10) --- */}
            <div className="relative z-10 w-full min-h-screen pointer-events-none flex flex-col">
                <Outlet />
            </div>

        </div>
    );
}
