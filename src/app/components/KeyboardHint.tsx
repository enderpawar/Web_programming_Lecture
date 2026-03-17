import { useState, useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function KeyboardHint() {
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('keyboard-hint-seen');
    if (!hasSeenHint) {
      const timer = setTimeout(() => {
        setShowHint(true);
        localStorage.setItem('keyboard-hint-seen', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* 버튼 */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-40 p-2.5 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors group"
        title="키보드 단축키"
      >
        <Keyboard className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
      </button>

      {/* 첫 방문 힌트 */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-20 left-6 z-40 bg-gray-950 border border-gray-800 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs"
          >
            <button
              onClick={() => setShowHint(false)}
              className="absolute -top-2 -right-2 p-1 bg-white rounded-full text-gray-700 hover:bg-gray-100"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-gray-300">
              <span className="font-mono text-orange-400 text-xs">TIP</span>{' '}
              ← → 키로 슬라이드를 이동할 수 있어요
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 단축키 모달 */}
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVisible(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.15 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-7 max-w-sm w-full mx-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-gray-500" />
                  키보드 단축키
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { label: '다음 슬라이드', key: '→' },
                  { label: '이전 슬라이드', key: '←' },
                  { label: '개발자 도구', key: 'F12' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{label}</span>
                    <kbd className="font-mono text-xs bg-white border border-gray-300 text-gray-900 px-2.5 py-1 rounded shadow-sm">
                      {key}
                    </kbd>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                에러 페이지와 콘솔 데모에서는 F12를 눌러 실제 개발자 도구를 확인해보세요.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
