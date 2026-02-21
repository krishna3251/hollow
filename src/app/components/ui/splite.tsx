'use client'

import { Suspense, lazy, useRef, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const splineRef = useRef<any>(null);

    function onLoad(splineApp: any) {
        splineRef.current = splineApp;
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!splineRef.current) return;

            // Try to find the main object to rotate
            // Common names: 'Robot', 'Group', 'Scene', 'Character', 'Object'
            // Keep looking for specific names first
            let obj = splineRef.current.findObjectByName('Robot') ||
                splineRef.current.findObjectByName('Group') ||
                splineRef.current.findObjectByName('Shape');

            // Fallback: Use the first child of the scene if specific names fail
            if (!obj && splineRef.current._scene && splineRef.current._scene.children.length > 0) {
                // Find a group or object that isn't a camera/light if possible, or just the first child
                obj = splineRef.current._scene.children.find((c: any) => c.type === 'Group' || c.type === 'Mesh') || splineRef.current._scene.children[0];
            }

            if (obj) {
                // Normalize mouse position (-1 to 1)
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = (e.clientY / window.innerHeight) * 2 - 1;

                // Apply rotation
                // Y-axis rotation (Yaw) follows Mouse X
                // X-axis rotation (Pitch) follows Mouse Y
                // Sensitivity: 0.5 rad (approx 30 deg)
                obj.rotation.y += (x * 0.5 - obj.rotation.y) * 0.1; // Smooth interpolation
                obj.rotation.x += (y * 0.5 - obj.rotation.x) * 0.1;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
                onLoad={onLoad}
            />
        </Suspense>
    )
}
