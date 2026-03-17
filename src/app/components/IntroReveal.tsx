import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroRevealProps {
  children: React.ReactNode;
}

export function IntroReveal({ children }: IntroRevealProps) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // 2.8초 후에 인트로 종료
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // 10개의 사선 블록 생성
  const blocks = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: i * 0.08,
    exitDelay: i * 0.06,
    color: i % 3 === 0 
      ? 'from-purple-600 to-purple-800' 
      : i % 3 === 1 
      ? 'from-pink-600 to-pink-800' 
      : 'from-indigo-600 to-indigo-800',
  }));

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 배경 */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950" />

            {/* 사선 블록들 */}
            <div className="absolute inset-0 flex">
              {blocks.map((block) => (
                <motion.div
                  key={block.id}
                  className={`flex-1 bg-gradient-to-br ${block.color} origin-center`}
                  style={{
                    transform: 'skewY(-8deg)',
                    transformOrigin: 'center',
                  }}
                  initial={{ 
                    scaleY: 0,
                    opacity: 0,
                  }}
                  animate={{ 
                    scaleY: [0, 1.2, 1],
                    opacity: [0, 1, 1],
                  }}
                  exit={{ 
                    scaleY: 0,
                    opacity: 0,
                    rotateZ: block.id % 2 === 0 ? -10 : 10,
                  }}
                  transition={{
                    scaleY: {
                      duration: 0.8,
                      delay: block.delay,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                    opacity: {
                      duration: 0.6,
                      delay: block.delay,
                    },
                    exit: {
                      duration: 0.6,
                      delay: block.exitDelay,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  }}
                />
              ))}
            </div>

            {/* 중앙 텍스트 */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                scale: { duration: 0.8, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
                exit: { duration: 0.5 },
              }}
            >
              <div className="text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mb-6"
                >
                  <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
                  style={{
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  WEB DEV
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-xl md:text-2xl text-white/90 font-light tracking-wide"
                >
                  HTML · CSS · JavaScript
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto mt-8 rounded-full"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </motion.div>

            {/* 장식용 파티클 효과 */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + Math.random() * 0.8,
                    repeat: 0,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 메인 콘텐츠 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
