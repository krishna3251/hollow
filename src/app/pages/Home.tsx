import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useNavigate } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-o2on5yk891";
import { imgBackgroundBorderShadow, imgButton, imgButton1, imgButton2 } from "../../imports/svg-wh8ag";
import { PageTransition } from '../components/PageTransition';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { BleachLogo } from '../components/ui/bleach-logo';
import { ParticleTextEffect } from '../components/ui/particle-text-effect';

const DISCORD_INVITE = 'https://discord.gg/UPw2TwzhN6';

// Magnetic button wrapper
function MagneticWrapper({ children, strength = 30 }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.4);
    y.set((e.clientY - cy) * 0.4);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </motion.div>
  );
}

function AnimatedNavLink({ children, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer relative group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-[#94a3b8] group-hover:text-white transition-colors duration-200 font-['Rajdhani:Semi_Bold',sans-serif] text-[14px] uppercase tracking-wider">
        {children}
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 h-px bg-white"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}

function Container2() {
  return (
    <motion.div
      className="relative shrink-0 size-[25px]"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p24894b00} fill="var(--fill-0, #FFFFFF)" id="Icon" />
        </g>
      </svg>
    </motion.div>
  );
}

function BackgroundBorderShadow() {
  return (
    <motion.div
      className="-translate-y-1/2 absolute bg-[#0a0a12] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] p-px size-[48px] top-1/2"
      style={{ maskImage: `url('${imgBackgroundBorderShadow}')` }}
      whileHover={{ scale: 1.15 }}
      animate={{
        boxShadow: [
          '0px 0px 15px rgba(255,255,255,0.2)',
          '0px 0px 30px rgba(255,255,255,0.5)',
          '0px 0px 15px rgba(255,255,255,0.2)',
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(255,255,255,0.1)]" />
      <Container2 />
    </motion.div>
  );
}

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <AnimatedNavLink>Base</AnimatedNavLink>
      <div onClick={() => navigate('/ranks')} className="cursor-pointer">
        <AnimatedNavLink>Leaderboard</AnimatedNavLink>
      </div>
      <div onClick={() => navigate('/structure')} className="cursor-pointer">
        <AnimatedNavLink>Explore</AnimatedNavLink>
      </div>
      <AnimatedNavLink>Archives</AnimatedNavLink>
    </div>
  );
}

function Header() {
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], ['rgba(2,3,5,0.7)', 'rgba(2,3,5,0.95)']);
  const navigate = useNavigate();

  return (
    <motion.div
      className="absolute backdrop-blur-[12px] content-stretch flex flex-col items-center left-0 pb-px top-0 w-full z-[4] pointer-events-auto"
      style={{ backgroundColor: headerBg }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_30px_0px_rgba(0,0,0,0.8)]" />
      <div className="h-[96px] max-w-[1280px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24px] relative size-full">
            {/* Logo */}
            <motion.div
              className="flex gap-4 items-center cursor-pointer"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative shrink-0 size-[48px]">
                <BackgroundBorderShadow />
              </div>
              <BleachLogo className="h-8 w-40" />
            </motion.div>

            <Nav />

            {/* CTA button */}
            <div className="h-[48px] relative shrink-0 w-[155px]">
              <motion.button
                onClick={() => window.open(DISCORD_INVITE, '_blank')}
                className="-translate-y-1/2 absolute content-stretch flex h-[48px] items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[155px_48px] px-[33px] py-px top-1/2 cursor-pointer"
                style={{ maskImage: `url('${imgButton}')` }}
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 40px rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none" />
                <div className="absolute bg-[rgba(255,255,255,0.1)] inset-[47px_1px_-45px_1px]" />
                <div className="relative shrink-0">
                  <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] text-center tracking-[1.4px] uppercase w-[89px]">
                    <p className="leading-[20px] whitespace-pre-wrap">Join Server</p>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent relative overflow-hidden">
        <div className="relative z-10">
          <Header />

          {/* Hero Section with parallax */}
          <motion.div
            ref={heroRef}
            className="min-h-screen flex items-center justify-center px-16 pt-24 relative pointer-events-none"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="max-w-[1152px] w-full text-center relative z-10 pointer-events-auto">

              {/* Decorative line */}
              <motion.div
                className="mx-auto mb-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 128, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ boxShadow: '0px 0px 20px rgba(255,255,255,0.6)' }}
              />

              {/* Badge */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 12, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  className="border border-white/50 bg-black/40 backdrop-blur-sm px-4 py-2 rounded rotate-12"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                >
                  <p className="text-white font-['Liberation_Mono:Bold_Italic',sans-serif] text-xl tracking-wider font-bold italic"
                    style={{ textShadow: '0px 0px 30px rgba(255,255,255,0.5)' }}>V.02</p>
                </motion.div>
              </motion.div>

              {/* Background title */}
              <motion.div
                className="mb-2 opacity-40 select-none"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <h2 className="text-7xl font-['Rajdhani:Bold',sans-serif] font-bold tracking-[14.4px]">THE FORTRESS</h2>
              </motion.div>

              {/* Main particle title */}
                <motion.div
                  className="mb-2 select-none -mx-8 pointer-events-auto"
                initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ParticleTextEffect
                  words={["HOLLOW HQ"]}
                  width={1200}
                  height={220}
                  fontSize={140}
                  fontFamily="Rajdhani, sans-serif"
                  pixelSteps={4}
                  cycleInterval={0}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-2xl text-slate-300 mb-12 font-['Rajdhani:Medium',sans-serif] tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                Where Hollows Gather. Where Legends Rise.
              </motion.p>

              {/* Server info badge */}
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="backdrop-blur-md bg-black/60 border border-white/20 px-6 py-2 rounded flex items-center gap-2"
                  whileHover={{ borderColor: 'rgba(255,255,255,0.5)', boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
                  animate={{
                    borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-2 bg-white rotate-45"
                    animate={{ rotate: [45, 225, 45], scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="text-white text-xs font-['Rajdhani:Bold',sans-serif] tracking-[2.4px] uppercase font-bold">
                    Server Created: Aug 14, 2024
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-white rotate-45"
                    animate={{ rotate: [45, 225, 45], scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-6 justify-center items-center mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <MagneticWrapper>
                  <InteractiveHoverButton
                    text="ENTER HOLLOW HQ"
                    onClick={() => window.open(DISCORD_INVITE, '_blank')}
                    className="w-72 h-20 text-xl font-['Rajdhani:Bold',sans-serif] tracking-wider border-white/50 hover:border-white bg-black/80 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  />
                </MagneticWrapper>

                <MagneticWrapper>
                  <motion.button
                    onClick={() => navigate('/structure')}
                    className="backdrop-blur-sm bg-black/40 border-2 border-white/50 px-12 py-6 rounded-sm font-['Rajdhani:Bold',sans-serif] text-white text-lg tracking-wider uppercase font-bold flex items-center gap-3 cursor-pointer relative overflow-hidden"
                    whileHover={{ scale: 1.05, borderColor: 'rgb(255,255,255)', boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0"
                      whileHover={{ opacity: 1 }}
                    />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d={svgPaths.pfd2c900} fill="#FFFFFF" />
                    </svg>
                    EXPLORE THE VOID
                  </motion.button>
                </MagneticWrapper>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="mt-24 pt-20 border-t border-white/20 max-w-[896px] mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0 }}
              >
                <div className="flex justify-between gap-8">
                  <StatItem value="15.2k" label="Members" delay={1.2} />
                  <StatItem value="24/7" label="Always Active" delay={1.3} />
                  <StatItem value="10" label="Leader Seats" delay={1.4} />
                  <StatItem value="∞" label="Power Level" delay={1.5} />
                </div>
                <motion.div
                  className="text-center mt-6 text-white/50 text-xs font-['Liberation_Mono:Regular',sans-serif] tracking-wider flex items-center justify-center gap-2"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  SYSTEM STATUS: OPERATIONAL
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-1 text-center cursor-default"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.12, y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="text-3xl font-['Liberation_Mono:Bold',sans-serif] font-bold text-white mb-2 relative"
        animate={{
          textShadow: hovered
            ? '0px 0px 30px rgba(255,255,255,1)'
            : ['0px 0px 0px rgba(179,0,255,0)', '0px 0px 20px rgba(179,0,255,0.6)', '0px 0px 0px rgba(179,0,255,0)'],
        }}
        transition={{ duration: 2, repeat: hovered ? 0 : Infinity, delay }}
      >
        {value}
        {hovered && (
          <motion.div
            className="absolute inset-0 -inset-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
          />
        )}
      </motion.div>
      <motion.div
        className="text-xs text-slate-500 font-['Rajdhani:Bold',sans-serif] tracking-[2px] uppercase font-bold"
        animate={{ color: hovered ? '#ffffff' : '#64748b' }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
