import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { PageTransition } from '../components/PageTransition';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { BleachCard } from '../components/ui/bleach-card';
import { BleachLogo } from '../components/ui/bleach-logo';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { useDiscordStats } from '../hooks/useDiscordStats';
import { useState } from 'react';
import svgPathsStats from "../../imports/svg-8rzah5ub0f";
import svgPathsRanks from "../../imports/svg-qrotyqc1cr";

const svgPaths = { ...svgPathsStats, ...svgPathsRanks };
const DISCORD_INVITE = 'https://discord.gg/UPw2TwzhN6';

const features = [
  { icon: '📚', title: '7 Major Categories', description: 'Diverse ecosystem spanning all major hubs and territories.', tags: ['Exploration', 'Social Center', 'Battle Grounds'] },
  { icon: '💬', title: '40 Text Channels', description: 'Rich cross-communication spaces. Dive into various realms.', tags: ['Anime', 'Games', 'Chat', 'Memes'] },
  { icon: '🎤', title: '12 Voice Channels', description: 'Live squad sessions for gaming and vibing.', tags: ['Lounge-1', 'Gaming-FPS', 'Music-24/7'] },
  { icon: '🎭', title: 'Roleplay Sector', description: 'Step into the shoes of your favorite anime characters.', tags: ['RPs', 'Canon'] },
  { icon: '🎁', title: 'Spirit Drops', description: 'Unique fully customizable drops for top-ranked members.', tags: ['Nitro', 'Merch'] },
  { icon: '⚔️', title: 'Ranked PvP', description: 'Level up your activity to earn elite emblems. 1v1.', tags: ['Leveling', 'Titles'] },
];


