'use client';

import { useEffect, useRef } from 'react';

/**
 * CircuitPulse — pulserande ström över kretskortsbilden.
 *
 * Två lägen:
 *  - Standard:      <CircuitPulse src="/cyberjs-clean.jpg" />
 *                   Egen sektion som behåller bildens 1376x768-format.
 *  - Fill (hero):   <CircuitPulse src="/cyberjs-clean.jpg" fill />
 *                   Fyller sin förälder (position:relative krävs på föräldern),
 *                   bilden beskärs som object-cover och pulserna följer med korrekt.
 *
 * Premium-beteende:
 *  - IntersectionObserver: animerar bara när den syns, power-on-våg från mitten
 *  - Respekterar prefers-reduced-motion (bilden visas alltid, pulserna stängs av)
 */

type PathDef = {
  pts: [number, number][];
  color: 'blue' | 'gold';
  speed: number;
  every: number;
  wake: number;
};

const IW = 1376;
const IH = 768;

const PATHS: PathDef[] = [
  // Central vertikal trunk — vaknar först
  { pts: [[688, -20], [688, 150], [688, 265]], color: 'blue', speed: 220, every: 1.4, wake: 0 },
  { pts: [[688, 520], [688, 650], [688, 790]], color: 'blue', speed: 220, every: 1.8, wake: 0.15 },
  // Diamanten runt N-loggan
  { pts: [[688, 265], [560, 390], [688, 520]], color: 'blue', speed: 180, every: 2.2, wake: 0.3 },
  { pts: [[688, 265], [815, 390], [688, 520]], color: 'blue', speed: 180, every: 2.6, wake: 0.3 },
  // Dataström till serverblocket uppe till höger
  { pts: [[780, 350], [860, 310], [950, 262], [1020, 222]], color: 'blue', speed: 260, every: 1.1, wake: 0.6 },
  { pts: [[790, 375], [880, 335], [965, 290], [1035, 250]], color: 'blue', speed: 240, every: 1.5, wake: 0.75 },
  // Diagonaler — vaknar utåt från mitten
  { pts: [[575, 330], [440, 255], [300, 175], [120, 80]], color: 'gold', speed: 150, every: 3.0, wake: 1.0 },
  { pts: [[585, 465], [440, 565], [280, 655], [120, 735]], color: 'gold', speed: 150, every: 3.4, wake: 1.1 },
  { pts: [[800, 465], [950, 558], [1110, 645], [1280, 730]], color: 'gold', speed: 150, every: 3.2, wake: 1.2 },
  { pts: [[830, 300], [960, 300], [1060, 330], [1130, 360]], color: 'gold', speed: 130, every: 4.0, wake: 1.3 },
  // Ytterkanter — sist
  { pts: [[-20, 300], [180, 300], [260, 340]], color: 'gold', speed: 120, every: 4.5, wake: 1.6 },
  { pts: [[-20, 560], [160, 560], [240, 520]], color: 'gold', speed: 120, every: 5.0, wake: 1.7 },
  { pts: [[1396, 470], [1240, 470], [1180, 440]], color: 'gold', speed: 120, every: 4.2, wake: 1.8 },
  { pts: [[1396, 60], [1280, 90], [1180, 130]], color: 'blue', speed: 200, every: 2.8, wake: 1.9 },
];

const COLORS = {
  blue: { core: 'rgba(160,200,255,', glow: 'rgba(61,123,255,' },
  gold: { core: 'rgba(255,235,190,', glow: 'rgba(201,163,92,' },
} as const;

type Pulse = { pathIndex: number; dist: number; trail: number };

interface CircuitPulseProps {
  src: string;
  alt?: string;
  className?: string;
  /** true = fyll föräldern (hero-bakgrund), bilden croppas som object-cover */
  fill?: boolean;
}

export default function CircuitPulse({
  src,
  alt = 'SweGBG Trading — Next.js circuit board',
  className = '',
  fill = false,
}: CircuitPulseProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const paths = PATHS.map((p) => {
      const segs: number[] = [];
      let total = 0;
      for (let i = 0; i < p.pts.length - 1; i++) {
        const len = Math.hypot(
          p.pts[i + 1][0] - p.pts[i][0],
          p.pts[i + 1][1] - p.pts[i][1]
        );
        segs.push(len);
        total += len;
      }
      return { ...p, segs, total, timer: 0 };
    });

    const pointAt = (p: (typeof paths)[number], dist: number): [number, number] => {
      let d = dist;
      for (let i = 0; i < p.segs.length; i++) {
        if (d <= p.segs[i]) {
          const t = d / p.segs[i];
          return [
            p.pts[i][0] + (p.pts[i + 1][0] - p.pts[i][0]) * t,
            p.pts[i][1] + (p.pts[i + 1][1] - p.pts[i][1]) * t,
          ];
        }
        d -= p.segs[i];
      }
      return p.pts[p.pts.length - 1];
    };

    let pulses: Pulse[] = [];
    let raf = 0;
    let last = 0;
    let running = false;
    let elapsed = 0;

    // Cover-transform: samma matematik som CSS object-cover / background-size: cover
    let tScale = 1;
    let tX = 0;
    let tY = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      // Cover: skala så bilden täcker hela ytan, centrera överskottet
      tScale = Math.max(canvas.width / IW, canvas.height / IH);
      tX = (canvas.width - IW * tScale) / 2;
      tY = (canvas.height - IH * tScale) / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const frame = (now: number) => {
      if (!running) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now;
      elapsed += dt;

      paths.forEach((p, idx) => {
        if (elapsed < p.wake) return;
        p.timer -= dt;
        if (p.timer <= 0) {
          p.timer = p.every * (0.7 + Math.random() * 0.6);
          pulses.push({ pathIndex: idx, dist: 0, trail: 55 + Math.random() * 35 });
        }
      });

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(tScale, 0, 0, tScale, tX, tY);
      ctx.globalCompositeOperation = 'lighter';

      pulses = pulses.filter((pl) => {
        const p = paths[pl.pathIndex];
        pl.dist += p.speed * dt;
        if (pl.dist > p.total + pl.trail) return false;

        const c = COLORS[p.color];
        const STEPS = 14;
        for (let i = 0; i < STEPS; i++) {
          const d = pl.dist - (i / STEPS) * pl.trail;
          if (d < 0 || d > p.total) continue;
          const [x, y] = pointAt(p, d);
          const fade = 1 - i / STEPS;

          const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
          g.addColorStop(0, `${c.glow}${0.35 * fade})`);
          g.addColorStop(1, `${c.glow}0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, 16, 0, Math.PI * 2);
          ctx.fill();

          if (i < 4) {
            ctx.fillStyle = `${c.core}${0.9 * fade})`;
            ctx.beginPath();
            ctx.arc(x, y, 2.5 * fade + 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        return true;
      });

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
          elapsed = 0;
          pulses = [];
          paths.forEach((p) => (p.timer = 0));
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(wrap);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={
        fill
          ? `absolute inset-0 overflow-hidden ${className}`
          : `relative w-full overflow-hidden ${className}`
      }
      style={fill ? undefined : { aspectRatio: `${IW} / ${IH}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full mix-blend-screen"
        aria-hidden="true"
      />
    </div>
  );
}
