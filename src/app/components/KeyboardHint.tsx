import { useState, useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function KeyboardHint() {
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Show hint on first visit
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
      {/* Keyboard Shortcuts Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-40 p-3 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:border-purple-400 group"
        title="키보드 단축키"
      >
        <Keyboard className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
      </button>

      {/* First-time hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-6 z-40 bg-purple-600 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs"
          >
            <button
              onClick={() => setShowHint(false)}
              className="absolute -top-2 -right-2 p-1 bg-white rounded-full text-purple-600 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm">
              💡 <strong>Tip:</strong> ← → 키로 슬라이드를 이동할 수 있어요!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVisible(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Keyboard className="w-6 h-6 text-purple-600" />
                  키보드 단축키
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">다음 슬라이드</span>
                  <kbd className="px-3 py-1.5 bg-white border-2 border-gray-300 rounded-lg font-mono text-sm shadow-sm">
                    →
                  </kbd>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">이전 슬라이드</span>
                  <kbd className="px-3 py-1.5 bg-white border-2 border-gray-300 rounded-lg font-mono text-sm shadow-sm">
                    ←
                  </kbd>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                  <span className="text-gray-700">개발자 도구</span>
                  <kbd className="px-3 py-1.5 bg-white border-2 border-purple-300 rounded-lg font-mono text-sm shadow-sm">
                    F12
                  </kbd>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-700">💡 Tip:</strong> 에러 페이지와 콘솔 데모에서는
                  F12를 눌러 실제 개발자 도구를 확인해보세요!
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
