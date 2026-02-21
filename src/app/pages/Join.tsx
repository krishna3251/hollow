import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { BleachCard } from '../components/ui/bleach-card';
import { BleachLogo } from '../components/ui/bleach-logo';
import { BleachIcons } from '../components/ui/bleach-icons';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { useDiscordStats } from '../hooks/useDiscordStats';
import svgPathsStats from "../../imports/svg-8rzah5ub0f";
import svgPathsRanks from "../../imports/svg-qrotyqc1cr";

const svgPaths = { ...svgPathsStats, ...svgPathsRanks };
const DISCORD_INVITE = 'https://discord.gg/UPw2TwzhN6';

const decrees = [
  {
    title: 'Respect Policy',
    description: 'Respect all members. Discrimination or bullying will result in immediate removal. Protect your fellow members or be banned.',
    icon: <BleachIcons.SubstituteBadge className="w-8 h-8 text-white" />,
    number: '01',
  },
  {
    title: 'Channel Rules',
    description: 'English only in public channels. Use designated language channels for other languages. Keep the chat clean.',
    icon: <BleachIcons.GoteiSymbol className="w-8 h-8 text-white" />,
    number: '02',
  },
  {
    title: 'Communication Rules',
    description: 'No spam in discussions or voice channels. No raid planning or coordinated attacks.',
    icon: <BleachIcons.HollowMask className="w-8 h-8 text-white" />,
    number: '03',
  },
  {
    title: "Admin's Final Word",
    description: 'Follow mod directives. Challenge the chain of command only in designated appeal channels. Obey or face the consequences.',
    icon: <BleachIcons.QuincyCross className="w-8 h-8 text-white" />,
    number: '04',
  },
];

