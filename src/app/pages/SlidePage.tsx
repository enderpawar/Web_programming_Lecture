import { useParams, Link, useNavigate } from 'react-router';
import { slides } from '../data/slides';
import { CodeBlock } from '../components/CodeBlock';
import { IntroDemo } from '../components/demos/IntroDemo';
import { ErrorDemo } from '../components/demos/ErrorDemo';
import { FABToastDemo } from '../components/demos/FABToastDemo';
import { TodoDemo } from '../components/demos/TodoDemo';
import { BasicDemo } from '../components/demos/BasicDemo';
import { KeyboardHint } from '../components/KeyboardHint';
import { ProgressBar } from '../components/ProgressBar';
import { Home, ChevronLeft, ChevronRight, BookOpen, Menu, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function SlidePage() {
  const { slideId } = useParams<{ slideId: string }>();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentSlide = slides.find(s => s.id === slideId);
  const currentIndex = slides.findIndex(s => s.id === slideId);
  
  const prevSlide = currentIndex > 0 ? slides[currentIndex - 1] : null;
  const nextSlide = currentIndex < slides.length - 1 ? slides[currentIndex + 1] : null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevSlide) {
        navigate(`/slide/${prevSlide.id}`);
      } else if (e.key === 'ArrowRight' && nextSlide) {
        navigate(`/slide/${nextSlide.id}`);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide, navigate]);

  if (!currentSlide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-12 rounded-3xl shadow-2xl border-2 border-red-200"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">슬라이드를 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-6">요청하신 페이지가 존재하지 않아요</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <Home className="w-5 h-5" />
            홈으로 돌아가기
          </Link>
        </motion.div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <KeyboardHint />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 backdrop-blur-sm z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-xl border-b border-purple-200/50 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-purple-100 rounded-xl transition-all hover:scale-110"
              >
                <Menu className="w-5 h-5 text-purple-600" />
              </button>
              
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all hover:scale-105 group"
              >
                <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold hidden sm:inline">홈으로</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              {prevSlide && (
                <Link
                  to={`/slide/${prevSlide.id}`}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-purple-600 transition-all p-2 hover:bg-purple-100 rounded-xl group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">이전</span>
                </Link>
              )}
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm shadow-md">
                {currentIndex + 1} / {slides.length}
              </div>
              {nextSlide && (
                <Link
                  to={`/slide/${nextSlide.id}`}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-purple-600 transition-all p-2 hover:bg-purple-100 rounded-xl group"
                >
                  <span className="hidden sm:inline">다음</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block w-72 bg-white/70 backdrop-blur-xl border-r border-purple-200/50 min-h-[calc(100vh-73px)] sticky top-[73px] shadow-xl">
          <div className="p-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl mb-6 shadow-lg">
              <BookOpen className="w-5 h-5" />
              <h3 className="font-bold">오늘 진행 순서</h3>
            </div>
            <nav className="space-y-2">
              {slides.map((slide, index) => (
                <Link
                  key={slide.id}
                  to={`/slide/${slide.id}`}
                  className={`block px-4 py-3 rounded-xl text-sm transition-all group relative overflow-hidden ${
                    slide.id === slideId
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-white hover:shadow-md border-2 border-transparent hover:border-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded-lg ${
                      slide.id === slideId 
                        ? 'bg-white/20' 
                        : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{slide.title}</span>
                    {slide.id === slideId && (
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    )}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sidebar Navigation - Mobile */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" 
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-80 bg-white/95 backdrop-blur-xl shadow-2xl overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl shadow-lg">
                      <BookOpen className="w-5 h-5" />
                      <h3 className="font-bold">오늘 진행 순서</h3>
                    </div>
                    <button 
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="space-y-2">
                    {slides.map((slide, index) => (
                      <Link
                        key={slide.id}
                        to={`/slide/${slide.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm transition-all group ${
                          slide.id === slideId
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100 border-2 border-transparent hover:border-purple-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono font-bold px-2 py-1 rounded-lg ${
                            slide.id === slideId 
                              ? 'bg-white/20' 
                              : 'bg-purple-100 text-purple-600'
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="flex-1">{slide.title}</span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-10 max-w-5xl relative">
          <motion.div
            key={slideId}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Slide Header */}
            <div className="mb-10 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-sm font-mono font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl shadow-md">
                    {currentSlide.category}
                  </span>
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-lg">
                    슬라이드 {currentIndex + 1}
                  </span>
                  <div className="flex-1"></div>
                  <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  {currentSlide.title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>
            </div>

            {/* Slide Sections */}
            <div className="space-y-8">
              {currentSlide.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {section.type === 'text' && (
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                        {section.title && (
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            {section.title}
                          </h2>
                        )}
                        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  )}

                  {section.type === 'code' && section.code && (
                    <div className="relative">
                      {section.title && (
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-mono">&lt;/&gt;</span>
                          </div>
                          {section.title}
                        </h3>
                      )}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 blur-lg"></div>
                        <div className="relative">
                          <CodeBlock
                            code={section.code}
                            language={section.language || 'javascript'}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {section.type === 'interactive' && slideId === '01' && (
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
                      <div className="relative">
                        <IntroDemo />
                      </div>
                    </div>
                  )}
                  {section.type === 'interactive' && slideId === '16' && (
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
                      <div className="relative">
                        <FABToastDemo />
                      </div>
                    </div>
                  )}
                  {section.type === 'error' && (
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl opacity-20 blur-2xl"></div>
                      <div className="relative">
                        <ErrorDemo />
                      </div>
                    </div>
                  )}
                  {section.type === 'demo' && slideId === '18' && (
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-20 blur-2xl"></div>
                      <div className="relative">
                        <TodoDemo />
                      </div>
                    </div>
                  )}
                  {section.type === 'demo' && slideId !== '18' && (
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl"></div>
                      <div className="relative">
                        <BasicDemo slideId={slideId || ''} />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center justify-between pt-10 border-t-2 border-purple-200/50 gap-4"
            >
              {prevSlide ? (
                <Link
                  to={`/slide/${prevSlide.id}`}
                  className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-xl hover:bg-white border-2 border-purple-200/50 rounded-2xl transition-all hover:shadow-xl hover:scale-105 group flex-1 max-w-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-purple-500 group-hover:-translate-x-2 transition-transform" />
                  <div className="text-left flex-1">
                    <div className="text-xs font-semibold text-purple-600 mb-1">이전 슬라이드</div>
                    <div className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors truncate">
                      {prevSlide.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              {nextSlide ? (
                <Link
                  to={`/slide/${nextSlide.id}`}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 group flex-1 max-w-sm"
                >
                  <div className="text-right flex-1">
                    <div className="text-xs font-semibold text-purple-100 mb-1">다음 슬라이드</div>
                    <div className="font-bold truncate">
                      {nextSlide.title}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 group flex-1 max-w-sm"
                >
                  <Home className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <div className="text-left flex-1">
                    <div className="text-xs font-semibold text-green-100 mb-1">🎉 수고하셨습니다!</div>
                    <div className="font-bold">홈으로 돌아가기</div>
                  </div>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </main>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}