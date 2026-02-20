import React from 'react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for trying out AI-powered Roblox development.',
    features: [
      '50 AI generations per month',
      'Basic templates',
      'Community support',
      '1 project',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    description: 'For serious builders who want unlimited creative power.',
    features: [
      'Unlimited AI generations',
      'All premium templates',
      'Priority support',
      'Unlimited projects',
      'Team collaboration',
      'Custom model training',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$49',
    period: '/mo',
    description: 'For teams and studios building at scale.',
    features: [
      'Everything in Pro',
      'Dedicated AI instance',
      'API access',
      'Custom integrations',
      'SLA & priority support',
      'Advanced analytics',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-[#050505] py-[140px] px-8 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#4F8EF7] text-[16px] font-medium tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-white">
            Simple, transparent pricing.
          </h2>
          <p className="mt-6 text-white/50 text-[19px] max-w-[500px] mx-auto">
            Start free. Upgrade when you're ready to go pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? 'border-[#4F8EF7]/50 bg-[#4F8EF7]/[0.06]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4F8EF7] text-white text-[13px] font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-white text-[22px] font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-white text-[48px] font-bold tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-white/40 text-[18px] ml-1">{plan.period}</span>}
              </div>
              <p className="text-white/50 text-[16px] mb-8">{plan.description}</p>
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/70 text-[16px]">
                    <svg className="w-5 h-5 mr-3 text-[#4F8EF7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-full py-[16px] text-[17px] font-semibold transition-transform active:scale-95 ${
                  plan.highlighted
                    ? 'bg-[#4F8EF7] text-white hover:bg-[#3D7BE5]'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
