import { motion, useInView } from 'motion/react';
import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';

import { PageTransition } from '../components/PageTransition';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { BleachCard } from '../components/ui/bleach-card';
import { BleachLogo } from '../components/ui/bleach-logo';
import { GlowingEffect } from '../components/ui/glowing-effect';
import svgPaths from "../../imports/svg-8rzah5ub0f";

const DISCORD_INVITE = 'https://discord.gg/UPw2TwzhN6';

// Animated number counter
function AnimatedCounter({ target, duration = 1.5 }: { target: string | number; duration?: number }) {
  const [display, setDisplay] = useState('...');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(String(target).replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setDisplay(String(target)); return; }

    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      // Preserve original format
      const formatted = String(target).replace(/[0-9.]+/, String(current));
      setDisplay(formatted);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

function AnimatedNavLink({ children, isActive, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer relative px-2 pb-1 ${isActive ? 'text-white' : 'text-zinc-500'}`}
      whileHover={{ y: -2, color: '#ffffff' }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-white"
          layoutId="activeStatsNav"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      )}
    </motion.div>
  );
}

export function Stats() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);

      async function loadStats() {
        try {
          const res = await fetch("https://lexus.onrender.com/stats");
          if (!res.ok) throw new Error('bad response');
          const text = await res.text();
          if (!text || text.trimStart()[0] !== '{') return;
          setStats(JSON.parse(text));
        } catch {
          // silent – API unavailable or non-JSON
        }
      }

  useEffect(() => {
    loadStats();
    const interval = setInterval(loadStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const [countdown, setCountdown] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => setCountdown(prev => prev > 0 ? prev - 1 : 60), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `T-MINUS 00:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent relative overflow-hidden pb-20">

        {/* Header */}
        <motion.div
          className="backdrop-blur-md bg-[rgba(5,5,5,0.9)] border-b border-white/20 sticky top-0 z-50 pointer-events-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[1280px] mx-auto px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
              <motion.div
                className="relative w-8 h-8"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-[-12px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                    <g filter="url(#filter0_f_1_1469)">
                      <rect fill="#FFFFFF" fillOpacity="0.2" height="32" rx="16" width="32" x="12" y="12" />
                    </g>
                    <path d={svgPaths.p113e6d20} fill="#FFFFFF" />
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_f_1_1469" width="56" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_1469" stdDeviation="6" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </motion.div>
              <div className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-xl tracking-tight uppercase">
                <span className="text-white">Hollow</span><span className="text-white">HQ</span>
              </div>
            </div>

            <div className="flex gap-8 items-center font-['Space_Grotesk:Medium',sans-serif] font-medium text-sm tracking-widest uppercase">
              <AnimatedNavLink onClick={() => navigate('/')}>Dashboard</AnimatedNavLink>
              <AnimatedNavLink isActive>Stats</AnimatedNavLink>
              <AnimatedNavLink onClick={() => navigate('/ranks')}>Leaderboard</AnimatedNavLink>
              <AnimatedNavLink onClick={() => navigate('/structure')}>Structure</AnimatedNavLink>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                className="bg-white/5 border border-white/30 px-4 py-1 rounded flex items-center gap-2"
                animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1], boxShadow: ['0 0 0 0 rgba(34,197,94,0)', '0 0 0 4px rgba(34,197,94,0.2)', '0 0 0 0 rgba(34,197,94,0)'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-white text-xs font-['Liberation_Mono:Regular',sans-serif]">SYSTEM ONLINE</span>
              </motion.div>
              <InteractiveHoverButton
                text="Join Server"
                onClick={() => window.open(DISCORD_INVITE, '_blank')}
                className="bg-white border-none text-black hover:bg-zinc-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-[1280px] mx-auto px-12 pt-12 relative z-10 pointer-events-auto">
          {/* Header Section */}
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <motion.div
                className="flex items-center gap-2 text-white/60 text-xs font-['Liberation_Mono:Regular',sans-serif] tracking-[2.4px] uppercase"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                  <path d={svgPaths.p1aebff60} fill="currentColor" fillOpacity="0.6" />
                </svg>
                Server Region // Sector 4
              </motion.div>

              <motion.h1
                className="text-6xl font-['Space_Grotesk:Bold',sans-serif] font-bold tracking-tight uppercase"
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-white">Server </span>
                <span className="bg-clip-text bg-gradient-to-r from-white to-zinc-400 font-bold" style={{ WebkitTextFillColor: "transparent" }}>
                  Diagnostics
                </span>
              </motion.h1>

              <motion.div
                className="border-l-2 border-white/50 pl-4 text-zinc-400 max-w-[512px] font-['Space_Grotesk:Regular',sans-serif]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="mb-1">Real-time server activity monitoring and community</p>
                <p>statistics. Analyzed via automated surveillance networks.</p>
              </motion.div>
            </div>

            <motion.div
              className="flex items-end gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-right">
                <div className="text-gray-500 text-xs font-['Liberation_Mono:Regular',sans-serif] tracking-wider uppercase mb-1">Last Scan</div>
                <motion.div
                  className="text-white text-lg font-['Liberation_Mono:Regular',sans-serif]"
                  key={countdown}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {formatTime(countdown)}
                </motion.div>
              </div>
              <motion.button
                className="bg-white/5 border border-white/30 p-2 w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p3e942640} fill="#FFFFFF" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <StatCard label="POPULATION DENSITY" value={stats?.members ?? "..."} icon={svgPaths.p39955c80} delay={0.4} />
            <StatCard label="COMM CHANNELS" value={stats?.channels ?? "..."} icon={svgPaths.p3b56fec0} delay={0.5} />
            <StatCard label="ROLES ASSIGNED" value={stats?.roles ?? "..."} icon={svgPaths.p3e942640} delay={0.6} />
            <EnergyCard delay={0.7} stats={stats} />
          </div>

          {/* Community Age & Recent Transmissions */}
          <div className="grid grid-cols-3 gap-6">
            <CommunityAgeCard delay={0.8} />
            <RecentTransmissionsCard delay={0.9} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function StatCard({ label, value, icon, delay }: any) {
  return (
    <BleachCard className="p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-zinc-500 text-sm font-['Rajdhani:Medium',sans-serif] uppercase tracking-wider">{label}</p>
          <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <path d={icon} fill="#FFFFFF" fillOpacity="0.6" />
          </motion.svg>
        </div>
        <div className="flex items-end justify-between">
          <motion.p
            className="text-5xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedCounter target={value} />
          </motion.p>
          <div className="flex items-center gap-1 text-sm text-green-400">
            <motion.div
              className="w-1.5 h-1.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-mono">Live</span>
          </div>
        </div>
      </motion.div>
    </BleachCard>
  );
}

function EnergyCard({ delay, stats }: any) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-zinc-900/20 to-zinc-900/30 border border-white/30 p-6 backdrop-blur-sm overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.6)', scale: 1.02, boxShadow: '0 0 40px rgba(255,255,255,0.08)' }}
    >
      <GlowingEffect spread={35} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-xs font-['Space_Grotesk:Medium',sans-serif] font-medium tracking-widest uppercase">ENERGY OUTPUT</h3>
        <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
          animate={{ opacity: [0.4, 1, 0.4], filter: ['brightness(1)', 'brightness(2)', 'brightness(1)'] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <path d={svgPaths.p12df5c00} fill="#FFFFFF" />
        </motion.svg>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
            <motion.circle
              cx="64" cy="64" r="56"
              stroke="url(#gradient2)"
              strokeWidth="8" fill="none" strokeLinecap="round"
              initial={{ strokeDasharray: "0 352" }}
              animate={{ strokeDasharray: ["176 352", "352 352", "176 352"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#A1A1AA" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className="text-3xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LVL <AnimatedCounter target={stats?.boost_level ?? 0} />
            </motion.div>
            <div className="text-xs text-zinc-400 font-mono mt-1">{stats ? stats.boosts + " Boosts" : ""}</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <motion.div
          className="text-white text-sm font-['Space_Grotesk:Bold',sans-serif] font-bold tracking-wider uppercase"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Server Boost Active
        </motion.div>
      </div>
    </motion.div>
  );
}

function CommunityAgeCard({ delay }: any) {
  return (
    <motion.div
      className="relative col-span-2 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/20 p-6 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
    >
      <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div className="flex items-center gap-3 mb-6">
        <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <path d={svgPaths.p22876fc0} fill="#FFFFFF" fillOpacity="0.8" />
        </motion.svg>
        <h3 className="text-white text-xl font-['Space_Grotesk:Bold',sans-serif] font-bold uppercase">Community Age</h3>
      </div>

      <div className="text-gray-400 text-sm mb-4 font-['Space_Grotesk:Regular',sans-serif]">Operational duration since inception.</div>

      <div className="relative pt-4">
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-white/20 via-white/50 to-zinc-400/80">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white/30"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="flex justify-between relative">
          <TimelinePoint label="START" active delay={delay + 0.1} />
          <TimelinePoint label="6 MONTHS" active delay={delay + 0.2} />
          <TimelinePoint label="1 YEAR" active delay={delay + 0.3} />
          <TimelinePoint label="NOW" current delay={delay + 0.4} />
        </div>

        <motion.div
          className="text-right mt-6 text-3xl font-['Liberation_Mono:Bold',sans-serif] font-bold bg-clip-text bg-gradient-to-r from-white to-zinc-400"
          style={{ WebkitTextFillColor: "transparent" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          1YR 6MO
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelinePoint({ label, active, current, delay }: any) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 relative z-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, type: 'spring', stiffness: 200 }}
    >
      <motion.div
        className={`w-4 h-4 rounded-full border-2 ${current
          ? 'border-white bg-white ring-4 ring-white/20'
          : active ? 'border-zinc-400 bg-zinc-400' : 'border-zinc-700 bg-zinc-800'}`}
        animate={current
          ? { scale: [1, 1.3, 1], boxShadow: ['0 0 0 0 rgba(255,255,255,0)', '0 0 0 8px rgba(255,255,255,0.1)', '0 0 0 0 rgba(255,255,255,0)'] }
          : active ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className={`text-xs font-['Liberation_Mono:Regular',sans-serif] tracking-wider ${current ? 'text-white font-bold' : 'text-zinc-500'}`}>
        {label}
      </div>
    </motion.div>
  );
}

function RecentTransmissionsCard({ delay }: any) {
  const transmissions = [
    { time: '10:42 AM', user: '@Admin', action: 'joined', tag: '#general', color: 'text-green-500' },
    { time: '09:12 AM', user: 'Server', action: 'boosted to', tag: 'Level 2', color: 'text-white' },
    { time: '08:30 AM', user: 'New Member', action: 'arrived', tag: '@Welcome', color: 'text-zinc-400' },
  ];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/20 p-6 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
    >
      <GlowingEffect spread={30} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <h3 className="text-gray-400 text-xs font-['Space_Grotesk:Medium',sans-serif] font-medium tracking-widest uppercase">RECENT TRANSMISSIONS</h3>
      </div>

      <div className="space-y-3">
        {transmissions.map((transmission, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 p-2 rounded hover:bg-white/5 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.1 * (index + 1) }}
            whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <motion.div
              className="text-white/50 text-xs font-['Liberation_Mono:Regular',sans-serif] mt-1"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
            >▸</motion.div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 font-['Liberation_Mono:Regular',sans-serif] mb-1">{transmission.time}</div>
              <div className="text-sm font-['Space_Grotesk:Regular',sans-serif]">
                <span className={transmission.color}>User {transmission.user}</span>
                <span className="text-gray-400"> {transmission.action} </span>
                <span className="text-white">{transmission.tag}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
