import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { BleachCard } from '../components/ui/bleach-card';
import { BleachLogo } from '../components/ui/bleach-logo';
import { GlowingEffect } from '../components/ui/glowing-effect';
import svgPaths from "../../imports/svg-qrotyqc1cr";

const DISCORD_INVITE = 'https://discord.gg/UPw2TwzhN6';

const imgImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%237c3aed'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif' dy='.3em'%3E⚔ Shinigami%3C/text%3E%3C/svg%3E";
const imgImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23ec4899'/%3E%3Cstop offset='100%25' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif' dy='.3em'%3E👑 Elite Shinigami%3C/text%3E%3C/svg%3E";
const imgImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%233b82f6'/%3E%3Cstop offset='100%25' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif' dy='.3em'%3E🛡 Lieutenant%3C/text%3E%3C/svg%3E";


export function Ranks() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-[200vh] bg-transparent relative overflow-hidden">

        {/* Ambient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute bg-white/5 blur-[120px] w-[600px] h-[600px] rounded-full left-[200px] top-0"
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bg-zinc-400/5 blur-[140px] w-[700px] h-[700px] rounded-full bottom-0 right-[200px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05], x: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Header */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/20 pointer-events-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[1280px] mx-auto px-12 py-6 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-8 h-8 bg-white/10 border border-white/40 rounded-full flex items-center justify-center"
                animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0)', '0 0 0 8px rgba(255,255,255,0.05)', '0 0 0 0 rgba(255,255,255,0)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p268fe640} fill="#ffffff" />
                </svg>
              </motion.div>
              <BleachLogo className="h-12 w-64" />
            </motion.div>

            <div className="flex gap-8 font-['Rajdhani:Semi_Bold',sans-serif] text-sm tracking-wider uppercase bg-black/40 px-8 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <NavLink onClick={() => navigate('/')}>Dashboard</NavLink>
              <NavLink onClick={() => navigate('/stats')}>Stats</NavLink>
              <NavLink active>Leaderboard</NavLink>
              <NavLink onClick={() => navigate('/structure')}>Structure</NavLink>
            </div>

            <InteractiveHoverButton
              text="Enter"
              onClick={() => window.open(DISCORD_INVITE, '_blank')}
              className="bg-white border-none text-black hover:bg-zinc-200"
            />
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="min-h-screen flex items-center justify-center relative z-10 pt-24 pointer-events-auto"
          style={{ opacity, scale }}
        >
          <div className="text-center max-w-[1024px] px-12">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 backdrop-blur-md bg-black/60 border border-white/50 px-6 py-2 rounded-sm mb-8"
              initial={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7 }}
              whileHover={{ borderColor: 'rgba(255,255,255,1)', boxShadow: '0 0 25px rgba(255,255,255,0.25)' }}
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d={svgPaths.p268fe640} fill="#ffffff" />
                </svg>
              </motion.div>
              <span className="text-white text-xs font-['Rajdhani:Bold',sans-serif] font-bold tracking-[2.4px] uppercase">
                Official Server Roles
              </span>
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d={svgPaths.p268fe640} fill="#ffffff" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-7xl font-['Cinzel:Black',sans-serif] font-black text-white tracking-tight uppercase mb-6"
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ textShadow: '0px 0px 40px rgba(255,255,255,0.5)' }}
            >
              Ranks of Hollow HQ
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-slate-300 max-w-[576px] mx-auto mb-12 font-['Rajdhani:Light',sans-serif] tracking-wide leading-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Navigate the server hierarchy. From new members to elite leaders.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.span
                className="text-slate-600 text-xs font-['Rajdhani:Bold',sans-serif] font-bold tracking-[3.6px] uppercase"
                animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll Down
              </motion.span>
              <motion.div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Core Hierarchy */}
        <div className="relative z-10 pb-24">
          <div className="max-w-[1280px] mx-auto px-12">
            <motion.h2
              className="text-4xl font-['Cinzel:Bold',sans-serif] font-bold text-center text-white tracking-wider uppercase mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Core Hierarchy
            </motion.h2>

            <div className="grid grid-cols-3 gap-6 mb-24">
              <TiltRankCard title="Guardian" subtitle="The foundation of our structured hierarchy. Guardians who oversee general workflows."
                badges={['Base Roles', 'Mods']} icon={svgPaths.p268fe640} image={imgImage} delay={0} color="purple" />
              <TiltRankCard title="Elite Guardian" subtitle="Senior-level command. Responsible for strategic direction and guiding rank growth."
                badges={['Mods+Higher', 'Strategy']} icon={svgPaths.p314be7a0} image={imgImage1} delay={0.1} color="pink" featured />
              <TiltRankCard title="Lieutenant" subtitle="Influential sub-lieutenants. Trusted intermediates who help the ranks."
                badges={['Moderators', 'Staff Aux']} icon={svgPaths.p34b57500} image={imgImage2} delay={0.2} color="blue" />
            </div>

            {/* Additional Roles */}
            <div className="grid grid-cols-3 gap-6">
              <RoleCard title="Ticket Support" subtitle="Help desk & assistance" icon={svgPaths.p35218000} color="green" delay={0.3} />
              <RoleCard title="Temp Admin" subtitle="Provisional authority" icon={svgPaths.p3e3c6200} color="red" delay={0.4} />
              <RoleCard title="Events / Pings" subtitle="Activity & updates" icon={svgPaths.p3f50100} color="yellow" delay={0.5} />
            </div>
          </div>
        </div>

        {/* Community Interests */}
        <motion.div
          className="relative z-10 py-24 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[1280px] mx-auto px-12">
            <motion.div
              className="flex items-center gap-3 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p3ee71380} fill="#ffffff" />
                </svg>
              </motion.div>
              <h2 className="text-3xl font-['Cinzel:Bold',sans-serif] font-bold text-white tracking-wider uppercase">Community Interests</h2>
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              <InterestCard title="Wuthering Waves" subtitle="Battle Rhythm"
                image="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" delay={0} />
              <InterestCard title="Genshin Impact" subtitle="Travelers × Mods"
                image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop" delay={0.1} />
              <InterestCard title="Social Squad" subtitle="Social Group"
                image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop" delay={0.2} />
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="relative z-10 py-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d={svgPaths.p3ee71380} fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#a1a1aa" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.h2
            className="text-4xl font-['Cinzel:Bold',sans-serif] font-bold text-white mb-4 uppercase tracking-wide"
            whileHover={{ textShadow: '0 0 40px rgba(255,255,255,0.6)' }}
          >
            Hollow HQ Headquarters
          </motion.h2>
          <p className="text-slate-400 mb-8 font-['Rajdhani:Light',sans-serif] text-lg">
            "We don't follow the crowd. We set the standard. That's our essence."
          </p>

          <div className="flex justify-center">
            <InteractiveHoverButton
              text="Join the Hierarchy"
              onClick={() => window.open(DISCORD_INVITE, '_blank')}
              className="bg-gradient-to-r from-zinc-800 to-zinc-600 border-none text-white min-w-[250px]"
            />
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