export function Structure() {
  const navigate = useNavigate();
  const { channels } = useDiscordStats();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent relative overflow-hidden">

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
              <NavLink active>Structure</NavLink>
            </div>
            <InteractiveHoverButton
              text="Join Server"
              onClick={() => window.open(DISCORD_INVITE, '_blank')}
              className="bg-white border-none text-black hover:bg-zinc-200"
            />
          </div>
        </motion.div>

        {/* Hero */}
        <div className="min-h-screen flex items-center justify-center pt-24 px-12 relative z-10 pointer-events-auto">
          <div className="max-w-[1024px] w-full">

            {/* Command badge */}
            <motion.div className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                className="bg-white/5 border border-white/30 px-4 py-1 rounded flex items-center gap-2"
                animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.span className="text-white text-2xl" animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>⚡</motion.span>
                <span className="text-white font-['Rajdhani:Bold',sans-serif] font-bold text-sm tracking-[3px] uppercase">Command</span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.div className="flex justify-center text-7xl font-['Rajdhani:Bold',sans-serif] font-bold text-center mb-6"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <BleachLogo className="h-10 w-48" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-slate-400 text-center mb-12 font-['Rajdhani:Light',sans-serif] tracking-wide leading-relaxed max-w-[700px] mx-auto"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Mapping the void. Explore the server infrastructure designed for the evolution of souls.
            </motion.p>

            {/* Architecture badge */}
            <motion.div className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <motion.div
                className="inline-flex items-center gap-3 backdrop-blur-md bg-black/60 border border-white/50 px-6 py-2 rounded-sm"
                whileHover={{ borderColor: 'rgba(255,255,255,1)', boxShadow: '0 0 25px rgba(255,255,255,0.25)' }}
              >
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d={svgPaths.p268fe640} fill="#ffffff" />
                  </svg>
                </motion.div>
                <span className="text-white text-xs font-['Rajdhani:Bold',sans-serif] font-bold tracking-[2.4px] uppercase">Architecture</span>
                <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d={svgPaths.p268fe640} fill="#ffffff" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Server Leadership */}
            <motion.div
              className="bg-gradient-to-r from-zinc-900/20 to-zinc-900/10 border-l-4 border-white pl-6 pr-8 py-6 mb-12"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: 'rgb(255,255,255)', backgroundColor: 'rgba(255,255,255,0.03)', paddingLeft: '32px' }}
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.span className="text-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>👑</motion.span>
                <h3 className="text-2xl font-['Rajdhani:Bold',sans-serif] font-bold text-white uppercase tracking-wide">Server Leadership</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <LeaderCard name="Leader" rank="#1 Server Owner" />
                <LeaderCard name="Admin" rank="Server Admin" />
              </div>
            </motion.div>

            {/* Server Layout card */}
            <motion.div
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-white/20 rounded-lg p-8 mb-12 backdrop-blur-sm relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.7)', scale: 1.02, boxShadow: '0 0 40px rgba(255,255,255,0.06)' }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-lg flex items-center justify-center border border-white/10"
                    whileHover={{ rotate: 180, borderColor: 'rgba(255,255,255,0.3)' }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={svgPaths.p113e6d20} fill="#FFFFFF" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white uppercase tracking-wider mb-2">Server Layout</h3>
                    <motion.div className="h-1 w-12 bg-white/50 group-hover:w-32" style={{ transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)' }} />
                  </div>
                </div>
                <p className="text-slate-400 font-['Rajdhani:Light',sans-serif] text-lg leading-relaxed mb-6">
                  Hollow HQ: Where power dictates hierarchy. Conquer to evolve. The portal never closes.
                </p>
                <div className="flex justify-center">
                  <InteractiveHoverButton
                    text="Join the Hierarchy"
                    onClick={() => window.open(DISCORD_INVITE, '_blank')}
                    className="bg-white border-none text-black hover:bg-zinc-200 min-w-[250px]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative z-10 py-24">
          <div className="max-w-[1280px] mx-auto px-12">

            {/* Feature highlights */}
            <motion.h2
              className="text-3xl font-['Cinzel:Bold',sans-serif] font-bold text-white text-center mb-12 uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              What Awaits You
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, i) => (
                <FeatureCard key={i} feature={feature} index={i} hovered={hoveredFeature === i}
                  onHover={() => setHoveredFeature(i)} onLeave={() => setHoveredFeature(null)} />
              ))}
            </div>

            {/* Discord channel cards */}
            {channels.length > 0 && (
              <>
                <motion.h2
                  className="text-2xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white text-center mb-8 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Live Channels
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {channels.map((channel, i) => (
                    <motion.div
                      key={channel.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                    >
                      <BleachCard className="p-6 min-h-[120px] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <span className="text-4xl">#</span>
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white tracking-wider mb-2">{channel.name}</h3>
                          <div className="h-1 w-8 bg-white/50 mb-2" />
                          <p className="text-zinc-500 text-xs font-mono">ID: {channel.id}</p>
                        </div>
                      </BleachCard>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="relative z-10 py-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[800px] mx-auto px-12">
            <motion.h2
              className="text-5xl font-['Rajdhani:Bold',sans-serif] font-bold text-white mb-6 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ textShadow: '0 0 40px rgba(255,255,255,0.5)' }}
            >
              Unleash your{' '}
              <span className="bg-clip-text bg-gradient-to-r from-white to-zinc-400 font-bold" style={{ WebkitTextFillColor: "transparent" }}>
                True Power
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-400 mb-12 font-['Rajdhani:Light',sans-serif] tracking-wide leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "Join the ranks of the elite. The throne of the Fortress sits empty."
            </motion.p>
            <div className="flex gap-6 justify-center items-center">
              <InteractiveHoverButton
                text="Join Server"
                onClick={() => window.open(DISCORD_INVITE, '_blank')}
                className="bg-white border-none text-black hover:bg-zinc-200 min-w-[200px]"
              />
              <motion.button
                className="bg-black/40 border-2 border-white/50 px-12 py-4 rounded font-['Rajdhani:Bold',sans-serif] font-bold text-white text-lg tracking-wider uppercase backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgb(255,255,255)', backgroundColor: 'rgba(255,255,255,0.08)', boxShadow: '0 0 30px rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Rules
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

function NavLink({ children, active, onClick }: any) {
  const [isActive] = useState(active);
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer relative px-2 pb-1 ${isActive ? 'text-white' : 'text-zinc-500'}`}
      whileHover={{ y: -2, color: '#ffffff' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({ feature, index, hovered, onHover, onLeave }: any) {
  return (
    <motion.div
      className="relative rounded-lg"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Mouse-tracking glowing border */}
      <GlowingEffect
        spread={40}
        glow={false}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <motion.div
        className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 border border-white/10 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden h-full"
        animate={{
          borderColor: hovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
          boxShadow: hovered ? '0 0 40px rgba(255,255,255,0.08), inset 0 0 40px rgba(255,255,255,0.03)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <motion.div
            className="text-4xl mb-4"
            animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? [0, -5, 5, 0] : 0 }}
            transition={{ duration: 0.4 }}
          >
            {feature.icon}
          </motion.div>
          <h3 className="text-xl font-['Space_Grotesk:Bold',sans-serif] font-bold text-white tracking-wider mb-2">{feature.title}</h3>
          <div className="h-px w-8 bg-white/30 mb-3" />
          <p className="text-zinc-400 text-sm font-['Rajdhani:Regular',sans-serif] leading-relaxed mb-4">{feature.description}</p>
          <div className="flex flex-wrap gap-2">
            {feature.tags.map((tag: string, i: number) => (
              <motion.span
                key={i}
                className="text-xs border border-white/20 text-zinc-400 px-2 py-1 rounded font-['Liberation_Mono:Regular',sans-serif] tracking-wider"
                whileHover={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LeaderCard({ name, rank }: any) {
  return (
    <motion.div
      className="bg-white/5 border border-white/20 rounded p-3 backdrop-blur-sm"
      whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.08)', boxShadow: '0 0 20px rgba(255,255,255,0.05)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl">👤</span>
        </motion.div>
        <div>
          <div className="text-white font-['Rajdhani:Bold',sans-serif] font-bold tracking-wider">{name}</div>
          <div className="text-xs text-zinc-400 font-['Rajdhani:Regular',sans-serif]">{rank}</div>
        </div>
      </div>
    </motion.div>
  );
}