export function Join() {
  const navigate = useNavigate();
  const { online, members } = useDiscordStats();
  const [activeDecree, setActiveDecree] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradX = useTransform(mouseX, (v) => v - 300);
  const gradY = useTransform(mouseY, (v) => v - 300);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent relative overflow-hidden" onMouseMove={handleMouseMove}>

        {/* Cursor-following gradient */}
        <motion.div
          className="fixed w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0"
          style={{ left: gradX, top: gradY }}
        />

        {/* Floating geometric particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rotate-45"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, (i % 2 === 0 ? 1 : -1) * 30, 0],
                rotate: [45, 225, 45],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Header */}
        <motion.div
          className="backdrop-blur-md bg-[rgba(5,5,5,0.9)] border-b border-white/20 sticky top-0 z-50 pointer-events-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[1280px] mx-auto px-12 py-6 flex items-center justify-between">
            <motion.div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')} whileHover={{ scale: 1.05 }}>
              <BleachLogo className="h-8 w-40" />
            </motion.div>
            <div className="flex gap-8 font-['Rajdhani:Semi_Bold',sans-serif] text-sm tracking-wider uppercase bg-black/40 px-8 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <NavLink onClick={() => navigate('/')}>Dashboard</NavLink>
              <NavLink onClick={() => navigate('/stats')}>Stats</NavLink>
              <NavLink onClick={() => navigate('/ranks')}>Leaderboard</NavLink>
              <NavLink onClick={() => navigate('/structure')}>Structure</NavLink>
            </div>
            <InteractiveHoverButton
              text="Join Server"
              onClick={() => window.open(DISCORD_INVITE, '_blank')}
              className="bg-white border-none text-black hover:bg-zinc-200"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="min-h-screen flex items-center justify-center pt-24 px-12 relative z-10 pointer-events-auto">
          <div className="max-w-[900px] w-full">

            {/* Floating icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 180 }}
            >
              <motion.div
                className="text-6xl"
                animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                🌑
              </motion.div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-white/5 border border-white/30 px-4 py-1 rounded flex items-center gap-2"
                animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-['Rajdhani:Bold',sans-serif] font-bold text-sm tracking-[4px] uppercase flex items-center gap-2">
                  Server Access
                  {online !== null && (
                    <>
                      <span className="text-zinc-600">|</span>
                      <motion.span
                        className="text-green-400 flex items-center gap-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {online} Online
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-7xl font-['Rajdhani:Bold',sans-serif] font-bold text-center mb-6"
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-white">Enter Hollow HQ</span>
              <br />
              <span className="bg-clip-text bg-gradient-to-r from-white to-zinc-400 font-bold" style={{ WebkitTextFillColor: "transparent" }}>
                Join Us
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-slate-400 text-center mb-12 font-['Rajdhani:Light',sans-serif] tracking-wide leading-relaxed max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your power awakens. The portal is opening. Embrace the journey, evolve your role, and ascend the hierarchy of Hollow HQ.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 150 }}
            >
              <InteractiveHoverButton
                text="Enter Hollow HQ"
                onClick={() => window.open(DISCORD_INVITE, '_blank')}
                className="bg-white border-none text-black hover:bg-zinc-200 w-auto h-auto py-4 px-12 text-xl pointer-events-auto"
              />
            </motion.div>

            {/* Server Stats */}
              <motion.div
                className="relative max-w-[800px] mx-auto bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/20 p-8 backdrop-blur-sm overflow-hidden group mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 40px rgba(255,255,255,0.05)' }}
              >
                <GlowingEffect spread={50} glow={false} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" fill="#ffffff" />
                </svg>
              </div>

              <div className="grid grid-cols-4 gap-8 relative z-10">
                <StatCard value={online ? online.toString() : "..."} label="Active Members" icon="👥" delay={0} />
                <StatCard value="Online" label="Server Status" icon="⚡" delay={0.1} pulse />
                <StatCard value={online ? online.toString() : "..."} label="Total Members" icon="🌌" delay={0.2} />
                <StatCard value="Growing" label="Server Stage" icon="🎭" delay={0.3} />
              </div>

              {/* Online Members */}
              {members.length > 0 && (
                <div className="mt-8 border-t border-white/10 pt-8">
                  <h3 className="text-white font-['Rajdhani:Bold',sans-serif] font-bold text-lg uppercase tracking-wider mb-4 text-center">Online Souls</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {members.slice(0, 10).map((member, i) => (
                      <motion.div
                        key={member.id}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i, type: 'spring' }}
                        whileHover={{ scale: 1.15, y: -4 }}
                      >
                        <img
                          src={member.avatar_url} alt={member.username}
                          className="w-10 h-10 rounded-full border border-white/30 group-hover:border-white transition-colors bg-black"
                          onError={(e) => { e.currentTarget.src = "https://cdn.discordapp.com/embed/avatars/0.png"; }}
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                          {member.username}
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-black ${member.status === 'online' ? 'bg-green-500' : member.status === 'idle' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Server Rules */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.h2
                className="text-3xl font-['Rajdhani:Bold',sans-serif] font-bold text-white text-center mb-8 uppercase tracking-wide"
                whileHover={{ textShadow: '0 0 30px rgba(255,255,255,0.4)' }}
              >
                Server Rules
              </motion.h2>

              <div className="space-y-3">
                {decrees.map((decree, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.08 }}
                  >
                    <motion.div
                      className="relative overflow-hidden border rounded-lg cursor-pointer backdrop-blur-sm"
                      style={{
                        background: activeDecree === index ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                        borderColor: activeDecree === index ? 'white' : 'rgba(255,255,255,0.15)',
                      }}
                      animate={{
                        borderColor: activeDecree === index ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.15)',
                      }}
                      whileHover={{
                        borderColor: 'rgba(255,255,255,0.5)',
                        backgroundColor: activeDecree === index ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.05)',
                      }}
                      onClick={() => setActiveDecree(activeDecree === index ? null : index)}
                    >
                      <div className="p-5 flex items-start gap-4">
                        {/* Rule number */}
                        <motion.div
                          className={`text-xs font-['Liberation_Mono:Bold',sans-serif] font-bold tracking-wider w-8 mt-1 shrink-0 ${activeDecree === index ? 'text-black/40' : 'text-white/30'}`}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {decree.number}
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                          className={`mt-1 shrink-0 ${activeDecree === index ? '[&_*]:text-black [&_*]:fill-black' : ''}`}
                          animate={{ rotate: activeDecree === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {decree.icon}
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h4 className={`font-['Rajdhani:Bold',sans-serif] font-bold text-lg uppercase tracking-wider mb-1 ${activeDecree === index ? 'text-black' : 'text-white'}`}>
                            {decree.title}
                          </h4>
                          <AnimatePresence>
                            {activeDecree === index && (
                              <motion.p
                                className="text-sm font-['Rajdhani:Medium',sans-serif] text-zinc-700"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {decree.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <motion.div
                          className={`shrink-0 ${activeDecree === index ? 'text-black' : 'text-white'}`}
                          animate={{ rotate: activeDecree === index ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ➜
                        </motion.div>
                      </div>

                      {/* Progress line at bottom when active */}
                      {activeDecree === index && (
                        <motion.div
                          className="h-0.5 bg-black/20"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 backdrop-blur-md bg-black/60 border border-white/50 px-6 py-2 rounded-sm mb-8"
                whileHover={{ borderColor: 'rgba(255,255,255,1)', boxShadow: '0 0 25px rgba(255,255,255,0.2)' }}
              >
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 0L0 12h12L6 0z" fill="#ffffff" />
                  </svg>
                </motion.div>
                <BleachLogo className="h-10 w-48" />
                <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d={svgPaths.p113e6d20} fill="#FFFFFF" />
                  </svg>
                </motion.div>
              </motion.div>
              <p className="text-slate-600 text-sm font-['Rajdhani:Light',sans-serif]">©2024 Hollow HQ. All rights reserved.</p>
              <div className="flex gap-6 justify-center mt-6">
                <SocialIcon icon="𝕏" label="Twitter" />
                <SocialIcon icon="📷" label="Instagram" />
                <SocialIcon icon="🌐" label="Website" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function NavLink({ children, active, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer px-2 pb-1 ${active ? 'text-white shadow-[0px_2px_0px_0px_#ffffff]' : 'text-zinc-500'}`}
      whileHover={{ y: -2, color: '#ffffff' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function StatCard({ value, label, icon, delay, pulse }: any) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
    >
      <motion.div className="text-4xl mb-2"
        animate={pulse ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}>
        {icon}
      </motion.div>
      <motion.div className="text-3xl font-['Liberation_Mono:Bold',sans-serif] font-bold text-white mb-1"
        animate={pulse ? { color: ['#ffffff', '#86efac', '#ffffff'] } : {}}
        transition={{ duration: 2, repeat: Infinity }}>
        {value}
      </motion.div>
      <div className="text-xs text-slate-500 font-['Rajdhani:Bold',sans-serif] tracking-wider uppercase">{label}</div>
    </motion.div>
  );
}

function SocialIcon({ icon, label }: any) {
  return (
    <motion.div
      className="w-8 h-8 bg-white/10 border border-white/30 rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.2, borderColor: 'rgba(255,255,255,0.8)', backgroundColor: 'rgba(255,255,255,0.2)', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      <span className="text-sm">{icon}</span>
    </motion.div>
  );
}
