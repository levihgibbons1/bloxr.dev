import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white text-[28px] font-bold">Bloxr</span>
              <span className="text-[#4F8EF7] text-[28px] font-bold">.dev</span>
            </div>
            <p className="text-white/40 text-[16px] leading-relaxed">
              AI-powered Roblox development. Build games faster than ever before.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Marketplace', href: '#marketplace' },
                { label: 'Pricing', href: '#pricing' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/40 hover:text-white/70 text-[15px] transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white/70 text-[15px] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white/70 text-[15px] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[14px]">
            &copy; {new Date().getFullYear()} Bloxr.dev. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-[14px] transition-colors">Terms</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-[14px] transition-colors">Privacy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-[14px] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
