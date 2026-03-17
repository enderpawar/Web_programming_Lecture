import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroRevealProps {
  children: React.ReactNode;
  replay?: boolean;
  onReplayDone?: () => void;
}

export function IntroReveal({ children, replay, onReplayDone }: IntroRevealProps) {
  const alreadySeen = typeof window !== 'undefined' && !!localStorage.getItem('intro-seen');
  const [showIntro, setShowIntro] = useState(!alreadySeen);

  // 최초 방문 타이머
  useEffect(() => {
    if (alreadySeen) return;
    localStorage.setItem('intro-seen', 'true');
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // 다시보기 트리거
  useEffect(() => {
    if (!replay) return;
    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
      onReplayDone?.();
    }, 2200);
    return () => clearTimeout(timer);
  }, [replay]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 bg-orange-400"
                style={{ height: '33.4%', top: `${i * 33.33}%` }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.4,
                  delay: i * 0.07,
                  times: [0, 0.4, 0.6, 1],
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}

            <motion.div
              className="relative z-10 text-center select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, delay: 0.2, times: [0, 0.2, 0.7, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase mb-4">
                GRE STUDIO
              </p>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
                WEB<br />
                <span className="text-orange-400">DEV</span>
              </h1>
              <p className="font-mono text-sm text-gray-400 tracking-widest mt-5">
                HTML · CSS · JavaScript
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: alreadySeen ? 1 : 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
