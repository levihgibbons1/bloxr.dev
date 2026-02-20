import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Describe Your Vision',
    description: 'Tell Bloxr what you want to build using plain English. No coding knowledge needed — just describe your game mechanics, environments, or features.',
  },
  {
    number: '02',
    title: 'AI Generates the Code',
    description: 'Our AI engine translates your description into production-ready Luau scripts, complete with optimized logic and best practices built in.',
  },
  {
    number: '03',
    title: 'See It in Roblox Studio',
    description: 'Your generated code appears directly in Roblox Studio in real time. Test, tweak, and iterate instantly without leaving your workflow.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-black py-[140px] px-8 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#4F8EF7] text-[16px] font-medium tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-white">
            Three steps to your<br />first Roblox creation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <span className="text-[#4F8EF7] text-[48px] font-bold leading-none">{step.number}</span>
              <h3 className="text-white text-[24px] font-semibold mt-6 mb-4">{step.title}</h3>
              <p className="text-white/50 text-[17px] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
