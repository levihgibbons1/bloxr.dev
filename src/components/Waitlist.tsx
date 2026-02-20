import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Could not connect. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 noise-overlay">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-[#4F8EF7]/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[300px] h-[300px] bg-[#7B61FF]/[0.02] rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-[440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center justify-center mb-12">
            <span className="text-white text-[28px] font-bold tracking-tight">Bloxr</span>
            <span className="text-[#4F8EF7] text-[28px] font-bold">.dev</span>
          </Link>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-[28px] font-semibold text-white mb-3">You're on the list.</h1>
              <p className="text-white/40 text-[16px] leading-relaxed mb-8">
                We'll send you an invite when your spot is ready. Keep an eye on your inbox.
              </p>
              <Link to="/" className="text-white/30 hover:text-white/60 text-[14px] transition-colors">
                Back to home
              </Link>
            </motion.div>
          ) : (
            <>
              <h1 className="text-[32px] md:text-[40px] font-medium text-center leading-[1.1] tracking-[-1.5px] text-white mb-3">
                Join the waitlist
              </h1>
              <p className="text-white/40 text-[16px] text-center leading-relaxed mb-10">
                Be among the first to build Roblox games with AI. We'll email you when it's your turn.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-[16px] placeholder:text-white/20 outline-none focus:border-[#4F8EF7]/40 transition-colors duration-200"
                    autoFocus
                  />
                </div>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#FF6B6B]/80 text-[14px]"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full bg-white rounded-xl py-4 text-black text-[16px] font-semibold transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>

              <p className="text-white/20 text-[13px] text-center mt-6">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Waitlist;
