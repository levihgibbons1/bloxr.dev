import React from 'react';
import { motion } from 'motion/react';

const categories = [
  { name: 'Combat Systems', count: '240+', color: '#FF6B6B' },
  { name: 'UI Templates', count: '180+', color: '#4ECDC4' },
  { name: 'World Builders', count: '320+', color: '#45B7D1' },
  { name: 'Economy & Trading', count: '150+', color: '#96CEB4' },
  { name: 'Social Features', count: '200+', color: '#FFEAA7' },
  { name: 'Game Mechanics', count: '400+', color: '#DDA0DD' },
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="relative bg-black py-[140px] px-8 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#4F8EF7] text-[16px] font-medium tracking-wide uppercase mb-4">Marketplace</p>
            <h2 className="text-[40px] md:text-[52px] font-medium leading-[1.1] tracking-[-1.5px] text-white mb-6">
              Pre-built templates for every game type.
            </h2>
            <p className="text-white/50 text-[19px] leading-relaxed mb-10">
              Browse thousands of community-created templates, scripts, and modules. Use them as-is or customize with AI to match your vision.
            </p>
            <button className="relative group rounded-full p-[0.6px] bg-white/20 overflow-hidden hover:bg-white/30 transition-colors">
              <div className="relative bg-white/10 rounded-full px-[36px] py-[16px] flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-[17px] font-medium">Browse Marketplace</span>
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: cat.color }} />
                <h3 className="text-white text-[18px] font-semibold mb-1">{cat.name}</h3>
                <p className="text-white/40 text-[15px]">{cat.count} templates</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
