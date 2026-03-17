import { useEffect, useRef, useState } from 'react';

/* ───────────── 10번 슬라이드 개별 미리보기 ───────────── */

function TransitionPreview() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer">
        color + scale
      </button>
      <div className="w-24 h-24 bg-gray-100 rounded-xl cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-xs font-mono text-gray-500">
        shadow + lift
      </div>
      <button className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm rounded hover:opacity-20 transition-opacity duration-500 cursor-pointer">
        opacity
      </button>
    </div>
  );
}

function AnimationPreview() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-orange-400 rounded-full animate-spin" />
        <span className="text-xs font-mono text-gray-500">spin</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-orange-400 rounded-full animate-ping" />
        <span className="text-xs font-mono text-gray-500">ping</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-24 h-10 bg-gray-950 rounded text-white text-xs font-mono flex items-center justify-center animate-pulse">
          pulse
        </div>
        <span className="text-xs font-mono text-gray-500">pulse</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-sm font-mono text-gray-700 animate-bounce">↕</div>
        <span className="text-xs font-mono text-gray-500">bounce</span>
      </div>
    </div>
  );
}

function TransformPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      {[
        { label: 'scale', cls: 'hover:scale-125' },
        { label: 'rotate', cls: 'hover:rotate-45' },
        { label: 'skew', cls: 'hover:skew-x-12' },
        { label: 'translate', cls: 'hover:translate-x-3 hover:-translate-y-3' },
      ].map(({ label, cls }) => (
        <div
          key={label}
          className={`w-20 h-20 bg-gray-950 text-white rounded-lg flex items-center justify-center text-xs font-mono cursor-pointer transition-transform duration-300 ${cls}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function IntersectionPreview() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 overflow-hidden">
      <p className="text-xs text-gray-400 font-mono mb-4">아래 박스들은 화면에 들어오면 나타납니다</p>
      <div className="space-y-3">
        {['첫 번째 요소', '두 번째 요소', '세 번째 요소'].map((label, i) => (
          <div
            key={i}
            ref={i === 0 ? ref : undefined}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`px-5 py-3 bg-gray-950 text-white text-sm font-medium rounded transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="mt-4 text-xs font-mono text-gray-400 hover:text-gray-700 underline"
      >
        다시 실행
      </button>
    </div>
  );
}

/* ───────────── 17번 슬라이드 개별 컴포넌트 미리보기 ───────────── */

function NavPreview() {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <nav className="flex items-center justify-between px-6 py-3 bg-gray-950 text-white">
        <span className="font-bold text-sm">MyApp</span>
        <ul className="flex gap-6 text-sm list-none m-0 p-0">
          {['홈', '소개', '작업'].map((item, i) => (
            <li key={item}>
              <a href="#" className={`no-underline transition-colors ${i === 0 ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="text-xs bg-orange-400 text-gray-950 font-bold px-3 py-1.5 rounded">시작하기</button>
      </nav>
    </div>
  );
}

function BreadcrumbPreview() {
  const items = ['홈', '상품', '운동화'];
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <ol className="flex items-center gap-1.5 text-sm list-none m-0 p-0">
        {items.map((item, i) => (
          <li key={item} className="flex items-center gap-1.5">
            {i < items.length - 1 ? (
              <>
                <a href="#" className="text-gray-600 hover:underline">{item}</a>
                <span className="text-gray-300">/</span>
              </>
            ) : (
              <span className="text-gray-900 font-semibold">{item}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-gray-950 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
      >
        모달 열기
      </button>
      <span className="text-xs text-gray-400 font-mono">버튼을 클릭해보세요</span>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-xl p-7 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">정말 삭제할까요?</h3>
            <p className="text-sm text-gray-500 mb-6">이 작업은 되돌릴 수 없습니다.</p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors">삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CardPreview() {
  return (
    <div className="max-w-xs border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm font-mono">thumbnail.jpg</span>
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-3">
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">완료</span>
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">React</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-1">프로젝트 제목</h3>
        <p className="text-sm text-gray-500">간단한 설명이 들어갑니다.</p>
      </div>
    </div>
  );
}

function SkeletonPreview() {
  return (
    <div className="max-w-xs border border-gray-200 rounded-xl overflow-hidden bg-white">
      <div className="h-36 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
      </div>
    </div>
  );
}

function PaginationPreview() {
  const [current, setCurrent] = useState(2);
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <nav className="flex items-center gap-1">
        <button
          onClick={() => setCurrent(p => Math.max(1, p - 1))}
          disabled={current === 1}
          className="min-w-[36px] h-9 px-2 border border-gray-200 rounded text-sm bg-white disabled:opacity-40 hover:bg-gray-100 transition-colors"
        >‹ 이전</button>
        {pages.map(p => (
          <button
            key={p}
            onClick={() => setCurrent(p)}
            className={`min-w-[36px] h-9 border rounded text-sm transition-colors ${
              current === p ? 'bg-gray-950 text-white border-gray-950' : 'bg-white border-gray-200 hover:bg-gray-100'
            }`}
          >{p}</button>
        ))}
        <button
          onClick={() => setCurrent(p => Math.min(5, p + 1))}
          disabled={current === 5}
          className="min-w-[36px] h-9 px-2 border border-gray-200 rounded text-sm bg-white disabled:opacity-40 hover:bg-gray-100 transition-colors"
        >다음 ›</button>
      </nav>
    </div>
  );
}

const demoComponents: Record<string, JSX.Element> = {
  '10-transition':   <TransitionPreview />,
  '10-animation':    <AnimationPreview />,
  '10-transform':    <TransformPreview />,
  '10-intersection': <IntersectionPreview />,
  '17-nav':          <NavPreview />,
  '17-breadcrumb':   <BreadcrumbPreview />,
  '17-modal':        <ModalPreview />,
  '17-card':         <CardPreview />,
  '17-skeleton':     <SkeletonPreview />,
  '17-pagination':   <PaginationPreview />,
};

export function BasicDemo({ slideId, demoId }: { slideId: string; demoId?: string }) {
  const demoContent: Record<string, JSX.Element> = {
    '02': (
      <div className="bg-white rounded-xl p-8 border-2 border-blue-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">안녕하세요!</h1>
        <p className="text-gray-600 mb-6">이것은 기본 HTML 문서 구조의 예시입니다.</p>
        
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            이 내용은 &lt;body&gt; 태그 안에 있으며, 화면에 표시됩니다.
          </p>
        </div>
      </div>
    ),
    '03': (
      <div className="bg-white rounded-xl p-8 border-2 border-green-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">가장 큰 제목 (h1)</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">두 번째 제목 (h2)</h2>
        <h3 className="text-2xl font-semibold text-gray-600 mb-4">세 번째 제목 (h3)</h3>
        
        <p className="text-gray-600 mb-4">
          이것은 단락(paragraph)입니다. <strong className="font-bold text-gray-800">굵은 텍스트</strong>와{' '}
          <em className="italic text-gray-700">기울임 텍스트</em>를 사용할 수 있습니다.
        </p>
        
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 bg-purple-50 p-4 rounded-r-lg">
          "이것은 인용문입니다. blockquote 태그를 사용했습니다."
        </blockquote>
      </div>
    ),
    '04': (
      <div className="bg-white rounded-xl p-8 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">링크와 이미지 예시</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline font-medium"
            >
              구글로 이동 →
            </a>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
              alt="코딩 이미지"
              className="w-full max-w-md rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">이미지 alt 속성: "코딩 이미지"</p>
          </div>
        </div>
      </div>
    ),
    '05': (
      <div className="bg-white rounded-xl p-8 border-2 border-orange-200">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold mb-2">웹사이트 제목 (header)</h1>
          <nav className="flex gap-4">
            <a href="#" className="hover:underline">홈</a>
            <a href="#" className="hover:underline">소개</a>
            <a href="#" className="hover:underline">연락처</a>
          </nav>
        </header>
        
        <main>
          <section className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-gray-800">섹션 제목 (section)</h2>
            <article className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2 text-gray-700">글 제목 (article)</h3>
              <p className="text-gray-600">글 내용이 여기에 들어갑니다...</p>
            </article>
          </section>
          
          <aside className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-sm text-gray-700">사이드바 내용 (aside)</p>
          </aside>
        </main>
        
        <footer className="mt-6 bg-gray-800 text-white p-4 rounded-lg text-center">
          <p className="text-sm">&copy; 2026 내 웹사이트 (footer)</p>
        </footer>
      </div>
    ),
    '06': (
      <div className="bg-white rounded-xl p-8 border-2 border-pink-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">CSS 선택자 예시</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-100 rounded-lg border-2 border-blue-500">
            <p className="text-blue-800">이 요소는 클래스 선택자로 스타일 적용</p>
          </div>
          
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium">
            :hover 가상 클래스 (마우스를 올려보세요)
          </button>
          
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 font-semibold">부모 요소</p>
            <p className="text-green-600 ml-4 mt-2">→ 자식 요소 (후손 선택자 적용)</p>
          </div>
        </div>
      </div>
    ),
    '07': (
      <div className="bg-white rounded-xl p-8 border-2 border-red-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6">박스 모델 시각화</h3>
        
        <div className="flex justify-center">
          <div className="relative">
            {/* Margin */}
            <div className="border-4 border-yellow-400 border-dashed p-8 bg-yellow-50">
              <div className="text-xs text-yellow-700 mb-2 font-semibold">MARGIN (바깥 여백)</div>
              
              {/* Border */}
              <div className="border-4 border-green-500 p-6 bg-green-50">
                <div className="text-xs text-green-700 mb-2 font-semibold">BORDER (테두리)</div>
                
                {/* Padding */}
                <div className="border-4 border-blue-400 border-dashed p-6 bg-blue-50">
                  <div className="text-xs text-blue-700 mb-2 font-semibold">PADDING (안쪽 여백)</div>
                  
                  {/* Content */}
                  <div className="bg-purple-500 text-white p-6 rounded text-center font-semibold">
                    CONTENT<br/>(내용)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-6 text-center">
          박스 모델은 margin → border → padding → content 순서로 구성됩니다
        </p>
      </div>
    ),
    '08': (
      <div className="bg-white rounded-xl p-8 border-2 border-indigo-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Flexbox 레이아웃</h3>
        
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">justify-content: space-between</p>
            <div className="flex justify-between gap-4 bg-indigo-50 p-4 rounded-lg">
              <div className="w-20 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
              <div className="w-20 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
              <div className="w-20 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">justify-content: center, align-items: center</p>
            <div className="flex justify-center items-center bg-purple-50 p-4 rounded-lg h-32">
              <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">중앙</div>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">flex: 1 (비율로 크기 지정)</p>
            <div className="flex gap-4 bg-pink-50 p-4 rounded-lg">
              <div className="flex-1 h-16 bg-pink-400 rounded-lg flex items-center justify-center text-white font-bold">flex: 1</div>
              <div className="flex-[2] h-16 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">flex: 2</div>
              <div className="flex-1 h-16 bg-pink-400 rounded-lg flex items-center justify-center text-white font-bold">flex: 1</div>
            </div>
          </div>
        </div>
      </div>
    ),
    '09': (
      <div className="bg-white rounded-xl p-8 border-2 border-teal-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6">반응형 레이아웃</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-teal-100 p-6 rounded-lg border-2 border-teal-500">
            <p className="text-teal-800 font-semibold">카드 1</p>
            <p className="text-sm text-teal-600 mt-2">창 크기를 조절해보세요!</p>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg border-2 border-teal-500">
            <p className="text-teal-800 font-semibold">카드 2</p>
            <p className="text-sm text-teal-600 mt-2">반응형으로 배치됩니다</p>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg border-2 border-teal-500">
            <p className="text-teal-800 font-semibold">카드 3</p>
            <p className="text-sm text-teal-600 mt-2">모바일/태블릿/데스크톱</p>
          </div>
        </div>
        
        <div className="mt-6 bg-teal-50 p-4 rounded-lg border border-teal-200">
          <p className="text-sm text-teal-800">
            <strong>현재 화면 크기:</strong>{' '}
            <span className="inline md:hidden">📱 모바일</span>
            <span className="hidden md:inline lg:hidden">📱 태블릿</span>
            <span className="hidden lg:inline">💻 데스크톱</span>
          </p>
        </div>
      </div>
    ),
    '14': (
      <div className="bg-white rounded-xl p-8 border-2 border-cyan-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">DOM 조작 예시</h3>
        
        <div className="space-y-4">
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('demo-text');
                if (el) el.textContent = '텍스트가 변경되었습니다!';
              }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              텍스트 변경
            </button>
            <p id="demo-text" className="mt-2 text-gray-700">원본 텍스트</p>
          </div>
          
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('demo-box');
                if (el) el.classList.toggle('bg-green-500');
              }}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg"
            >
              스타일 토글
            </button>
            <div id="demo-box" className="mt-2 w-32 h-32 bg-gray-300 rounded-lg transition-colors"></div>
          </div>
        </div>
      </div>
    ),
    '15': (
      <div className="bg-white rounded-xl p-8 border-2 border-violet-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">이벤트 처리 예시</h3>
        
        <div className="space-y-4">
          <div>
            <button
              onClick={() => alert('클릭 이벤트 발생!')}
              className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium"
            >
              클릭해보세요!
            </button>
          </div>
          
          <div>
            <input
              type="text"
              placeholder="입력하면 아래에 표시됩니다"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none"
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                const output = document.getElementById('input-output');
                if (output) output.textContent = target.value;
              }}
            />
            <p className="mt-2 text-gray-700">입력값: <span id="input-output" className="font-semibold text-violet-600"></span></p>
          </div>
        </div>
      </div>
    ),
  };

  const content = demoId && demoComponents[demoId]
    ? demoComponents[demoId]
    : demoContent[slideId] ?? null;

  if (!content) return null;

  return (
    <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-4">
      <p className="font-mono text-xs text-orange-400 tracking-widest uppercase mb-3">미리보기</p>
      {content}
    </div>
  );
}
