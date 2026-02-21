"use client";

import { useEffect, useRef, useCallback } from "react";

interface Vector2D {
  x: number;
  y: number;
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };
  // Original resting text position
  home: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 100;
  maxSpeed = 1.0;
  maxForce = 0.1;
  particleSize = 10;
  isKilled = false;

  startColor = { r: 255, g: 255, b: 255 };
  targetColor = { r: 255, g: 255, b: 255 };
  colorWeight = 1;
  colorBlendRate = 0.015;

  move() {
    let proximityMult = 1;
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) +
        Math.pow(this.pos.y - this.target.y, 2)
    );
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };
    const mag = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y
    );
    if (mag > 0) {
      towardsTarget.x = (towardsTarget.x / mag) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / mag) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };
    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMag > 0) {
      steer.x = (steer.x / steerMag) * this.maxForce;
      steer.y = (steer.y / steerMag) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }
    const r = Math.round(
      this.startColor.r +
        (this.targetColor.r - this.startColor.r) * this.colorWeight
    );
    const g = Math.round(
      this.startColor.g +
        (this.targetColor.g - this.startColor.g) * this.colorWeight
    );
    const b = Math.round(
      this.startColor.b +
        (this.targetColor.b - this.startColor.b) * this.colorWeight
    );
    const alpha = 0.7 + 0.3 * this.colorWeight;
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const cx = width / 2;
      const cy = height / 2;
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const dx = rx - cx;
      const dy = ry - cy;
      const m = Math.sqrt(dx * dx + dy * dy) || 1;
      const dist = (width + height) / 2;
      this.target.x = cx + (dx / m) * dist;
      this.target.y = cy + (dy / m) * dist;

      this.startColor = {
        r: Math.round(
          this.startColor.r +
            (this.targetColor.r - this.startColor.r) * this.colorWeight
        ),
        g: Math.round(
          this.startColor.g +
            (this.targetColor.g - this.startColor.g) * this.colorWeight
        ),
        b: Math.round(
          this.startColor.b +
            (this.targetColor.b - this.startColor.b) * this.colorWeight
        ),
      };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }
}

interface ParticleTextEffectProps {
  words?: string[];
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  pixelSteps?: number;
  cycleInterval?: number;
  /** Radius around cursor that repels particles */
  repelRadius?: number;
  /** How strongly particles are pushed away */
  repelStrength?: number;
  className?: string;
}

export function ParticleTextEffect({
  words = ["HOLLOW HQ"],
  width = 1000,
  height = 260,
  fontSize = 120,
  fontFamily = "Rajdhani, sans-serif",
  pixelSteps = 5,
  cycleInterval = 0,
  repelRadius = 80,
  repelStrength = 8,
  className,
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });

  const generateRandomPos = useCallback(
    (cx: number, cy: number, w: number, h: number): Vector2D => {
      const rx = Math.random() * w;
      const ry = Math.random() * h;
      const dx = rx - cx;
      const dy = ry - cy;
      const mag = Math.sqrt(dx * dx + dy * dy) || 1;
      const dist = (w + h) / 2;
      return { x: cx + (dx / mag) * dist, y: cy + (dy / mag) * dist };
    },
    []
  );

  const renderWord = useCallback(
    (word: string, canvas: HTMLCanvasElement) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const octx = offscreen.getContext("2d")!;

      octx.fillStyle = "white";
      octx.font = `bold ${fontSize}px ${fontFamily}`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(word, canvas.width / 2, canvas.height / 2);

      const imageData = octx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      const particles = particlesRef.current;
      let particleIndex = 0;

      const coordIndexes: number[] = [];
      for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
        coordIndexes.push(i);
      }
      for (let i = coordIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coordIndexes[i], coordIndexes[j]] = [coordIndexes[j], coordIndexes[i]];
      }

      for (const ci of coordIndexes) {
        if (pixels[ci + 3] > 0) {
          const x = (ci / 4) % canvas.width;
          const y = Math.floor(ci / 4 / canvas.width);

          let p: Particle;
          if (particleIndex < particles.length) {
            p = particles[particleIndex];
            p.isKilled = false;
            particleIndex++;
          } else {
            p = new Particle();
            const rp = generateRandomPos(
              canvas.width / 2,
              canvas.height / 2,
              canvas.width,
              canvas.height
            );
            p.pos.x = rp.x;
            p.pos.y = rp.y;
            p.maxSpeed = Math.random() * 6 + 4;
            p.maxForce = p.maxSpeed * 0.05;
            p.particleSize = Math.random() * 4 + 4;
            p.colorBlendRate = Math.random() * 0.025 + 0.005;
            particles.push(p);
          }

          p.startColor = {
            r: Math.round(
              p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight
            ),
            g: Math.round(
              p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight
            ),
            b: Math.round(
              p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight
            ),
          };
          const tint = Math.random();
          if (tint > 0.85) {
            p.targetColor = { r: 180, g: 200, b: 255 };
          } else if (tint > 0.7) {
            p.targetColor = { r: 220, g: 220, b: 220 };
          } else {
            p.targetColor = { r: 255, g: 255, b: 255 };
          }
          p.colorWeight = 0;

          p.target.x = x;
          p.target.y = y;
          // Store home position so particles snap back after repulsion
          p.home.x = x;
          p.home.y = y;
        }
      }

      for (let i = particleIndex; i < particles.length; i++) {
        particles[i].kill(canvas.width, canvas.height);
      }
    },
    [fontSize, fontFamily, pixelSteps, generateRandomPos]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    renderWord(words[0], canvas);

    const animate = () => {
      const ctx = canvas.getContext("2d")!;
      const particles = particlesRef.current;
      const { x: mx, y: my, inside } = mouseRef.current;

        // Clear to transparent each frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Apply repulsion from mouse when hovering, restore home when not
        if (!p.isKilled) {
          if (inside) {
            const dx = p.pos.x - mx;
            const dy = p.pos.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repelRadius && dist > 0) {
              // Push particle away from cursor
              const force = (repelRadius - dist) / repelRadius;
              const nx = dx / dist;
              const ny = dy / dist;
              p.target.x = p.home.x + nx * repelRadius * force * repelStrength * 0.6;
              p.target.y = p.home.y + ny * repelRadius * force * repelStrength * 0.6;
            } else {
              // Outside repel radius — drift back home
              p.target.x = p.home.x;
              p.target.y = p.home.y;
            }
          } else {
            // Mouse left canvas — return home
            p.target.x = p.home.x;
            p.target.y = p.home.y;
          }
        }

        p.move();
        p.draw(ctx);

        if (
          p.isKilled &&
          (p.pos.x < -50 ||
            p.pos.x > canvas.width + 50 ||
            p.pos.y < -50 ||
            p.pos.y > canvas.height + 50)
        ) {
          particles.splice(i, 1);
        }
      }

      if (cycleInterval > 0) {
        frameCountRef.current++;
        const framesPerCycle = Math.round(cycleInterval * 60);
        if (frameCountRef.current % framesPerCycle === 0) {
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          renderWord(words[wordIndexRef.current], canvas);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Scale from CSS pixels to canvas logical pixels
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseRef.current.x = (e.clientX - rect.left) * scaleX;
      mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    };
    const handleMouseEnter = () => {
      mouseRef.current.inside = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.inside = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [width, height, words, cycleInterval, repelRadius, repelStrength, renderWord]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto", display: "block", cursor: "none" }}
    />
  );
}
