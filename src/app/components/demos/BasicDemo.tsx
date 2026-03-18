import React, { useEffect, useRef, useState } from 'react';

/* ───────────── 08번 슬라이드 Flexbox 플레이그라운드 ───────────── */

function FlexboxPlayground() {
  const [direction, setDirection] = useState<string>('row');
  const [wrap, setWrap] = useState<string>('nowrap');
  const [justify, setJustify] = useState<string>('flex-start');
  const [alignItems, setAlignItems] = useState<string>('stretch');
  const [alignContent, setAlignContent] = useState<string>('stretch');
  const [gap, setGap] = useState<string>('8px');

  const controls: {
    label: string;
    desc: string;
    hint: React.ReactNode;
    value: string;
    set: (v: string) => void;
    options: string[];
    optionHints?: Record<string, string>;
  }[] = [
    {
      label: 'flex-direction',
      desc: '주축 방향',
      hint: <>아이템을 나열하는 <strong>방향</strong>을 결정합니다. <strong>row</strong>는 가로(→), <strong>column</strong>은 세로(↓), <strong>-reverse</strong>는 반대 방향입니다.</>,
      value: direction,
      set: setDirection,
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      optionHints: {
        'row': '→ 왼→오른쪽',
        'row-reverse': '← 오른→왼쪽',
        'column': '↓ 위→아래',
        'column-reverse': '↑ 아래→위',
      },
    },
    {
      label: 'flex-wrap',
      desc: '줄바꿈',
      hint: <>아이템이 컨테이너 너비를 넘었을 때 <strong>줄바꿈</strong>할지 결정합니다. <strong>nowrap</strong>은 한 줄로 강제, <strong>wrap</strong>은 다음 줄로 내려보냅니다.</>,
      value: wrap,
      set: setWrap,
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      optionHints: {
        'nowrap': '한 줄 고정',
        'wrap': '아래로 줄바꿈',
        'wrap-reverse': '위로 줄바꿈',
      },
    },
    {
      label: 'justify-content',
      desc: '주축 정렬',
      hint: <><strong>주축(flex-direction 방향)</strong>으로 아이템 사이의 <strong>빈 공간을 어떻게 배분</strong>할지 결정합니다. 컨테이너에 여유 공간이 있어야 효과가 보입니다.</>,
      value: justify,
      set: setJustify,
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      optionHints: {
        'flex-start': '시작점 정렬',
        'flex-end': '끝점 정렬',
        'center': '가운데 정렬',
        'space-between': '양 끝 고정, 사이 균등',
        'space-around': '각 아이템 양쪽 균등',
        'space-evenly': '모든 간격 완전 균등',
      },
    },
    {
      label: 'align-items',
      desc: '교차축 정렬 (한 줄)',
      hint: <><strong>교차축(주축과 수직 방향)</strong>으로 아이템을 정렬합니다. row 방향이면 <strong>세로</strong> 정렬을 담당합니다. 한 줄일 때 사용합니다.</>,
      value: alignItems,
      set: setAlignItems,
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      optionHints: {
        'stretch': '컨테이너 높이에 맞게 늘림',
        'flex-start': '교차축 시작점',
        'flex-end': '교차축 끝점',
        'center': '교차축 가운데',
        'baseline': '텍스트 기준선 맞춤',
      },
    },
    {
      label: 'align-content',
      desc: '교차축 정렬 (여러 줄)',
      hint: <><strong>flex-wrap: wrap</strong>으로 여러 줄이 생겼을 때, <strong>행(row) 전체 묶음</strong>을 교차축 방향으로 배분합니다. 한 줄일 땐 아무 효과가 없습니다.</>,
      value: alignContent,
      set: setAlignContent,
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      optionHints: {
        'stretch': '행을 늘려 채움',
        'flex-start': '위쪽 정렬',
        'flex-end': '아래쪽 정렬',
        'center': '세로 가운데',
        'space-between': '첫/끝 행 끝에 붙고 사이 균등',
        'space-around': '각 행 위아래 균등',
      },
    },
    {
      label: 'gap',
      desc: '아이템 간격',
      hint: <>아이템과 아이템 사이의 <strong>간격(여백)</strong>을 설정합니다. margin으로 일일이 주는 대신 <strong>gap 하나</strong>로 모든 간격을 한번에 조절할 수 있습니다.</>,
      value: gap,
      set: setGap,
      options: ['0px', '4px', '8px', '16px', '24px', '32px'],
    },
  ];

  const COLORS = ['bg-orange-400', 'bg-gray-700', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-rose-400'];
  const isColumn = direction.includes('column');

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {controls.map(({ label, desc, hint, value, set, options, optionHints }) => (
          <div
            key={label}
            className={`bg-white border rounded-xl p-3 ${
              label === 'align-content' && wrap === 'nowrap'
                ? 'border-amber-300 bg-amber-50/50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-baseline gap-2 mb-1">
              <code className="text-xs font-mono text-orange-500 font-bold">{label}</code>
              <span className="text-[10px] text-gray-400">{desc}</span>
            </div>
            {/* 부가 설명 */}
            <p className="text-[11px] text-gray-600 leading-relaxed mb-2 break-keep">{hint}</p>
            {label === 'align-content' && wrap === 'nowrap' && (
              <p className="text-[10px] text-amber-600 font-mono mb-1.5">
                ⚠ flex-wrap: wrap 일 때만 작동합니다
              </p>
            )}
            <div className="flex flex-wrap gap-1 mb-1">
              {options.map(opt => (
                <button
                  key={opt}
                  onClick={() => set(opt)}
                  className={`text-[10px] font-mono px-2 py-1 rounded-md transition-all duration-150 ${
                    value === opt
                      ? 'bg-gray-950 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {/* 선택된 값의 힌트만 버튼 목록 아래에 표시 */}
            {optionHints?.[value] && (
              <p className="text-[10px] text-orange-500 font-mono">→ {optionHints[value]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Live Preview */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50/30 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">라이브 미리보기</p>
          <span className="text-[10px] font-mono text-gray-400">
            {isColumn
              ? 'column 방향'
              : wrap !== 'nowrap'
              ? '컨테이너 300px 고정 — 줄바꿈 확인'
              : '컨테이너 100% — justify-content 확인'}
          </span>
        </div>
        {/*
          nowrap: 컨테이너를 min-content로 자동 확장 → overflow-x 스크롤로 전체 보기
          wrap:   컨테이너를 300px 고정 → 줄바꿈이 시각적으로 발생
        */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 overflow-x-auto">
          <div
            className="transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: direction as React.CSSProperties['flexDirection'],
              flexWrap: wrap as React.CSSProperties['flexWrap'],
              justifyContent: justify,
              alignItems,
              alignContent,
              gap,
              // nowrap: 100% 너비로 justify-content 여분 공간 확보, 아이템 초과 시 가로 스크롤
              // wrap:   300px 고정으로 줄바꿈 강제
              width: isColumn ? '100%' : wrap !== 'nowrap' ? '300px' : '100%',
              // wrap일 때 높이를 키워야 align-content 효과가 보임
              height: isColumn ? 'auto' : wrap !== 'nowrap' ? '260px' : '140px',
              minHeight: isColumn ? '180px' : undefined,
            }}
          >
            {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, i) => {
              const baselineActive = alignItems === 'baseline' && !isColumn;
              const fontSize =
                baselineActive && (i === 1 || i === 4) ? '28px'
                : baselineActive && i === 3 ? '20px'
                : '14px';
              const sample =
                baselineActive
                  ? (i === 1 ? 'Ag' : i === 3 ? 'by' : i === 4 ? 'Qp' : `${letter}g`)
                  : letter;

              return (
                <div
                  key={letter}
                  className={`${COLORS[i]} text-white font-bold rounded-lg flex justify-center transition-all duration-300 ${
                    baselineActive ? 'items-end pb-2' : 'items-center'
                  }`}
                  style={{
                    width: isColumn ? '100%' : '64px',
                    height: isColumn ? '44px' : '64px',
                    minWidth: isColumn ? undefined : '64px',
                    minHeight: isColumn ? '44px' : undefined,
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize, lineHeight: 1 }}>
                    {sample}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Generated CSS */}
      <div className="bg-gray-950 rounded-xl p-4 text-xs font-mono leading-relaxed">
        <span className="text-gray-500">.container {'{'}</span>
        <div className="pl-5 mt-1 space-y-0.5">
          <div><span className="text-sky-400">display</span><span className="text-gray-400">: </span><span className="text-orange-300">flex</span><span className="text-gray-400">;</span></div>
          <div><span className="text-sky-400">flex-direction</span><span className="text-gray-400">: </span><span className="text-orange-300">{direction}</span><span className="text-gray-400">;</span></div>
          <div><span className="text-sky-400">flex-wrap</span><span className="text-gray-400">: </span><span className="text-orange-300">{wrap}</span><span className="text-gray-400">;</span></div>
          <div><span className="text-gray-600">{'/* flex-flow: '}</span><span className="text-gray-500">{direction} {wrap}</span><span className="text-gray-600">{' */'}</span></div>
          <div><span className="text-sky-400">justify-content</span><span className="text-gray-400">: </span><span className="text-orange-300">{justify}</span><span className="text-gray-400">;</span></div>
          <div><span className="text-sky-400">align-items</span><span className="text-gray-400">: </span><span className="text-orange-300">{alignItems}</span><span className="text-gray-400">;</span></div>
          <div><span className="text-sky-400">align-content</span><span className="text-gray-400">: </span><span className="text-orange-300">{alignContent}</span><span className="text-gray-400">;</span></div>
          <div><span className="text-sky-400">gap</span><span className="text-gray-400">: </span><span className="text-orange-300">{gap}</span><span className="text-gray-400">;</span></div>
        </div>
        <span className="text-gray-500">{'}'}</span>
      </div>
    </div>
  );
}

/* ───────────── 14번 슬라이드 요소 선택 시각화 ───────────── */

function DOMSelectorPreview() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectors: { label: string; code: string; targets: string[]; desc: string }[] = [
    {
      label: 'getElementById',
      code: "getElementById('header')",
      targets: ['header'],
      desc: 'id="header" 인 요소 1개만 선택됩니다.',
    },
    {
      label: 'getElementsByClassName',
      code: "getElementsByClassName('item')",
      targets: ['item1', 'item2', 'item3'],
      desc: 'class="item" 인 요소를 모두 선택합니다.',
    },
    {
      label: "querySelector('.card')",
      code: "querySelector('.card')",
      targets: ['card'],
      desc: 'class="card" 인 요소 중 첫 번째 하나만 선택됩니다.',
    },
    {
      label: "querySelectorAll('button')",
      code: "querySelectorAll('button')",
      targets: ['btn1', 'btn2'],
      desc: 'button 태그를 모두 선택합니다 (NodeList로 반환).',
    },
    {
      label: "querySelector('p')",
      code: "querySelector('p')",
      targets: ['p1'],
      desc: 'p 태그 중 첫 번째만 선택됩니다.',
    },
  ];

  const activeTargets = selectors.find(s => s.label === selected)?.targets ?? [];
  const activeDesc   = selectors.find(s => s.label === selected)?.desc ?? '';

  const highlight = (id: string) =>
    activeTargets.includes(id)
      ? 'ring-2 ring-orange-400 bg-orange-50 text-orange-700 font-semibold scale-[1.02]'
      : 'bg-gray-50 text-gray-600';

  return (
    <div className="space-y-4">
      {/* 미니 HTML 구조 */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-[10px] font-mono text-gray-400 mb-3">▼ 아래 선택자를 클릭하면 선택되는 요소가 강조됩니다</p>
        <div className="space-y-2 font-mono text-xs">
          {/* header */}
          <div id="header" className={`rounded-lg px-3 py-2 border transition-all duration-200 ${highlight('header')}`}>
            <span className="text-[10px] text-gray-400 mr-2">id="header"</span>
            🏠 Header 영역
          </div>
          {/* items */}
          <div className="pl-3 space-y-1.5">
            {[
              { id: 'item1', label: '① 항목 — class="item"' },
              { id: 'item2', label: '② 항목 — class="item"' },
              { id: 'item3', label: '③ 항목 — class="item"' },
            ].map(({ id, label }) => (
              <div key={id} className={`rounded-lg px-3 py-1.5 border transition-all duration-200 ${highlight(id)}`}>
                {label}
              </div>
            ))}
          </div>
          {/* card */}
          <div id="card" className={`rounded-lg px-3 py-2 border transition-all duration-200 ${highlight('card')}`}>
            <span className="text-[10px] text-gray-400 mr-2">class="card"</span>
            🃏 Card 컴포넌트
          </div>
          {/* buttons */}
          <div className="flex gap-2">
            {[
              { id: 'btn1', label: '버튼 1 — <button>' },
              { id: 'btn2', label: '버튼 2 — <button>' },
            ].map(({ id, label }) => (
              <div key={id} className={`flex-1 rounded-lg px-3 py-1.5 border transition-all duration-200 ${highlight(id)}`}>
                {label}
              </div>
            ))}
          </div>
          {/* paragraphs */}
          <div className={`rounded-lg px-3 py-1.5 border transition-all duration-200 ${highlight('p1')}`}>
            <span className="text-[10px] text-gray-400 mr-2">&lt;p&gt;</span>
            첫 번째 단락 텍스트
          </div>
          <div className={`rounded-lg px-3 py-1.5 border transition-all duration-200 ${highlight('p2')}`}>
            <span className="text-[10px] text-gray-400 mr-2">&lt;p&gt;</span>
            두 번째 단락 텍스트
          </div>
        </div>
      </div>

      {/* 선택자 버튼 */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-[10px] font-mono text-gray-400 mb-3">▼ 선택자를 클릭해보세요</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {selectors.map(s => (
            <button
              key={s.label}
              onClick={() => setSelected(prev => prev === s.label ? null : s.label)}
              className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all duration-150 ${
                selected === s.label
                  ? 'bg-gray-950 text-orange-400 border-gray-950'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
              }`}
            >
              {s.code}
            </button>
          ))}
          {selected && (
            <button onClick={() => setSelected(null)} className="text-[11px] font-mono px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-100">
              선택 해제
            </button>
          )}
        </div>
        {selected && (
          <div className="bg-gray-950 rounded-lg px-4 py-3 text-[11px] font-mono">
            <span className="text-orange-400">선택된 요소: </span>
            <span className="text-green-400">{activeTargets.length}개</span>
            <span className="text-gray-400 ml-3">→ {activeDesc}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────── 14번 슬라이드 DOM 플레이그라운드 ───────────── */

function DOMPlayground() {
  // ① textContent vs innerHTML
  const [displayText, setDisplayText] = useState('원본 텍스트입니다.');
  const [isHtml, setIsHtml] = useState(false);

  // ② classList
  const [activeClass, setActiveClass] = useState(false);
  const [highlightClass, setHighlightClass] = useState(false);
  const [largeClass, setLargeClass] = useState(false);

  // ③ setAttribute
  const [linkHref, setLinkHref] = useState('https://example.com');
  const [imgAlt, setImgAlt] = useState('기본 설명');

  // ④ createElement & appendChild
  const [listItems, setListItems] = useState(['기존 항목 1', '기존 항목 2']);
  const [itemCount, setItemCount] = useState(3);

  const activeClasses = [
    activeClass && 'bg-orange-400 text-white',
    highlightClass && 'ring-4 ring-orange-300',
    largeClass && 'text-2xl font-black',
  ].filter(Boolean).join(' ');

  const classNames = [
    activeClass && 'active',
    highlightClass && 'highlight',
    largeClass && 'large',
  ].filter(Boolean) as string[];

  const btnBase = 'text-[11px] font-mono px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer';
  const btnDark = `${btnBase} bg-gray-950 text-white border-gray-950 hover:bg-gray-700`;
  const btnOutline = `${btnBase} bg-white text-gray-700 border-gray-300 hover:bg-gray-100`;
  const btnRed = `${btnBase} bg-red-500 text-white border-red-500 hover:bg-red-600`;

  return (
    <div className="space-y-6 text-sm">

      {/* ① textContent / innerHTML */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
          ① textContent / innerHTML
        </p>
        <div className="min-h-[48px] bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-3 text-gray-800">
          {isHtml
            ? <span dangerouslySetInnerHTML={{ __html: displayText }} />
            : <span>{displayText}</span>
          }
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <button className={btnDark} onClick={() => { setDisplayText('textContent로 변경된 텍스트'); setIsHtml(false); }}>
            .textContent = "텍스트"
          </button>
          <button className={btnDark} onClick={() => { setDisplayText('<strong>굵게</strong> + <em style="color:#f97316">주황 기울임</em>'); setIsHtml(true); }}>
            .innerHTML = "&lt;strong&gt;...&lt;/em&gt;"
          </button>
          <button className={btnOutline} onClick={() => { setDisplayText('원본 텍스트입니다.'); setIsHtml(false); }}>
            초기화
          </button>
        </div>
        <p className="text-[10px] text-gray-400 font-mono">
          현재: {isHtml ? 'innerHTML (HTML 태그 해석 O)' : 'textContent (태그 무시, 순수 텍스트)'}
        </p>
      </div>

      {/* ② classList */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
          ② classList.add / remove / toggle
        </p>
        <div className={`rounded-xl px-6 py-5 mb-3 text-center border-2 border-dashed border-gray-200 transition-all duration-300 ${activeClasses || 'bg-gray-50 text-gray-500'}`}>
          <span className="font-mono text-sm">
            .box{classNames.length > 0 ? ` .${classNames.join(' .')}` : ' (클래스 없음)'}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className={btnDark} onClick={() => setActiveClass(true)}>classList.add('active')</button>
          <button className={btnOutline} onClick={() => setActiveClass(false)}>classList.remove('active')</button>
          <button className={activeClass ? btnRed : btnDark} onClick={() => setHighlightClass(v => !v)}>
            classList.toggle('highlight') → {highlightClass ? 'remove' : 'add'}
          </button>
          <button className={largeClass ? btnRed : btnDark} onClick={() => setLargeClass(v => !v)}>
            classList.toggle('large') → {largeClass ? 'remove' : 'add'}
          </button>
        </div>
      </div>

      {/* ③ setAttribute / getAttribute */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
          ③ setAttribute / getAttribute
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-mono text-gray-500">현재 href:</span>
            <a href={linkHref} target="_blank" rel="noopener noreferrer"
               className="text-[11px] font-mono text-blue-600 underline break-all">
              {linkHref}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-gray-500">alt 속성:</span>
            <span className="text-[11px] font-mono text-gray-700">"{imgAlt}"</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <button className={btnDark} onClick={() => setLinkHref('https://google.com')}>
            setAttribute('href', 'google.com')
          </button>
          <button className={btnDark} onClick={() => setLinkHref('https://naver.com')}>
            setAttribute('href', 'naver.com')
          </button>
          <button className={btnDark} onClick={() => setImgAlt('변경된 alt 텍스트')}>
            setAttribute('alt', '변경')
          </button>
          <button className={btnOutline} onClick={() => { setLinkHref('https://example.com'); setImgAlt('기본 설명'); }}>
            초기화
          </button>
        </div>
        <p className="text-[10px] font-mono text-gray-400">
          getAttribute('href') → "{linkHref}"
        </p>
      </div>

      {/* ④ createElement & appendChild / removeChild */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
          ④ createElement / appendChild / removeChild
        </p>
        <ul className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3 space-y-1.5 min-h-[60px]">
          {listItems.map((item, i) => (
            <li key={i} className={`flex items-center gap-2 text-[12px] font-mono ${i < 2 ? 'text-gray-500' : 'text-orange-600 font-semibold'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-gray-400' : 'bg-orange-400'}`} />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <button className={btnDark} onClick={() => {
            const label = `새로 추가된 항목 ${itemCount}`;
            setListItems(p => [...p, label]);
            setItemCount(c => c + 1);
          }}>
            createElement + appendChild
          </button>
          <button className={btnRed} onClick={() => {
            if (listItems.length > 2) setListItems(p => p.slice(0, -1));
          }} disabled={listItems.length <= 2}>
            removeChild (마지막 제거)
          </button>
          <button className={btnOutline} onClick={() => { setListItems(['기존 항목 1', '기존 항목 2']); setItemCount(3); }}>
            초기화
          </button>
        </div>
        <p className="text-[10px] font-mono text-gray-400 mt-2">
          주황색 = JS로 생성된 요소 / 회색 = 원래 있던 요소
        </p>
      </div>
    </div>
  );
}

/* ───────────── 15번 슬라이드 이벤트 리스너 플레이그라운드 ───────────── */

function EventPlayground() {
  const [clickLog, setClickLog] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hovered, setHovered] = useState(false);
  const [keyLog, setKeyLog] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const addLog = (setter: React.Dispatch<React.SetStateAction<string[]>>, msg: string) =>
    setter(prev => [`${new Date().toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })} ${msg}`, ...prev].slice(0, 4));

  const LogBox = ({ logs, label }: { logs: string[]; label: string }) => (
    <div className="mt-2 bg-gray-950 rounded-lg p-2 min-h-[52px]">
      <p className="text-[9px] font-mono text-gray-500 mb-1">{label}</p>
      {logs.length === 0
        ? <p className="text-[10px] font-mono text-gray-600 italic">— 아직 이벤트 없음 —</p>
        : logs.map((l, i) => <p key={i} className="text-[10px] font-mono text-green-400">{l}</p>)
      }
    </div>
  );

  const btnBase = 'text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">

      {/* ① click 이벤트 */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-1">① click 이벤트</p>
        <p className="text-[11px] text-gray-500 mb-3">
          <code className="bg-gray-100 px-1 rounded">#myBtn</code> 을 선택 →
          <code className="bg-gray-100 px-1 rounded ml-1">addEventListener('click', ...)</code>
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            id="myBtn"
            className={`${btnBase} bg-gray-950 text-white hover:bg-orange-400 hover:text-gray-950`}
            onClick={() => addLog(setClickLog, 'e.target → #myBtn 클릭됨')}
          >
            id="myBtn" 버튼
          </button>
          <button
            className={`${btnBase} bg-gray-100 text-gray-700 hover:bg-gray-200`}
            onClick={() => addLog(setClickLog, 'e.target → 다른 버튼 클릭됨')}
          >
            다른 버튼
          </button>
        </div>
        <LogBox logs={clickLog} label="console.log(e.target)" />
      </div>

      {/* ② input 이벤트 */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-1">② input 이벤트</p>
        <p className="text-[11px] text-gray-500 mb-3">
          <code className="bg-gray-100 px-1 rounded">.search-input</code> 선택 →
          <code className="bg-gray-100 px-1 rounded ml-1">addEventListener('input', ...)</code>
        </p>
        <input
          className="search-input w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-orange-400"
          placeholder="타이핑해보세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="mt-2 bg-gray-950 rounded-lg p-2 min-h-[52px]">
          <p className="text-[9px] font-mono text-gray-500 mb-1">console.log(e.target.value)</p>
          <p className="text-[10px] font-mono text-green-400">
            {inputValue ? `"${inputValue}"` : <span className="text-gray-600 italic">— 아직 입력 없음 —</span>}
          </p>
        </div>
      </div>

      {/* ③ mouseenter / mouseleave */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-1">③ mouseenter / mouseleave</p>
        <p className="text-[11px] text-gray-500 mb-3">
          <code className="bg-gray-100 px-1 rounded">.box</code> 위에 마우스를 올려보세요
        </p>
        <div
          className={`box rounded-xl h-16 flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 cursor-pointer select-none ${hovered ? 'bg-orange-400 text-gray-950 scale-105' : 'bg-gray-100 text-gray-500'}`}
          onMouseEnter={() => { setHovered(true); addLog(setKeyLog, 'mouseenter → bg = orange'); }}
          onMouseLeave={() => { setHovered(false); addLog(setKeyLog, 'mouseleave → bg = gray'); }}
        >
          {hovered ? '🟠 mouseenter 발생!' : '마우스를 올려보세요'}
        </div>
        <LogBox logs={keyLog} label="이벤트 로그" />
      </div>

      {/* ④ submit + querySelectorAll */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-1">④ submit + querySelectorAll</p>
        <p className="text-[11px] text-gray-500 mb-2">
          폼 제출 시 <code className="bg-gray-100 px-1 rounded">e.preventDefault()</code> 로 새로고침 방지
        </p>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(inputValue || '(빈 값)'); }} className="flex gap-2 mb-2">
          <input className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-orange-400" placeholder="이름 입력..." />
          <button type="submit" className={`${btnBase} bg-gray-950 text-white hover:bg-orange-400 hover:text-gray-950`}>제출</button>
        </form>
        <p className="text-[11px] text-gray-500 mb-2">querySelectorAll('.item') 로 여러 항목 동시 연결:</p>
        <div className="flex gap-1.5 flex-wrap">
          {['항목 A', '항목 B', '항목 C'].map(item => (
            <button
              key={item}
              className={`item text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all ${selectedItem === item ? 'bg-gray-950 text-white border-gray-950' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-2 bg-gray-950 rounded-lg p-2 min-h-[40px]">
          <p className="text-[10px] font-mono text-green-400">
            {submitted ? `submit → 제출됨 | ` : ''}{selectedItem ? `e.target.textContent → "${selectedItem}"` : <span className="text-gray-600 italic">— 항목을 클릭해보세요 —</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 05번 슬라이드 시맨틱 태그 미리보기 ───────────── */

function SemanticTagsPreview() {
  const tags: {
    tag: string;
    badgeColor: string;
    border: string;
    role: string;
    desc: string;
    preview: React.ReactNode;
  }[] = [
    {
      tag: '<header>',
      badgeColor: 'bg-gray-900 text-white',
      border: 'border-gray-200',
      role: '헤더',
      desc: '페이지 최상단 · 로고, 내비게이션 포함',
      preview: (
        <div className="bg-gray-900 text-white rounded-lg px-4 py-2.5 flex items-center justify-between">
          <span className="font-bold text-sm">🌐 MyBlog</span>
          <div className="flex gap-3 text-xs text-gray-300">
            <span>홈</span><span>소개</span><span>연락처</span>
          </div>
        </div>
      ),
    },
    {
      tag: '<nav>',
      badgeColor: 'bg-gray-700 text-white',
      border: 'border-gray-200',
      role: '내비게이션',
      desc: '링크 목록 · 메뉴, 탭, 사이드 내비게이션',
      preview: (
        <div className="bg-white border border-gray-200 rounded-lg p-2 flex gap-1">
          {['홈', '제품', '가격', '고객 사례', '로그인'].map((item, i) => (
            <span key={item} className={`text-xs px-3 py-1.5 rounded-md font-medium cursor-pointer ${i === 0 ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      tag: '<main>',
      badgeColor: 'bg-blue-600 text-white',
      border: 'border-blue-100',
      role: '메인 콘텐츠',
      desc: '페이지의 핵심 콘텐츠 · 페이지당 하나만',
      preview: (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h2 className="text-sm font-bold text-blue-900 mb-1">페이지 제목</h2>
          <p className="text-xs text-blue-700 leading-relaxed">여기에 핵심 콘텐츠가 들어갑니다. header와 footer를 제외한 주요 내용 전체입니다.</p>
        </div>
      ),
    },
    {
      tag: '<section>',
      badgeColor: 'bg-sky-500 text-white',
      border: 'border-sky-100',
      role: '섹션',
      desc: '주제별로 묶인 콘텐츠 블록 · h2/h3 제목과 함께 사용',
      preview: (
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 space-y-1.5">
          <h3 className="text-xs font-bold text-sky-800 border-b border-sky-200 pb-1">📌 인기 강좌</h3>
          <p className="text-xs text-sky-700">HTML · CSS · JavaScript 강좌 목록이 이 섹션에 표시됩니다.</p>
        </div>
      ),
    },
    {
      tag: '<article>',
      badgeColor: 'bg-indigo-500 text-white',
      border: 'border-indigo-100',
      role: '아티클',
      desc: '독립적인 글·카드·뉴스 · 단독으로도 의미 있는 콘텐츠',
      preview: (
        <div className="bg-white border border-indigo-200 rounded-xl p-3 shadow-sm max-w-xs">
          <div className="flex gap-2 mb-2">
            <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">CSS</span>
            <span className="text-[10px] text-gray-400">2026.03.17</span>
          </div>
          <h4 className="text-xs font-bold text-gray-800 mb-1">Flexbox 완벽 가이드</h4>
          <p className="text-[10px] text-gray-500 leading-relaxed">Flexbox의 모든 속성을 한 곳에 정리했습니다.</p>
        </div>
      ),
    },
    {
      tag: '<aside>',
      badgeColor: 'bg-amber-500 text-white',
      border: 'border-amber-100',
      role: '사이드바',
      desc: '부가 정보 · 광고, 관련 링크, 프로필 위젯',
      preview: (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 max-w-[180px]">
          <p className="text-[10px] font-bold text-amber-800 mb-1.5">📎 관련 글</p>
          {['CSS Grid 입문', 'JS 이벤트 총정리', '반응형 웹 만들기'].map(t => (
            <p key={t} className="text-[10px] text-amber-700 underline cursor-pointer mb-0.5">→ {t}</p>
          ))}
        </div>
      ),
    },
    {
      tag: '<footer>',
      badgeColor: 'bg-gray-600 text-white',
      border: 'border-gray-200',
      role: '푸터',
      desc: '페이지 최하단 · 저작권, 연락처, 링크 모음',
      preview: (
        <div className="bg-gray-800 text-gray-300 rounded-lg px-4 py-2.5 flex items-center justify-between">
          <span className="text-[10px]">© 2026 MyBlog. All rights reserved.</span>
          <div className="flex gap-3 text-[10px] text-gray-400">
            <span className="underline cursor-pointer">이용약관</span>
            <span className="underline cursor-pointer">개인정보처리방침</span>
          </div>
        </div>
      ),
    },
    {
      tag: '<div>',
      badgeColor: 'bg-gray-100 text-gray-400',
      border: 'border-dashed border-gray-300',
      role: '(의미 없음)',
      desc: '범용 컨테이너 — 시맨틱 의미 없음, 레이아웃 목적으로만 사용',
      preview: (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
          <p className="text-[10px] text-gray-400 font-mono text-center">&lt;div&gt; — 브라우저는 이 태그에 아무 의미도 부여하지 않습니다</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-xs font-mono text-gray-400">각 태그의 역할 · 설명 · 실제 화면 예시</p>
      {tags.map(({ tag, badgeColor, border, role, desc, preview }) => (
        <div key={tag} className={`rounded-xl border ${border} overflow-hidden`}>
          {/* 태그 정보 헤더 */}
          <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 border-b border-gray-100">
            <code className={`${badgeColor} px-2.5 py-1 font-mono text-xs font-bold rounded-md whitespace-nowrap`}>
              {tag}
            </code>
            <span className="text-xs font-semibold text-gray-800">{role}</span>
            <span className="text-xs text-gray-400 hidden sm:inline">{desc}</span>
          </div>
          {/* 실제 렌더링 예시 */}
          <div className="p-3 bg-white">
            {preview}
          </div>
        </div>
      ))}
    </div>
  );
}

function LayoutPreview() {
  return (
    <div className="w-full rounded-xl overflow-hidden border-2 border-gray-200 text-xs font-mono select-none">
      {/* header */}
      <div className="bg-gray-900 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">&lt;header&gt;</span>
            <span className="font-bold text-sm">MyWebsite</span>
          </div>
          {/* nav */}
          <div className="border border-gray-600 rounded px-2 py-1">
            <span className="text-[10px] text-gray-500 block mb-1">&lt;nav&gt;</span>
            <div className="flex gap-3">
              {['홈', '소개', '연락처'].map((item) => (
                <span key={item} className="text-white text-[11px] hover:text-orange-400 cursor-pointer transition-colors">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* main + aside */}
      <div className="flex gap-0 border-t-2 border-gray-200">
        {/* main */}
        <div className="flex-1 bg-white p-3 border-r border-gray-200">
          <span className="text-[10px] text-blue-500 border border-blue-200 rounded px-1.5 py-0.5 bg-blue-50">&lt;main&gt;</span>
          {/* section */}
          <div className="mt-2 border-2 border-blue-300 rounded-lg p-3 bg-blue-50/50">
            <span className="text-[10px] text-blue-400 border border-blue-300 rounded px-1 py-0.5 bg-white">&lt;section&gt;</span>
            <p className="text-[11px] text-blue-700 font-semibold mt-1 mb-2">오늘의 강의</p>
            {/* article 1 */}
            <div className="border border-sky-300 rounded-lg p-2.5 bg-white mb-2">
              <span className="text-[10px] text-sky-500 border border-sky-200 rounded px-1 py-0.5">&lt;article&gt;</span>
              <h3 className="text-[12px] font-bold text-gray-800 mt-1">HTML 기초</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">태그의 구조와 의미를 이해합니다.</p>
            </div>
            {/* article 2 */}
            <div className="border border-sky-300 rounded-lg p-2.5 bg-white">
              <span className="text-[10px] text-sky-500 border border-sky-200 rounded px-1 py-0.5">&lt;article&gt;</span>
              <h3 className="text-[12px] font-bold text-gray-800 mt-1">CSS 레이아웃</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">Flexbox로 배치를 잡습니다.</p>
            </div>
          </div>
        </div>

        {/* aside */}
        <div className="w-36 bg-amber-50 p-3 border-l border-amber-200">
          <span className="text-[10px] text-amber-600 border border-amber-300 rounded px-1.5 py-0.5 bg-white">&lt;aside&gt;</span>
          <p className="text-[11px] font-semibold text-amber-700 mt-2 mb-1.5">관련 링크</p>
          {['MDN Docs', 'W3Schools', 'CSS Tricks'].map((link) => (
            <p key={link} className="text-[10px] text-amber-600 underline cursor-pointer mb-1">→ {link}</p>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="bg-gray-700 text-gray-300 px-4 py-2.5 flex items-center justify-between border-t-2 border-gray-200">
        <span className="text-[10px] text-gray-500 border border-gray-600 rounded px-1.5 py-0.5">&lt;footer&gt;</span>
        <span className="text-[11px]">© 2026 MyWebsite. All rights reserved.</span>
      </div>
    </div>
  );
}

/* ───────────── 10번 슬라이드 개별 미리보기 ───────────── */

function BoxShadowPreview() {
  const presets = [
    { name: '약한', x: 0, y: 2, blur: 8, spread: 0, a: 0.10 },
    { name: '떠있음', x: 0, y: 12, blur: 30, spread: 0, a: 0.18 },
    { name: '하드', x: 0, y: 8, blur: 0, spread: 0, a: 0.18 },
  ] as const;

  const colors = [
    { name: 'black', rgb: [0, 0, 0] as const },
    { name: 'blue', rgb: [59, 130, 246] as const },   // #3b82f6
    { name: 'purple', rgb: [168, 85, 247] as const }, // #a855f7
    { name: 'orange', rgb: [251, 146, 60] as const }, // #fb923c
  ] as const;

  const [preset, setPreset] = useState<(typeof presets)[number]>(presets[0]);
  const [hover, setHover] = useState(false);
  const [blur, setBlur] = useState<number>(presets[0].blur);
  const [spread, setSpread] = useState<number>(presets[0].spread);
  const [color, setColor] = useState<(typeof colors)[number]>(colors[0]);
  const [alpha, setAlpha] = useState<number>(presets[0].a);

  useEffect(() => {
    setBlur(preset.blur);
    setSpread(preset.spread);
    setAlpha(preset.a);
  }, [preset]);

  const rgba = `rgba(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]},${alpha.toFixed(2)})`;
  const shadow = `${preset.x}px ${preset.y}px ${blur}px ${spread}px ${rgba}`;
  const hoverShadow = `0px 12px 30px 0px ${rgba}`;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {presets.map(p => (
          <button
            key={p.name}
            onClick={() => setPreset(p)}
            className={`text-[11px] font-mono px-3 py-1.5 rounded-md border transition-colors ${
              preset.name === p.name ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {p.name}
          </button>
        ))}
        <span className="text-[10px] text-gray-400 font-mono">hover: 그림자 + 살짝 위로</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-3">
        <div className="flex items-baseline justify-between mb-2">
          <code className="text-xs font-mono text-orange-500 font-bold">color (rgba)</code>
          <span className="text-[10px] text-gray-400 font-mono">{rgba}</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {colors.map(c => (
            <button
              key={c.name}
              onClick={() => setColor(c)}
              className={`text-[10px] font-mono px-2 py-1 rounded-md border transition-colors ${
                color.name === c.name ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mr-1 align-middle"
                style={{ background: `rgb(${c.rgb[0]},${c.rgb[1]},${c.rgb[2]})` }}
              />
              {c.name}
            </button>
          ))}
          <span className="text-[10px] text-gray-400 font-mono ml-2">alpha</span>
          {[0.06, 0.10, 0.14, 0.18, 0.24, 0.32].map(v => (
            <button
              key={v}
              onClick={() => setAlpha(v)}
              className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${
                alpha === v ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {v.toFixed(2)}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-gray-600 leading-relaxed mt-2 break-keep">
          <strong>색 그림자</strong>는 카드에 “브랜드 톤”을 얹을 때 유용합니다. 다만 alpha(투명도)가 높으면 과해 보일 수 있어요.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-white border border-gray-200 rounded-xl p-3">
          <div className="flex items-baseline justify-between mb-2">
            <code className="text-xs font-mono text-orange-500 font-bold">blur</code>
            <span className="text-[10px] text-gray-400 font-mono">{blur}px</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {[0, 4, 8, 16, 24, 32, 48].map(v => (
              <button
                key={v}
                onClick={() => setBlur(v)}
                className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${
                  blur === v ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed mt-2 break-keep">
            <strong>경계(가장자리)</strong>를 얼마나 <strong>부드럽게</strong> 퍼뜨릴지. 값이 커질수록 그림자가 <strong>뿌옇게 넓어집니다</strong>.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-3">
          <div className="flex items-baseline justify-between mb-2">
            <code className="text-xs font-mono text-orange-500 font-bold">spread</code>
            <span className="text-[10px] text-gray-400 font-mono">{spread}px</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {[-12, -8, -4, 0, 4, 8, 12].map(v => (
              <button
                key={v}
                onClick={() => setSpread(v)}
                className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${
                  spread === v ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed mt-2 break-keep">
            그림자 <strong>덩어리 크기</strong>를 키우거나 줄입니다. <strong>+</strong>면 두꺼워지고, <strong>-</strong>면 타이트해집니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-[10px] font-mono text-gray-400 mb-3">기본 상태</p>
          <div
            className="rounded-xl bg-white border border-gray-100 p-5"
            style={{ boxShadow: shadow }}
          >
            <p className="text-sm font-semibold text-gray-900 mb-1">Card</p>
            <p className="text-xs text-gray-500">box-shadow로 깊이감</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-[10px] font-mono text-gray-400 mb-3">hover 상태 (마우스를 올려보세요)</p>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="rounded-xl bg-white border border-gray-100 p-5 transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: hover ? hoverShadow : shadow,
              transform: hover ? 'translateY(-4px)' : 'translateY(0)',
            }}
          >
            <p className="text-sm font-semibold text-gray-900 mb-1">Hover me</p>
            <p className="text-xs text-gray-500">shadow + lift</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 rounded-xl p-3 text-[11px] font-mono text-gray-300">
        <div className="text-gray-500 mb-1">현재 값</div>
        <div><span className="text-sky-300">box-shadow</span>: <span className="text-orange-300">{shadow}</span>;</div>
        <div className="text-gray-600 mt-1">x y blur spread color</div>
      </div>
    </div>
  );
}

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

function DropdownPreview() {
  const options = ['🍎 Apple', '🍊 Orange', '🍋 Lemon', '🍇 Grape'];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-4">
      <div className="relative inline-block">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-gray-400 transition-colors"
        >
          <span>{selected ?? '옵션 선택'}</span>
          <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>
        {open && (
          <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px] py-1 list-none m-0 p-0">
            {options.map(opt => (
              <li
                key={opt}
                onClick={() => { setSelected(opt); setOpen(false); }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${selected === opt ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
              >{opt}</li>
            ))}
          </ul>
        )}
      </div>
      <span className="text-xs text-gray-400 font-mono mt-2">클릭해서 선택해보세요</span>
    </div>
  );
}

function BadgePreview() {
  const badges = [
    { label: '완료', cls: 'bg-green-100 text-green-800' },
    { label: '오류', cls: 'bg-red-100 text-red-800' },
    { label: '대기', cls: 'bg-yellow-100 text-yellow-800' },
    { label: '진행중', cls: 'bg-blue-100 text-blue-800' },
  ];
  const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind', 'Vite']);
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
      <div>
        <p className="text-xs text-gray-400 font-mono mb-2">Badge — 상태 표시</p>
        <div className="flex flex-wrap gap-2">
          {badges.map(b => (
            <span key={b.label} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${b.cls}`}>{b.label}</span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 font-mono mb-2">Chip — × 버튼으로 제거 가능</p>
        <div className="flex flex-wrap gap-2">
          {chips.map(c => (
            <span key={c} className="inline-flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              {c}
              <button onClick={() => setChips(prev => prev.filter(x => x !== c))} className="text-gray-400 hover:text-gray-700 text-base leading-none ml-0.5">×</button>
            </span>
          ))}
          {chips.length === 0 && <span className="text-xs text-gray-400 font-mono">전부 제거되었습니다</span>}
        </div>
      </div>
    </div>
  );
}

function ToastPreview() {
  const [toasts, setToasts] = useState<{ id: number; msg: string; color: string }[]>([]);
  const show = (msg: string, color: string) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, color }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3000);
  };
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex flex-wrap gap-2 mb-3">
        <button onClick={() => show('저장되었습니다 ✓', 'bg-green-500')} className="px-3 py-1.5 text-xs font-medium bg-green-500 text-white rounded hover:bg-green-600 transition-colors">저장</button>
        <button onClick={() => show('오류가 발생했습니다', 'bg-red-500')} className="px-3 py-1.5 text-xs font-medium bg-red-500 text-white rounded hover:bg-red-600 transition-colors">오류</button>
        <button onClick={() => show('새 알림이 있습니다', 'bg-blue-500')} className="px-3 py-1.5 text-xs font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">알림</button>
      </div>
      <div className="space-y-2 min-h-[40px]">
        {toasts.map(t => (
          <div key={t.id} className={`${t.color} text-white text-sm px-4 py-2.5 rounded-lg shadow flex items-center justify-between`}>
            <span>{t.msg}</span>
            <button onClick={() => setToasts(p => p.filter(x => x.id !== t.id))} className="ml-3 opacity-70 hover:opacity-100 text-xs">×</button>
          </div>
        ))}
        {toasts.length === 0 && <p className="text-xs text-gray-400 font-mono">버튼을 클릭하면 알림이 표시됩니다 (3초 후 자동 사라짐)</p>}
      </div>
    </div>
  );
}

function FabPreview() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<string | null>(null);
  const subs = [
    { label: '♥', color: 'bg-pink-500 hover:bg-pink-600', msg: '좋아요를 눌렀습니다!' },
    { label: '★', color: 'bg-yellow-500 hover:bg-yellow-600', msg: '즐겨찾기 추가!' },
    { label: '↗', color: 'bg-blue-500 hover:bg-blue-600', msg: '공유 링크 복사!' },
  ];
  const handleSub = (msg: string) => {
    setLog(msg);
    setOpen(false);
    setTimeout(() => setLog(null), 2000);
  };
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-end gap-6 min-h-[140px]">
      <div className="relative flex flex-col items-center gap-2">
        {open && (
          <div className="flex flex-col gap-2 mb-1">
            {subs.map(s => (
              <button
                key={s.label}
                onClick={() => handleSub(s.msg)}
                className={`w-10 h-10 rounded-full ${s.color} text-white shadow-md transition-all`}
              >{s.label}</button>
            ))}
          </div>
        )}
        <button
          onClick={() => setOpen(o => !o)}
          className={`w-14 h-14 rounded-full bg-gray-950 text-white text-2xl shadow-lg hover:shadow-xl transition-all ${open ? 'rotate-45' : ''}`}
          style={{ transition: 'transform 0.25s, box-shadow 0.2s' }}
        >＋</button>
      </div>
      <div className="flex-1">
        {log
          ? <p className="text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg">{log}</p>
          : <p className="text-xs text-gray-400 font-mono">＋ 버튼을 클릭해보세요</p>}
      </div>
    </div>
  );
}

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
  '05-semantic':     <SemanticTagsPreview />,
  '05-layout':       <LayoutPreview />,
  '08-playground':   <FlexboxPlayground />,
  '10-shadow':       <BoxShadowPreview />,
  '10-transition':   <TransitionPreview />,
  '14-select':       <DOMSelectorPreview />,
  '14-dom':          <DOMPlayground />,
  '15-events':       <EventPlayground />,
  '10-animation':    <AnimationPreview />,
  '10-transform':    <TransformPreview />,
  '10-intersection': <IntersectionPreview />,
  '17-nav':          <NavPreview />,
  '17-breadcrumb':   <BreadcrumbPreview />,
  '17-dropdown':     <DropdownPreview />,
  '17-modal':        <ModalPreview />,
  '17-card':         <CardPreview />,
  '17-badge':        <BadgePreview />,
  '17-toast':        <ToastPreview />,
  '17-fab':          <FabPreview />,
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
