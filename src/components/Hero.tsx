import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 40;

      setAtTop(isAtTop);

      if (isAtTop) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-[80px] md:py-5 w-full transition-all duration-300 ${!atTop ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''}`}
    >
      <a href="#" className="flex items-center">
        <span className="text-white text-[28px] font-bold tracking-tight">Bloxr</span>
        <span className="text-[#4F8EF7] text-[28px] font-bold">.dev</span>
      </a>

      <div className="hidden md:flex items-center space-x-[40px]">
        {[
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
        ].map((item) => (
          <a key={item.label} href={item.href} className="text-white/50 hover:text-white text-[15px] font-medium transition-colors duration-200">
            {item.label}
          </a>
        ))}
      </div>

      <a href="#pricing" className="group relative rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7] to-[#7B61FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative border border-white/20 group-hover:border-transparent rounded-full px-[28px] py-[10px] transition-colors duration-300">
          <span className="text-white text-[15px] font-medium">Join Waitlist</span>
        </div>
      </a>
    </motion.nav>
  );
};

const TypingPrompt = () => {
  const prompts = [
    "Add a shop where players buy speed with coins",
    "Make enemies patrol and chase players within 20 studs",
    "Create a stamina bar that drains when sprinting",
    "Add a top 10 kills leaderboard with live updates",
  ];
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'responding' | 'done'>('typing');
  const [responseText, setResponseText] = useState('');

  const responses = [
    "Creating shop GUI, server handler, coin DataStore, and purchase validation...",
    "Building NPC AI with PathfindingService, aggro range detection, and patrol waypoints...",
    "Setting up LocalScript with TweenService animations and server-synced stamina system...",
    "Configuring OrderedDataStore leaderboard with live update polling...",
  ];

  useEffect(() => {
    const prompt = prompts[currentPrompt];

    if (phase === 'typing') {
      if (displayText.length < prompt.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prompt.slice(0, displayText.length + 1));
        }, 30 + Math.random() * 20);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('waiting'), 800);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'waiting') {
      const timeout = setTimeout(() => {
        setResponseText('');
        setPhase('responding');
      }, 400);
      return () => clearTimeout(timeout);
    }

    if (phase === 'responding') {
      const response = responses[currentPrompt];
      if (responseText.length < response.length) {
        const timeout = setTimeout(() => {
          setResponseText(response.slice(0, responseText.length + 1));
        }, 15 + Math.random() * 10);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('done'), 2200);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'done') {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setResponseText('');
        setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        setPhase('typing');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayText, phase, currentPrompt, responseText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="mt-14 w-full max-w-[640px]"
    >
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0A0A0F]/90 backdrop-blur-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4F8EF7]/20 to-transparent"></div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-[18px] h-[18px] rounded-md bg-gradient-to-br from-[#4F8EF7] to-[#7B61FF] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1V9M1 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-white/50 text-[13px] font-semibold tracking-wide">Bloxr Agent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-[6px] h-[6px] rounded-full bg-[#10B981]"></div>
            <span className="text-[#10B981]/70 text-[11px] font-medium">Studio Connected</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {(phase === 'responding' || phase === 'done') && (
            <motion.div
              key={`response-${currentPrompt}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-4 border-b border-white/[0.04]"
            >
              <div className="flex items-start gap-3">
                <div className="w-[20px] h-[20px] rounded-md bg-gradient-to-br from-[#4F8EF7]/20 to-[#7B61FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M1 5H9" stroke="#4F8EF7" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    {responseText}
                    {phase === 'responding' && (
                      <span className="inline-block w-[2px] h-[14px] bg-[#4F8EF7] ml-[2px] align-middle animate-pulse-glow"></span>
                    )}
                  </p>
                  {phase === 'done' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 mt-2"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#10B981]/60 text-[12px] font-medium">Inserted to Studio</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-h-[24px] flex items-center">
              <span className="text-white/60 text-[15px] font-normal">
                {displayText}
                {phase === 'typing' && (
                  <span className="inline-block w-[2px] h-[16px] bg-[#4F8EF7] ml-[1px] align-middle animate-pulse-glow"></span>
                )}
              </span>
              {!displayText && phase === 'typing' && (
                <span className="text-white/15 text-[15px]">
                  Describe what you want to build...
                  <span className="inline-block w-[2px] h-[16px] bg-[#4F8EF7] ml-[1px] align-middle animate-pulse-glow"></span>
                </span>
              )}
            </div>
            <button className={`shrink-0 w-[32px] h-[32px] rounded-lg flex items-center justify-center transition-all duration-200 ${displayText ? 'bg-[#4F8EF7] hover:bg-[#3D7BE5]' : 'bg-white/[0.06]'}`}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 12V2M7 2L3 6M7 2L11 6" stroke={displayText ? 'white' : 'rgba(255,255,255,0.2)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center noise-overlay">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
      </div>

      <div className="absolute inset-0 grid-bg"></div>

      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#4F8EF7]/[0.04] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#7B61FF]/[0.03] rounded-full blur-[100px]"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col items-center w-full px-6 text-center pt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 border border-white/10 rounded-full px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm"
        >
          <div className="relative flex items-center justify-center w-2 h-2">
            <div className="absolute w-2 h-2 bg-[#4F8EF7] rounded-full"></div>
            <div className="absolute w-4 h-4 bg-[#4F8EF7]/20 rounded-full animate-ping"></div>
          </div>
          <span className="text-white/50 text-[14px] font-medium">Now in early access</span>
          <span className="text-white/10">|</span>
          <span className="text-white text-[14px] font-medium">Start building for free</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-[44px] md:text-[76px] font-medium leading-[1.05] tracking-[-2.5px] max-w-[860px] pb-1"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 20%, rgba(255, 255, 255, 0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Roblox development, reimagined through AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 text-[18px] md:text-[20px] font-normal text-white/45 max-w-[540px] leading-[1.6]"
        >
          Describe what you want to build. Watch it appear in Roblox Studio in real time. No Lua required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative bg-white rounded-full px-[36px] py-[14px] transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] active:scale-[0.97]">
            <span className="text-black text-[16px] font-semibold">Get Early Access</span>
          </button>
          <a href="#how-it-works" className="text-white/40 hover:text-white/70 text-[15px] font-medium transition-colors flex items-center gap-2">
            See how it works
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[1px]">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-5 text-[14px] text-white/25 tracking-wide"
        >
          Free to start  /  No credit card  /  Works with Roblox Studio
        </motion.p>

        <TypingPrompt />
      </div>
    </div>
  );
};

export default Hero;
