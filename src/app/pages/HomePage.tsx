import { Link } from 'react-router';
import { slides } from '../data/slides';
import { ArrowRight, Terminal, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { IntroReveal } from '../components/IntroReveal';

export function HomePage() {
  const [replay, setReplay] = useState(false);

  return (
    <IntroReveal replay={replay} onReplayDone={() => setReplay(false)}>
      <div className="min-h-screen bg-white text-gray-900">

        {/* Header */}
        <header className="bg-gray-950 text-white sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-orange-400 rounded flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-gray-950" />
                </div>
                <div>
                  <span className="text-sm font-bold tracking-widest text-white uppercase">NL WEB PROGRAMMING</span>
                  <span className="text-gray-500 mx-2">·</span>
                  <span className="text-sm font-mono text-orange-400">DEV BY JINWOO LEE</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1 rounded hidden sm:inline-flex">
                  WEEK 1 — HTML / CSS / JS
                </span>
                <button
                  onClick={() => setReplay(true)}
                  className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-orange-400 border border-gray-800 hover:border-orange-400 px-3 py-1 rounded transition-colors"
                >
                  <Play className="w-3 h-3" />
                  인트로
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-xs text-orange-500 tracking-widest uppercase mb-6">
                2026년 최신 웹 개발 입문
              </p>

              <h2 className="text-5xl md:text-7xl font-black text-gray-950 leading-[1.08] tracking-tight mb-8">
                아직도{' '}
                <span className="underline decoration-orange-400 underline-offset-4">
                  슬라이드만
                </span>{' '}
                보고<br />
                수업하고 있다고?
              </h2>

              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
                그건 NL의 방식이 아니에요 .{' '}
                <span className="text-gray-800 font-semibold">실제 프로젝트</span>같은 예제 홈페이지에서 배워봐요.
    
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-mono">
                {['코드 예시 포함', '실시간 결과 확인', '인터랙티브 데모'].map((text, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="border border-gray-300 px-4 py-2 rounded text-gray-600"
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slides List */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <Link to={`/slide/${slide.id}`}>
                  <div className="group bg-white hover:bg-gray-950 transition-colors duration-200 p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-gray-400 group-hover:text-gray-500">
                        {slide.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors duration-200 mb-2 leading-snug">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-400 line-clamp-2 leading-relaxed transition-colors duration-200">
                        {slide.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-800">
                      <span className="text-xs font-mono text-gray-400 group-hover:text-gray-500">
                        예제 코드 & 데모 포함
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Banner */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-950 rounded-xl px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs text-orange-400 tracking-widest uppercase mb-2">오늘의 미니 프로젝트</p>
              <h3 className="text-2xl font-black text-white">
                Todo 앱 만들기
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                HTML 구조 → CSS 스타일링 → JavaScript 기능 → 이벤트 처리
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JS', 'Event'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-gray-950 bg-orange-400 px-3 py-1.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </IntroReveal>
  );
}
