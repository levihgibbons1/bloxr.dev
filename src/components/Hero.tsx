import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-[80px] md:py-5 w-full transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <a href="#" className="flex items-center">
        <span className="text-white text-[28px] font-bold tracking-tight">Bloxr</span>
        <span className="text-[#4F8EF7] text-[28px] font-bold">.dev</span>
      </a>

      <div className="hidden md:flex items-center space-x-[40px]">
        {[
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Features', href: '#features' },
          { label: 'Marketplace', href: '#marketplace' },
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
    </nav>
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
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const prompt = prompts[currentPrompt];
    if (isTyping) {
      if (displayText.length < prompt.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prompt.slice(0, displayText.length + 1));
        }, 35 + Math.random() * 25);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      setDisplayText('');
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
      setIsTyping(true);
    }
  }, [displayText, isTyping, currentPrompt]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-14 w-full max-w-[640px]"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent"></div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#4F8EF7] animate-pulse-glow"></div>
          <span className="text-white/30 text-[13px] font-medium tracking-wide uppercase">Prompt</span>
        </div>
        <div className="text-white/70 text-[16px] font-normal leading-relaxed h-[24px]">
          {displayText}
          <span className="inline-block w-[2px] h-[18px] bg-[#4F8EF7] ml-[2px] align-middle animate-pulse-glow"></span>
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
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
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