function NavLink({ children, active, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer relative ${active ? 'text-white' : 'text-zinc-500'}`}
      whileHover={{ color: '#ffffff', y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {active && (
        <motion.div className="absolute -bottom-1 left-0 right-0 h-px bg-white"
          layoutId="activeRankNav"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      )}
    </motion.div>
  );
}

function TiltRankCard({ title, subtitle, badges, icon, image, delay, color, featured }: any) {
  const colorMap: any = {
    purple: { border: 'border-white/30', glow: 'bg-white/10', text: 'text-white', shadow: 'rgba(255,255,255,0.3)' },
    pink: { border: 'border-zinc-400/30', glow: 'bg-zinc-400/10', text: 'text-zinc-400', shadow: 'rgba(161,161,170,0.3)' },
    blue: { border: 'border-zinc-600/30', glow: 'bg-zinc-600/10', text: 'text-zinc-600', shadow: 'rgba(82,82,91,0.3)' },
  };
  const colors = colorMap[color];

  return (
    <motion.div
      className="relative rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Mouse-tracking glowing border */}
      <GlowingEffect
        spread={40}
        glow={false}
        disabled={false}
        proximity={80}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <BleachCard className="rounded-lg overflow-hidden backdrop-blur-sm relative group min-h-[400px]" featured={featured}>
        {/* Shimmer glow */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay }}
        />

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image} alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 180, scale: 1.2, borderColor: 'rgba(255,255,255,0.5)' }}
            transition={{ duration: 0.6 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={icon} fill="white" />
            </svg>
          </motion.div>

          {featured && (
            <motion.div
              className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-['Rajdhani:Bold',sans-serif] font-bold text-black tracking-wider uppercase"
              animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0)', '0 0 0 8px rgba(255,255,255,0.15)', '0 0 0 0 rgba(255,255,255,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured
            </motion.div>
          )}
        </div>

        <div className="p-6">
          <motion.h3
            className="text-2xl font-['Cinzel:Bold',sans-serif] font-bold text-white mb-2 uppercase tracking-wide"
            whileHover={{ x: 6, textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-sm text-gray-400 mb-4 font-['Rajdhani:Regular',sans-serif] leading-relaxed">{subtitle}</p>
          <div className="flex gap-2">
            {badges.map((badge: string, index: number) => (
              <motion.span
                key={index}
                className={`px-3 py-1 ${colors.glow} border ${colors.border} rounded text-xs ${colors.text} font-['Rajdhani:Bold',sans-serif] font-bold tracking-wider uppercase`}
                whileHover={{ scale: 1.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </BleachCard>
    </motion.div>
  );
}

function RoleCard({ title, subtitle, icon, color, delay }: any) {
  const colorMap: any = {
    green: { border: 'border-green-500/30', text: 'text-green-500', bg: 'bg-green-500/10', glow: 'rgba(34,197,94,0.3)' },
    red: { border: 'border-red-500/30', text: 'text-red-500', bg: 'bg-red-500/10', glow: 'rgba(239,68,68,0.3)' },
    yellow: { border: 'border-yellow-500/30', text: 'text-yellow-500', bg: 'bg-yellow-500/10', glow: 'rgba(234,179,8,0.3)' },
  };
  const colors = colorMap[color];

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-900/60 to-gray-900/30 border ${colors.border} rounded-lg p-6 backdrop-blur-sm overflow-hidden`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${colors.glow}` }}
    >
      <GlowingEffect
        spread={30}
        glow={false}
        disabled={false}
        proximity={60}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <motion.div
        className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-full flex items-center justify-center mb-4 mx-auto`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.7 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={icon} fill="currentColor" className={colors.text} />
        </svg>
      </motion.div>
      <h3 className={`text-lg font-['Rajdhani:Bold',sans-serif] font-bold ${colors.text} text-center mb-1 uppercase tracking-wide`}>{title}</h3>
      <p className="text-xs text-gray-500 text-center font-['Rajdhani:Regular',sans-serif]">{subtitle}</p>
    </motion.div>
  );
}

function InterestCard({ title, subtitle, image, delay }: any) {
  return (
    <BleachCard className="rounded-lg overflow-hidden backdrop-blur-sm group p-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-40 overflow-hidden">
          <motion.img src={image} alt={title} className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }} transition={{ duration: 0.6 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        </div>
        <div className="p-4">
          <motion.h3
            className="text-xl font-['Rajdhani:Bold',sans-serif] font-bold text-white mb-1 uppercase tracking-wide"
            whileHover={{ x: 5 }}
          >{title}</motion.h3>
          <p className="text-xs text-zinc-400 font-['Rajdhani:Regular',sans-serif] tracking-wider uppercase">{subtitle}</p>
        </div>
      </motion.div>
    </BleachCard>
  );
}
