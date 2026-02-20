import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-[120px] md:py-7 w-full">
      <div className="flex items-center">
        <span className="text-white text-[28px] font-bold">Bloxr</span>
        <span className="text-[#4F8EF7] text-[28px] font-bold">.dev</span>
      </div>

      <div className="hidden md:flex items-center space-x-[40px]">
        {['How It Works', 'Features', 'Marketplace', 'Pricing'].map((item) => (
          <a key={item} href="#" className="text-white/80 hover:text-white text-[16px] font-medium transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="relative group rounded-full p-[0.6px] bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-[2px]"></div>
        <div className="relative bg-black rounded-full px-[36px] py-[14px] flex items-center justify-center">
          <span className="text-white text-[16px] font-medium">Join Waitlist</span>
        </div>
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col items-center w-full px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 backdrop-blur-sm"
        >
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
             <div className="absolute w-1.5 h-1.5 bg-[#4F8EF7] rounded-full shadow-[0_0_6px_#4F8EF7]"></div>
          </div>
          <div className="text-[15px] font-medium">
            <span className="text-white/60">Now in early access —</span>
            <span className="text-white ml-1">Start building for free</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-[44px] md:text-[72px] leading-[1.15] tracking-[-2px] max-w-[780px] pb-1 text-transparent bg-clip-text"
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 600,
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.45) 100%)',
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
          className="mt-8 text-[18px] font-normal text-white/60 max-w-[540px] leading-relaxed"
        >
          Describe what you want to build. Watch it appear in Roblox Studio in real time. No Lua required.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <button className="relative group rounded-full p-[0.6px] bg-gradient-to-b from-white to-white/50 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#4F8EF7] blur-[4px]"></div>
            <div className="relative bg-white rounded-full px-[40px] py-[16px] flex items-center justify-center transition-transform active:scale-95">
              <span className="text-black text-[16px] font-semibold">Get Early Access</span>
            </div>
          </button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-[14px] text-white/35"
        >
          Free to start · No credit card required · Works with Roblox Studio
        </motion.p>

      </div>
    </div>
  );
};

export default Hero;
