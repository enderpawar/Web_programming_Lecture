import { useState } from 'react';
import { Plus, Heart, Star, Send, Check, X, Info, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export function FABToastDemo() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [fabExpanded, setFabExpanded] = useState(false);

  const showToast = (type: Toast['type'], message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toastConfig = {
    success: { icon: Check, bgColor: 'bg-green-500', textColor: 'text-white' },
    error: { icon: X, bgColor: 'bg-red-500', textColor: 'text-white' },
    info: { icon: Info, bgColor: 'bg-blue-500', textColor: 'text-white' },
    warning: { icon: AlertCircle, bgColor: 'bg-yellow-500', textColor: 'text-white' },
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200 min-h-[500px]">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">
        FAB & Toast UI 컴포넌트
      </h3>

      {/* Demo Controls */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button
          onClick={() => showToast('success', '작업이 완료되었습니다!')}
          className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
        >
          Success Toast
        </button>
        <button
          onClick={() => showToast('error', '오류가 발생했습니다.')}
          className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
        >
          Error Toast
        </button>
        <button
          onClick={() => showToast('info', '새로운 정보가 있습니다.')}
          className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
        >
          Info Toast
        </button>
        <button
          onClick={() => showToast('warning', '주의가 필요합니다!')}
          className="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
        >
          Warning Toast
        </button>
      </div>

      {/* Explanation */}
      <div className="bg-white rounded-lg p-4 mb-6 border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-2 text-sm">💡 UI 패턴 설명</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• <strong>FAB (Floating Action Button):</strong> 화면 오른쪽 하단의 플로팅 버튼</li>
          <li>• <strong>Toast:</strong> 임시 알림 메시지 (3초 후 자동 사라짐)</li>
          <li>• <strong>Animation:</strong> Motion 라이브러리로 부드러운 애니메이션 구현</li>
        </ul>
      </div>

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => {
            const config = toastConfig[toast.type];
            const Icon = config.icon;
            
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -20, x: 100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className={`${config.bgColor} ${config.textColor} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="flex-1 font-medium text-sm">{toast.message}</span>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="hover:bg-white/20 p-1 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* FAB Container */}
      <div className="absolute bottom-6 right-6">
        <AnimatePresence>
          {fabExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  showToast('success', '좋아요를 눌렀습니다!');
                  setFabExpanded(false);
                }}
                className="w-12 h-12 rounded-full bg-pink-500 text-white shadow-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  showToast('info', '즐겨찾기에 추가되었습니다!');
                  setFabExpanded(false);
                }}
                className="w-12 h-12 rounded-full bg-yellow-500 text-white shadow-lg flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Star className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  showToast('success', '메시지를 전송했습니다!');
                  setFabExpanded(false);
                }}
                className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFabExpanded(!fabExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow relative z-10"
        >
          <motion.div
            animate={{ rotate: fabExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Code Hint */}
      <div className="mt-8 bg-purple-100 rounded-lg p-4 border border-purple-300">
        <p className="text-sm text-purple-900">
          <strong>💻 구현 팁:</strong> Motion 라이브러리의 AnimatePresence와 motion 컴포넌트를 사용하면
          쉽게 애니메이션을 구현할 수 있습니다!
        </p>
      </div>
    </div>
  );
}
