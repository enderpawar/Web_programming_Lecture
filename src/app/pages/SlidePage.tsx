import { useParams, Link, useNavigate } from 'react-router';
import { slides } from '../data/slides';
import { CodeBlock } from '../components/CodeBlock';
import { IntroDemo } from '../components/demos/IntroDemo';
import { ErrorDemo } from '../components/demos/ErrorDemo';
import { FABToastDemo } from '../components/demos/FABToastDemo';
import { TodoDemo } from '../components/demos/TodoDemo';
import { BasicDemo } from '../components/demos/BasicDemo';
import { KeyboardHint } from '../components/KeyboardHint';
import { Home, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevSlide) navigate(`/slide/${prevSlide.id}`);
      else if (e.key === 'ArrowRight' && nextSlide) navigate(`/slide/${nextSlide.id}`);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide, navigate]);

  if (!currentSlide) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-12">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-4">404</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">슬라이드를 찾을 수 없습니다</h2>
          <p className="text-gray-500 mb-8">요청하신 페이지가 존재하지 않아요</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-gray-800 transition-colors">
            <Home className="w-4 h-4" />
            홈으로
          </Link>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <KeyboardHint />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-orange-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Header */}
      <header className="bg-gray-950 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded transition-colors"
              aria-label="메뉴"
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-bold text-white bg-orange-400 hover:bg-orange-300 transition-colors px-4 py-2 rounded text-gray-950"
            >
              <Home className="w-4 h-4 text-gray-950" />
              <span className="hidden sm:inline text-gray-950">홈으로</span>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            {prevSlide ? (
              <Link
                to={`/slide/${prevSlide.id}`}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">이전</span>
              </Link>
            ) : <div className="w-16" />}

            <span className="font-mono text-sm text-white bg-gray-800 px-4 py-2 rounded">
              {currentIndex + 1} / {slides.length}
            </span>

            {nextSlide ? (
              <Link
                to={`/slide/${nextSlide.id}`}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                <span className="hidden sm:inline">다음</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : <div className="w-16" />}
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-57px)] sticky top-[57px]">
          <div className="p-4 border-b border-gray-100">
            <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">목차</p>
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            {slides.map((slide, index) => (
              <Link
                key={slide.id}
                to={`/slide/${slide.id}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors mb-0.5 ${
                  slide.id === slideId
                    ? 'bg-gray-950 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className={`font-mono text-xs w-6 shrink-0 ${
                  slide.id === slideId ? 'text-orange-400' : 'text-gray-400'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="truncate font-medium">{slide.title}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Sidebar — Mobile */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-50 bg-black/40"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: 'tween', duration: 0.22 }}
                className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-72 bg-white border-r border-gray-200 overflow-y-auto"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">목차</p>
                  <button onClick={() => setSidebarOpen(false)} className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <nav className="p-2">
                  {slides.map((slide, index) => (
                    <Link
                      key={slide.id}
                      to={`/slide/${slide.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors mb-0.5 ${
                        slide.id === slideId
                          ? 'bg-gray-950 text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className={`font-mono text-xs w-6 shrink-0 ${
                        slide.id === slideId ? 'text-orange-400' : 'text-gray-400'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate font-medium">{slide.title}</span>
                    </Link>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-4 md:p-8 lg:p-10 max-w-4xl">
          <div>
            {/* Slide Header */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-orange-500 tracking-widest uppercase">
                  {currentSlide.category}
                </span>
                <span className="font-mono text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
                  슬라이드 {currentIndex + 1}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight tracking-tight mb-4">
                {currentSlide.title}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                {currentSlide.description}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {currentSlide.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                >
                  {section.type === 'text' && (
                    <div className="bg-white border border-gray-200 rounded-xl p-7">
                      {section.title && (
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-1 h-6 bg-orange-400 rounded-full shrink-0" />
                          {section.title}
                        </h2>
                      )}
                      <div className="text-gray-600 whitespace-pre-wrap leading-relaxed text-base">
                        {(section.content || '').split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                          part.startsWith('**') && part.endsWith('**')
                            ? <strong key={i} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>
                            : part
                        )}
                      </div>
                    </div>
                  )}

                  {section.type === 'code' && section.code && (
                    <div>
                      {section.title && (
                        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="font-mono text-xs bg-gray-950 text-orange-400 px-2 py-1 rounded">&lt;/&gt;</span>
                          {section.title}
                        </h3>
                      )}
                      <CodeBlock
                        code={section.code}
                        language={section.language || 'javascript'}
                      />
                    </div>
                  )}

                  {section.type === 'interactive' && slideId === '01' && <IntroDemo />}
                  {section.type === 'interactive' && slideId === '17' && <FABToastDemo />}
                  {section.type === 'error' && <ErrorDemo />}
                  {section.type === 'demo' && slideId === '19' && <TodoDemo />}
                  {section.type === 'demo' && slideId !== '19' && (
                    <BasicDemo slideId={slideId || ''} demoId={section.demoId} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex items-stretch gap-3">
              {prevSlide ? (
                <Link
                  to={`/slide/${prevSlide.id}`}
                  className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-200 hover:border-gray-400 rounded-xl transition-colors group flex-1 min-w-0"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-gray-700 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 mb-0.5 font-mono">이전</div>
                    <div className="font-bold text-gray-900 truncate text-sm">{prevSlide.title}</div>
                  </div>
                </Link>
              ) : <div className="flex-1" />}

              {nextSlide ? (
                <Link
                  to={`/slide/${nextSlide.id}`}
                  className="flex items-center gap-3 px-5 py-4 bg-gray-950 hover:bg-gray-800 text-white rounded-xl transition-colors group flex-1 min-w-0 justify-end"
                >
                  <div className="text-right min-w-0">
                    <div className="text-xs text-gray-400 mb-0.5 font-mono">다음</div>
                    <div className="font-bold truncate text-sm">{nextSlide.title}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-400 shrink-0" />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-3 px-5 py-4 bg-orange-400 hover:bg-orange-300 text-gray-950 rounded-xl transition-colors group flex-1 min-w-0 justify-end"
                >
                  <div className="text-right min-w-0">
                    <div className="text-xs text-gray-700 mb-0.5 font-mono">완료!</div>
                    <div className="font-bold truncate text-sm">홈으로 돌아가기</div>
                  </div>
                  <Home className="w-5 h-5 shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
