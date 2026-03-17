import { Link } from 'react-router';
import { slides } from '../data/slides';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { IntroReveal } from '../components/IntroReveal';

export function HomePage() {
  return (
    <IntroReveal>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">GRE STUDIO · WEB PRO</h1>
                <p className="text-xs text-gray-600">WEEK 1 · HTML / CSS / JS</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>2026년 최신 웹 개발 입문</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              아직도 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">슬라이드만</span> 보고<br />
              수업하고 있다고?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              실제 기업에서 사용 중인 프로젝트 형식의 웹앱 슬라이드로 배워요.<br />
              우리가 만든 최종 미니 프로젝트 실행본과 미리 구성된 코드 템플릿을 통해 HTML / CSS / JS 각 작업 내에 새롭게 추가되는 내용을 수업시간에 즉시 입력하며 결과를 확인할 수 있어요.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>각 슬라이드별 코드 예시 제공</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>실시간 결과 확인</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>인터랙티브 데모</span>
              </div>
            </div>
          </motion.div>

          {/* Slides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/slide/${slide.id}`}>
                  <div className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-mono font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {slide.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {slide.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {slide.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span>예제 코드 & 데모 포함</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 오늘 환영 시 예정한 미니 프로젝트</h3>
              <p className="text-gray-600 mb-4">
                이 슬라이드에서 각 개념을 배우고, 마지막에 Todo 앱을 만들어봅니다!
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">HTML 구조</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">CSS 스타일링</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">JavaScript 기능</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">이벤트 처리</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </IntroReveal>
  );
}