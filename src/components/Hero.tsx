import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-[120px] md:py-5 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white text-[22px] font-bold">Bloxr</span>
        <span className="text-[#4F8EF7] text-[22px] font-bold">.dev</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-[30px]">
        {['How It Works', 'Features', 'Marketplace', 'Pricing'].map((item) => (
          <a key={item} href="#" className="text-white/80 hover:text-white text-[14px] font-medium transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Join Waitlist Button */}
      <button className="relative group rounded-full p-[0.6px] bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-[2px]"></div>
        <div className="relative bg-black rounded-full px-[29px] py-[11px] flex items-center justify-center">
          <span className="text-white text-[14px] font-medium">Join Waitlist</span>
        </div>
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center">
      {/* Background Video */}
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full px-4 pt-[200px] md:pt-[280px] pb-[102px] text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-[20px] px-3 py-1.5 mb-10 backdrop-blur-sm"
        >
          <div className="relative flex items-center justify-center w-2 h-2">
             <div className="absolute w-1 h-1 bg-[#4F8EF7] rounded-full shadow-[0_0_4px_#4F8EF7]"></div>
          </div>
          <div className="text-[13px] font-medium">
            <span className="text-white/60">Now in early access —</span>
            <span className="text-white ml-1">Start building for free</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] max-w-[613px] text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(255, 255, 255, 0) 115%)'
          }}
        >
          Roblox development, reimagined through AI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-[15px] font-normal text-white/70 max-w-[560px]"
        >
          Describe what you want to build. Watch it appear in Roblox Studio in real time. No Lua required.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 mb-4"
        >
          <button className="relative group rounded-full p-[0.6px] bg-gradient-to-b from-white to-white/50 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#4F8EF7] blur-[4px]"></div>
            <div className="relative bg-white rounded-full px-[29px] py-[11px] flex items-center justify-center transition-transform active:scale-95">
              <span className="text-black text-[14px] font-medium">Get Early Access</span>
            </div>
          </button>
        </motion.div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[12px] text-white/35"
        >
          Free to start · No credit card required · Works with Roblox Studio
        </motion.p>

      </div>
    </div>
  );
};

export default Hero;
