import React from 'react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Natural Language Input',
    description: 'Just type what you want. Our AI understands complex game logic, UI layouts, and environmental design from plain English.',
    icon: '💬',
  },
  {
    title: 'Real-Time Preview',
    description: 'See changes appear instantly in Roblox Studio as you describe them. No waiting, no compiling, no guesswork.',
    icon: '⚡',
  },
  {
    title: 'Production-Ready Code',
    description: 'Generated Luau scripts follow Roblox best practices with proper error handling, optimization, and clean architecture.',
    icon: '✨',
  },
  {
    title: 'Smart Iteration',
    description: 'Refine your creation with follow-up prompts. Add features, fix bugs, or completely change direction — all through conversation.',
    icon: '🔄',
  },
  {
    title: 'Asset Integration',
    description: 'Automatically connect to the Roblox asset library. Reference models, textures, and sounds by description.',
    icon: '📦',
  },
  {
    title: 'Team Collaboration',
    description: 'Share projects with your team. Multiple developers can work on the same game with AI-powered merge conflict resolution.',
    icon: '👥',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#050505] py-[140px] px-8 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#4F8EF7] text-[16px] font-medium tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-white">
            Everything you need to<br />build faster.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <div className="text-[40px] mb-6">{feature.icon}</div>
              <h3 className="text-white text-[22px] font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/50 text-[17px] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
