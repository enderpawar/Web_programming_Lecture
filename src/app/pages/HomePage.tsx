import { Link } from 'react-router';
import { slides } from '../data/slides';
import { ArrowRight, Code2, Sparkles, Zap, Rocket, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { IntroReveal } from '../components/IntroReveal';

export function HomePage() {
  return (
    <IntroReveal>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.02) 35px, rgba(59, 130, 246, 0.02) 70px)'
          }}></div>
        </div>

        {/* Mesh Gradient Background */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[128px]"></div>
        </div>

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900 tracking-tight">GRE STUDIO · WEB PRO</h1>
                <p className="text-xs text-blue-600 font-semibold">WEEK 1 · HTML / CSS / JS</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>2026년 최신 웹 개발 입문</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              아직도{' '}
              <span className="text-blue-600">
                슬라이드만
              </span>
              {' '}보고<br />
              수업하고 있다고?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              실제 기업에서 사용 중인 프로젝트 형식의 웹앱 슬라이드로 배워요.<br />
              <span className="text-cyan-600 font-bold">HTML · CSS · JavaScript</span>를 실시간으로 입력하며 결과를 확인할 수 있어요.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {[
                { icon: CheckCircle2, text: '각 슬라이드별 코드 예시' },
                { icon: Zap, text: '실시간 결과 확인' },
                { icon: Rocket, text: '인터랙티브 데모' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white backdrop-blur-xl px-6 py-3 rounded-lg border border-blue-100 shadow-sm"
                >
                  <item.icon className="w-5 h-5 text-cyan-600" />
                  <span className="text-gray-900 font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Slides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
              >
                <Link to={`/slide/${slide.id}`}>
                  <div className="group bg-white backdrop-blur-xl rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-md shadow-sm">
                        {slide.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {slide.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                        <span className="font-semibold">예제 코드 & 데모 포함</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 text-center relative"
          >
            <div className="relative inline-block max-w-3xl">
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 border border-blue-500 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">오늘 진행 예정한 미니 프로젝트</h3>
                </div>
                <p className="text-blue-100 mb-6 text-lg font-medium">
                  이 슬라이드에서 각 개념을 배우고, 마지막에 <span className="text-white font-black">Todo 앱</span>을 만들어봅니다!
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    { label: 'HTML 구조', color: 'bg-cyan-500' },
                    { label: 'CSS 스타일링', color: 'bg-emerald-500' },
                    { label: 'JavaScript 기능', color: 'bg-blue-500' },
                    { label: '이벤트 처리', color: 'bg-indigo-500' }
                  ].map((tag, i) => (
                    <span 
                      key={i}
                      className={`${tag.color} text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </IntroReveal>
  );
}