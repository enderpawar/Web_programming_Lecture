export interface Slide {
  id: string;
  title: string;
  description: string;
  category: string;
  sections: SlideSection[];
}

export interface SlideSection {
  type: 'text' | 'code' | 'demo' | 'error' | 'interactive';
  title?: string;
  content?: string;
  code?: string;
  language?: string;
  demo?: React.ComponentType;
  demoId?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export const slides: Slide[] = [
  {
    id: '01',
    title: '인트로 & 수업 출력',
    description: '콘솔 출력, alert, console 사용 방법을 배웁니다',
    category: '#01',
    sections: [
      {
        type: 'text',
        title: '환영합니다!',
        content: '이 강의에서는 **HTML**, **CSS**, **JavaScript**의 기초를 배웁니다. 첫 번째로 브라우저에서 정보를 출력하는 방법을 알아봅시다.',
      },
      {
        type: 'code',
        title: 'Console.log 사용하기',
        code: `// 콘솔에 메시지 출력
console.log("안녕하세요!");
console.log("숫자:", 42);
console.log("배열:", [1, 2, 3]);

// F12를 눌러 개발자 도구를 열어보세요!`,
        language: 'javascript',
      },
      {
        type: 'code',
        title: 'Alert 사용하기',
        code: `// 경고창 띄우기
alert("환영합니다!");

// 확인/취소 선택
const result = confirm("계속하시겠습니까?");
console.log(result); // true 또는 false`,
        language: 'javascript',
      },
      {
        type: 'interactive',
      }
    ],
  },
  {
    id: '02',
    title: 'HTML 문서 구조',
    description: 'HTML 기본 문서 구조와 필수 태그들을 학습합니다',
    category: '#02',
    sections: [
      {
        type: 'text',
        title: 'HTML 문서의 기본 구조',
        content: 'HTML 문서는 문서의 정보를 담는 **<head>** 와 화면에 보이는 내용을 담는 **<body>** 로 구성됩니다.',
      },
      {
        type: 'code',
        title: '기본 HTML 구조',
        code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내 첫 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이것은 내 첫 HTML 문서입니다.</p>
</body>
</html>`,
        language: 'html',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '03',
    title: '텍스트 태그',
    description: '제목, 단락, 강조 등 텍스트 관련 태그를 배웁니다',
    category: '#03',
    sections: [
      {
        type: 'text',
        title: '텍스트를 표현하는 다양한 태그',
        content: 'HTML은 **제목(h1~h6)**, **단락(p)**, **강조(strong, em)** 등 다양한 텍스트 태그를 제공합니다.',
      },
      {
        type: 'code',
        title: '텍스트 태그 예시',
        code: `<h1>가장 큰 제목</h1>
<h2>두 번째 제목</h2>
<h3>세 번째 제목</h3>

<p>이것은 단락입니다. <strong>굵은 텍스트</strong>와 <em>기울임 텍스트</em>를 사용할 수 있습니다.</p>

<p>줄바꿈은 <br> 태그로 합니다.</p>

<blockquote>
  이것은 인용문입니다.
</blockquote>`,
        language: 'html',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '04',
    title: '링크 & 이미지',
    description: '하이퍼링크와 이미지를 삽입하는 방법을 배웁니다',
    category: '#04',
    sections: [
      {
        type: 'text',
        title: '링크와 이미지',
        content: '**<a>** 태그로 다른 페이지로 이동하고, **<img>** 태그로 이미지를 표시합니다.',
      },
      {
        type: 'code',
        title: '링크와 이미지 사용하기',
        code: `<!-- 링크 -->
<a href="https://www.google.com">구글로 이동</a>
<a href="https://www.naver.com" target="_blank">새 탭에서 네이버 열기</a>

<!-- 이미지 -->
<img src="image.jpg" alt="설명 텍스트">
<img src="photo.jpg" alt="사진" width="300">

<!-- 이미지 링크 -->
<a href="https://example.com">
  <img src="logo.png" alt="로고">
</a>`,
        language: 'html',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '05',
    title: '시맨틱 태그 & 레이아웃',
    description: '의미 있는 HTML5 시맨틱 태그와 부모-자식 구조가 화면에 어떻게 표현되는지 배웁니다',
    category: '#05',
    sections: [
      {
        type: 'text',
        title: '시맨틱(Semantic) 태그란?',
        content: `**시맨틱(semantic)** 은 "의미를 가진다"는 뜻입니다.

**<div>** 는 아무 의미 없는 상자지만, **시맨틱 태그**는 그 안의 내용이 무엇인지 이름만 봐도 알 수 있습니다.

예시:
• <div class="header"> → 이름이 없어서 사람이 읽어야 알 수 있음
• **<header>**         → 이름만 봐도 "페이지 상단"임을 즉시 알 수 있음

시맨틱 태그를 쓰면:
① 코드를 사람이 읽기 쉬워집니다 (**가독성** ↑)
② 검색 엔진(Google)이 페이지 구조를 더 잘 이해합니다 (**SEO** ↑)
③ 스크린 리더(시각장애인 보조도구)가 페이지를 올바르게 읽습니다 (**접근성** ↑)`,
      },
      {
        type: 'text',
        title: 'SEO란 무엇인가요?',
        collapsible: true,
        defaultCollapsed: true,
        content: `**SEO(Search Engine Optimization)** 는 "검색 엔진 최적화"의 줄임말입니다.
쉽게 말하면 **내 웹 페이지가 Google, Naver 등 검색 결과 상위에 노출되도록 만드는 작업**입니다.

검색 엔진이 페이지를 읽는 방식:
검색 엔진은 **크롤러(crawler)** 라는 프로그램을 보내 웹 페이지의 HTML 코드를 읽고, 이 페이지가 어떤 내용인지 분석합니다. 이때 시맨틱 태그가 있으면 구조를 훨씬 잘 이해합니다.

예시:
• **<h1>** 태그 — "이 페이지의 가장 중요한 제목"임을 검색 엔진에 알려줌
• **<article>** 태그 — "여기에 독립적인 글이 있다"고 알려줌
• **<nav>** 태그 — "여기는 메뉴 링크 목록이다"고 알려줌
• **<main>** 태그 — "여기가 핵심 콘텐츠다"고 알려줌

SEO에 영향을 주는 요소들:
① **시맨틱 HTML** — 올바른 태그 사용으로 페이지 구조 명확히 전달
② **<title> 태그** — 브라우저 탭과 검색 결과에 표시되는 제목
③**<meta description>** — 검색 결과 제목 아래 나오는 짧은 설명
④ **alt 속성** — 이미지에 대한 설명, 검색 엔진이 이미지를 이해하는 데 사용
⑤ **페이지 로딩 속도** — 느린 사이트는 검색 순위가 낮아짐
⑥ **모바일 반응형** — 모바일에서 잘 보이는 사이트가 우대받음

💡 시맨틱 태그를 잘 쓰는 것만으로도 SEO에 큰 도움이 됩니다.`,
      },
      { type: 'demo', demoId: '05-semantic' },
      {
        type: 'text',
        title: '부모 태그 안에 자식 태그를 넣으면?',
        content: `HTML 태그는 **나무(Tree) 구조**처럼 서로 감쌀 수 있습니다.

바깥에 있는 태그 = **부모(Parent)**
안에 들어가는 태그 = **자식(Child)**

핵심 규칙:
• 자식은 **부모 영역 안에서만** 표시됩니다
• 부모에 적용된 스타일은 자식에게 **상속**될 수 있습니다
• 부모가 숨겨지면 자식도 함께 숨겨집니다

아래에서 실제로 어떻게 화면에 표시되는지 확인해보세요.`,
      },
      {
        type: 'code',
        title: '부모-자식 구조 코드',
        code: `<header>               ← 부모
  <h1>웹사이트 제목</h1> ← 자식
  <nav>                ← 자식이자 또 다른 부모
    <a href="#">홈</a>   ← nav의 자식 (孫: 손자)
    <a href="#">소개</a>
  </nav>
</header>

<main>                 ← 부모
  <section>            ← 자식
    <article>          ← 손자
      <h3>글 제목</h3>  ← 증손자
      <p>글 내용</p>
    </article>
  </section>
  <aside>사이드바</aside>
</main>

<footer>               ← 부모
  <p>© 2026</p>        ← 자식
</footer>`,
        language: 'html',
      },
      { type: 'demo', demoId: '05-layout' },
    ],
  },
  {
    id: '06',
    title: 'CSS 셀렉터',
    description: 'CSS로 요소를 선택하는 다양한 방법을 배웁니다',
    category: '#06',
    sections: [
      {
        type: 'text',
        title: 'CSS 선택자',
        content: '**CSS 선택자**를 사용하여 스타일을 적용할 **요소(element)** 를 지정합니다. 태그명, **클래스(.)**,  **ID(#)** 등 다양한 방식으로 선택할 수 있습니다.',
      },
      {
        type: 'code',
        title: 'CSS 선택자 종류',
        code: `/* 태그 선택자 */
p {
  color: blue;
}

/* 클래스 선택자 */
.highlight {
  background-color: yellow;
}

/* ID 선택자 */
#header {
  font-size: 24px;
}

/* 자식 선택자 */
div > p {
  margin: 10px;
}

/* 후손 선택자 */
div p {
  color: gray;
}

/* 가상 클래스 */
a:hover {
  color: red;
}

button:active {
  transform: scale(0.95);
}`,
        language: 'css',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '07',
    title: 'CSS 박스 모델',
    description: 'margin, padding, border의 개념을 이해합니다',
    category: '#07',
    sections: [
      {
        type: 'text',
        title: 'CSS 박스 모델',
        content: '모든 HTML 요소는 **박스(box) 형태**이며, 안쪽 내용인 **content**, 안쪽 여백 **padding**, 테두리 **border**, 바깥 여백 **margin** 의 4겹으로 구성됩니다.',
      },
      {
        type: 'code',
        title: '박스 모델 예시',
        code: `.box {
  /* 내용 크기 */
  width: 200px;
  height: 100px;
  
  /* 안쪽 여백 */
  padding: 20px;
  
  /* 테두리 */
  border: 2px solid #333;
  
  /* 바깥 여백 */
  margin: 10px;
  
  /* 배경 */
  background-color: lightblue;
}

/* 박스 크기 계산 방식 변경 */
.better-box {
  box-sizing: border-box;
  width: 200px; /* padding과 border 포함 */
  padding: 20px;
  border: 2px solid #333;
}`,
        language: 'css',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '08',
    title: 'Flex 레이아웃',
    description: 'Flexbox를 사용한 유연한 레이아웃 구성 방법을 배웁니다',
    category: '#08',
    sections: [
      {
        type: 'text',
        title: 'Flexbox란?',
        content: `**display: flex** 를 부모 컨테이너에 적용하면, 자식 요소들이 **"flex 아이템"** 이 되어 자유롭게 정렬·배치됩니다.

Flexbox는 두 개의 **축(axis)** 으로 동작합니다.
• **주축(Main Axis)**: 아이템이 나열되는 방향 (기본값: 가로 →)
• **교차축(Cross Axis)**: 주축과 수직인 방향 (기본값: 세로 ↓)

**flex-direction** 으로 주축 방향을 바꾸면, 교차축도 함께 바뀝니다.`,
      },
      {
        type: 'text',
        title: '7가지 핵심 속성',
        content: `① **flex-direction**  — 주축 방향: row / column / row-reverse / column-reverse
② **flex-wrap**       — 줄바꿈 여부: nowrap / wrap / wrap-reverse
③ **flex-flow**       — direction + wrap 단축 속성 (예: row wrap)
④ **justify-content** — 주축 정렬: flex-start / center / flex-end / space-between / space-around / space-evenly
⑤ **align-items**    — 교차축 정렬 (한 줄): stretch / center / flex-start / flex-end / baseline
⑥ **align-content**  — 교차축 정렬 (여러 줄, wrap 필요): stretch / center / space-between / space-around
⑦ **gap**            — 아이템 간격: 10px / 1rem 등`,
      },
      {
        type: 'code',
        title: '핵심 속성 코드',
        code: `.container {
  display: flex;

  flex-direction: row;        /* 주축 방향 */
  flex-wrap: wrap;            /* 줄바꿈 허용 */
  /* flex-flow: row wrap; */  /* 위 두 속성의 단축형 */

  justify-content: space-between; /* 주축 정렬 */
  align-items: center;            /* 교차축 정렬 (한 줄) */
  align-content: space-around;   /* 교차축 정렬 (여러 줄) */

  gap: 16px;                  /* 아이템 간격 */
}`,
        language: 'css',
      },
      { type: 'demo', demoId: '08-playground' },
    ],
  },
  {
    id: '09',
    title: '반응형 레이아웃',
    description: '미디어 쿼리로 다양한 화면 크기에 대응하는 방법을 학습합니다',
    category: '#09',
    sections: [
      {
        type: 'text',
        title: '반응형 웹 디자인',
        content: '**미디어 쿼리(@media)** 를 사용하면 **화면 크기(breakpoint)** 에 따라 다른 스타일을 적용할 수 있습니다. **모바일 우선(Mobile First)** 방식으로 작성하는 것이 권장됩니다.',
      },
      {
        type: 'code',
        title: '미디어 쿼리 사용하기',
        code: `/* 모바일 우선 */
.container {
  width: 100%;
  padding: 10px;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}`,
        language: 'css',
      },
      {
        type: 'demo',
      }
    ],
  },
  {
    id: '10',
    title: 'CSS 애니메이션 총정리',
    description: 'transition, animation, transform, Intersection Observer까지 CSS/JS 움직임 전체를 배웁니다',
    category: '#10',
    sections: [
      {
        type: 'text',
        title: 'CSS 움직임의 4가지 핵심',
        content: `웹에서 움직임을 만드는 방법은 크게 4가지입니다.

① **transition** — 상태 변화(hover 등)를 부드럽게 연결
② **animation** + **@keyframes** — 독립적으로 반복 실행되는 움직임
③ **transform** — 요소를 이동·확대·회전·기울이기
④ **Intersection Observer** — 스크롤 시 요소가 화면에 들어오면 애니메이션 실행`,
      },
      {
        type: 'text',
        title: '① Transition — 부드러운 상태 변화',
        content: `**transition** 은 요소의 CSS 속성값이 바뀔 때 즉각 변하지 않고 서서히 바뀌게 해줍니다.

작성 형식: **transition: 속성명  지속시간  easing  지연시간**

• **속성명**: 어떤 CSS 속성에 전환 효과를 줄지 지정합니다 (background-color, transform 등). **all** 이라고 쓰면 모든 속성에 적용됩니다.
• **지속시간(duration)**: 전환이 얼마나 걸릴지 설정합니다. 0.3s = 0.3초, 300ms = 300밀리초로 표현합니다.
• **easing(타이밍 함수)**: 속도의 변화 곡선을 지정합니다.
  - **ease**: 처음 빠르다가 끝에 느려짐 (가장 자연스러움, 기본값)
  - **linear**: 처음부터 끝까지 일정한 속도
  - **ease-in**: 처음에 느리다가 점점 빨라짐
  - **ease-out**: 처음에 빠르다가 점점 느려짐
• **지연시간(delay)**: 변화가 시작되기까지 기다리는 시간입니다. 생략하면 0s (바로 시작).
• **:hover**: 마우스를 요소 위에 올렸을 때 적용되는 CSS 상태입니다.`,
      },
      {
        type: 'code',
        title: '① Transition 코드',
        code: `/* transition: 속성 시간 easing 지연 */
.button {
  background-color: #3b82f6;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

/* 카드 hover 효과 */
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  transform: translateY(-4px);
}`,
        language: 'css',
      },
      { type: 'demo', demoId: '10-transition' },
      {
        type: 'text',
        title: '② Animation & @keyframes — 자동 반복 애니메이션',
        content: `**animation** 은 hover 같은 상태 변화 없이도 요소가 스스로 계속 움직이게 합니다.
**@keyframes** 로 동작의 중간 과정(타임라인)을 먼저 정의한 뒤, **animation** 속성으로 요소에 적용합니다.

@keyframes 작성법:
• **from ~ to**: 시작과 끝 두 단계만 지정할 때 사용합니다.
• **0% ~ 100%**: 퍼센트로 중간 단계를 세밀하게 지정할 때 사용합니다. (예: 0%, 50%, 100%)

animation 속성 순서: **animation: 이름  시간  easing  반복횟수**
• **이름**: @keyframes 뒤에 붙인 이름과 일치해야 합니다.
• **시간**: 한 사이클이 완료되는 데 걸리는 시간입니다.
• **infinite**: 무한 반복을 의미합니다. 숫자를 쓰면 그 횟수만큼 반복합니다.
• **forwards**: 애니메이션이 끝난 후 마지막 상태를 유지합니다. (없으면 원래 자리로 돌아감)
• **opacity**: 요소의 투명도입니다. 0 = 완전 투명, 1 = 완전 불투명`,
      },
      {
        type: 'code',
        title: '② Animation & @keyframes 코드',
        code: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.1); }
}

/* animation: 이름 시간 easing 반복횟수 */
.fade-in { animation: fadeIn 0.6s ease forwards; }
.loader  { animation: spin 1s linear infinite; }
.badge   { animation: pulse 2s ease-in-out infinite; }`,
        language: 'css',
      },
      { type: 'demo', demoId: '10-animation' },
      {
        type: 'text',
        title: '③ Transform — 위치·크기·각도 변환',
        content: `**transform** 은 요소의 위치, 크기, 각도를 변환합니다. **레이아웃(주변 요소 배치)에 영향을 주지 않고** 시각적으로만 변환되기 때문에 성능이 좋습니다.

주요 함수:
• **translate(x, y)**: 요소를 X축(가로), Y축(세로)으로 이동시킵니다. translateY(-4px)는 위로 4px 이동.
• **scale(n)**: 요소를 n배 크기로 확대/축소합니다. scale(1.5) = 1.5배, scale(0.5) = 절반.
• **rotate(각도)**: 요소를 시계 방향으로 회전시킵니다. 단위는 **deg(도)** 입니다.
• **skew(x, y)**: 요소를 X·Y축 방향으로 기울입니다.

여러 개를 동시에 쓸 때는 공백으로 이어 씁니다. **순서에 따라 결과가 달라집니다.**

3D Transform:
• **perspective**: 3D 효과를 얼마나 강하게 줄지 설정합니다. 숫자가 작을수록 원근감이 강해집니다.
• **rotateY**: Y축(세로축)을 중심으로 회전합니다. 카드 뒤집기 효과에 많이 씁니다.
• **transform-origin**: 변환의 기준점(중심점)을 바꿉니다. 기본값은 center center(요소 정중앙)입니다.`,
      },
      {
        type: 'code',
        title: '③ Transform 코드',
        code: `/* 2D Transform */
.translate { transform: translate(50px, 20px); }  /* X, Y 이동 */
.scale     { transform: scale(1.5); }              /* 1.5배 확대 */
.rotate    { transform: rotate(45deg); }           /* 45도 회전 */
.skew      { transform: skew(15deg, 5deg); }       /* 기울이기 */

/* 여러 개 동시에 */
.card:hover {
  transform: translateY(-8px) scale(1.02) rotate(1deg);
}

/* 3D Transform */
.flip {
  perspective: 600px;
  transform: rotateY(180deg);
}

/* transform-origin: 기준점 변경 */
.rotate-corner {
  transform-origin: top left;
  transform: rotate(30deg);
}`,
        language: 'css',
      },
      { type: 'demo', demoId: '10-transform' },
      {
        type: 'text',
        title: '④ Intersection Observer — 스크롤 감지 애니메이션',
        content: `**Intersection Observer** 는 특정 요소가 **화면(뷰포트)** 안에 들어오거나 나가는 순간을 감지하는 JavaScript API입니다.
스크롤을 내리면 요소가 서서히 나타나는 **"scroll reveal"** 효과를 만들 때 주로 사용합니다.

CSS 파트 용어:
• **opacity: 0** → 처음엔 완전히 투명(보이지 않음)하게 설정합니다.
• **translateY(40px)** → 처음엔 원래 위치보다 40px 아래에 있습니다.
• **transition** → 나중에 JS가 .visible 클래스를 추가하면 부드럽게 나타납니다.

JavaScript 파트 용어:
• **new IntersectionObserver(콜백, 옵션)** → 관찰자 객체를 만듭니다.
• **entries** → 관찰 중인 요소들의 목록입니다.
• **entry.isIntersecting** → true면 요소가 화면 안에 들어온 상태입니다.
• **classList.add('visible')** → 요소에 .visible 클래스를 추가해 CSS 효과를 발동시킵니다.
• **observer.unobserve(el)** → 한 번 나타난 후에는 더 이상 감시하지 않습니다 (성능 최적화).
• **threshold: 0.2** → 요소가 20% 이상 화면에 보일 때 콜백을 실행합니다. 1이면 100% 전부 보일 때.
• **querySelectorAll('.reveal')** → .reveal 클래스가 붙은 모든 요소를 한꺼번에 선택합니다.`,
      },
      {
        type: 'code',
        title: '④ Intersection Observer — CSS',
        code: `/* CSS: 초기 상태 (숨김) */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* JS가 .visible 클래스를 붙여주면 보임 */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}`,
        language: 'css',
      },
      {
        type: 'code',
        title: '④ Intersection Observer — JavaScript',
        code: `const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 화면에 들어오면 .visible 추가
      entry.target.classList.add('visible');
      // 한 번만 실행하려면 관찰 해제
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2  // 20% 이상 보일 때 실행
});

// .reveal 클래스가 붙은 모든 요소 관찰 시작
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});`,
        language: 'javascript',
      },
      { type: 'demo', demoId: '10-intersection' },
    ],
  },
  {
    id: '11',
    title: '자바스크립트 소개',
    description: 'JavaScript 기초 문법과 데이터 타입을 배웁니다',
    category: '#11',
    sections: [
      {
        type: 'text',
        title: 'JavaScript란?',
        content: '**JavaScript**는 웹 페이지에 **동적인 기능**을 추가하는 **프로그래밍 언어**입니다. **HTML**이 구조, **CSS**가 디자인을 담당한다면, **JavaScript**는 버튼 클릭, 데이터 처리 등 **동작**을 담당합니다.',
      },
      {
        type: 'code',
        title: '기본 문법',
        code: `// 주석은 이렇게 작성합니다
/* 여러 줄
   주석도 가능합니다 */

// 데이터 타입
const string = "문자열";
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { name: "홍길동", age: 20 };

// undefined와 null
let notDefined;
console.log(notDefined); // undefined
const empty = null;

// typeof로 타입 확인
console.log(typeof string); // "string"
console.log(typeof number); // "number"`,
        language: 'javascript',
      },
    ],
  },
  {
    id: '12',
    title: '변수 & 연산',
    description: '변수 선언과 다양한 연산자 사용법을 배웁니다',
    category: '#12',
    sections: [
      {
        type: 'text',
        title: 'let vs const — 무엇이 다른가?',
        content: `**변수(variable)** 란 데이터를 담아두는 이름이 붙은 상자입니다. JavaScript에서는 **let** 과 **const** 두 가지로 변수를 선언합니다.

■ **let** — 나중에 값을 바꿀 수 있는 변수
언제 쓰나요? 값이 중간에 바뀔 가능성이 있을 때 사용합니다.
예) 사용자 나이, 카운터, 반복문 인덱스

■ **const** — 한 번 정하면 값을 바꿀 수 없는 변수 (**상수, constant**)
언제 쓰나요? 한 번 지정하면 변하지 않는 값에 사용합니다.
예) 이름, 설정값, 고정된 URL

⚠ 재할당을 시도하면 오류 발생:
  const name = "김철수";
  name = "이영희"; // TypeError: Assignment to constant variable.

💡 원칙: 기본적으로 const를 쓰고, 값이 바뀌어야 할 때만 let으로 바꾸세요.`,
      },
      {
        type: 'code',
        title: 'let vs const 예시',
        code: `// ✅ let: 재할당 가능
let count = 0;
count = count + 1; // OK → count는 이제 1

// ✅ const: 재할당 불가능
const PI = 3.14;
// PI = 3.15; // ❌ TypeError: Assignment to constant variable.

// 💡 원칙: const 먼저, 값이 바뀌어야 하면 let으로 교체
const userName = "김철수";  // 이름은 바뀌지 않음 → const
let score = 85;              // 점수는 바뀔 수 있음  → let
score = 90;                  // OK`,
        language: 'javascript',
      },
      {
        type: 'text',
        title: 'var는 왜 더 이상 쓰지 않나요?',
        content: `**var** 는 **ES5(2009년)** 이전 문법으로, 현재는 사용을 권장하지 않습니다.

var의 문제점:
① **블록 스코프 없음**: var는 if/for 블록 안에 선언해도 블록 밖에서도 접근됩니다. let/const는 **블록 {} 안에서만** 유효합니다.
② **중복 선언 허용**: 같은 이름으로 var를 두 번 선언해도 에러가 나지 않습니다. 실수로 덮어써도 알 수 없습니다.
③ **호이스팅(hoisting)**: 선언하기 전에 변수에 접근해도 에러 대신 **undefined** 가 반환됩니다. 버그를 찾기 매우 어렵습니다.

**ES6(2015년)** 부터 **let** 과 **const** 가 도입되어 위 문제가 모두 해결되었습니다.
현재는 **let, const만 사용**하고 var는 사용하지 않는 것이 표준입니다.`,
      },
      {
        type: 'code',
        title: 'var의 문제점 예시',
        code: `// ❌ 문제 1: 블록 스코프 없음
if (true) {
  var x = 10;  // if 블록 안에 선언했지만
}
console.log(x); // 10 → 블록 밖에서도 접근 가능! (버그 위험)

if (true) {
  let y = 20;  // let은 블록 안에서만 유효
}
// console.log(y); // ❌ ReferenceError: y is not defined (안전)

// ❌ 문제 2: 중복 선언 허용
var name = "김철수";
var name = "이영희"; // 에러 없이 덮어씌워짐!
console.log(name);   // "이영희" (실수인지 의도인지 모름)

// let은 중복 선언 시 에러로 알려줌
// let name = "김철수";
// let name = "이영희"; // ❌ SyntaxError: Identifier 'name' already declared

// ❌ 문제 3: 호이스팅 — 선언 전에 접근해도 에러가 안 남
console.log(a); // undefined (에러가 아님! 찾기 힘든 버그)
var a = 5;

// let은 선언 전 접근 시 에러로 명확히 알려줌
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
// let b = 5;`,
        language: 'javascript',
      },
      {
        type: 'text',
        title: '연산자(Operator) 종류',
        content: `**연산자(Operator)** 는 값을 계산하거나 비교할 때 사용하는 기호입니다.

■ **산술 연산자**: 숫자 계산
  **+** 더하기  **-** 빼기  **\*** 곱하기  **/** 나누기  **%** 나머지

■ **비교 연산자**: 두 값을 비교해 true/false 반환
  **===**  값과 타입이 모두 같으면 true (일치 연산자, 권장)
  **!==**  값이나 타입이 다르면 true
  **>  <  >=  <=**  크기 비교

  ⚠ **==** (느슨한 일치)는 타입을 자동 변환해서 비교하므로 예상치 못한 결과가 나올 수 있습니다.
     항상 **===** 를 쓰는 것이 안전합니다.

■ **논리 연산자**: 조건을 조합
  **&&**  AND — 둘 다 true일 때만 true
  **||**  OR  — 하나라도 true면 true
  **!**   NOT — true → false, false → true

■ **템플릿 리터럴(Template Literal)**:
  **백틱(\`)** 안에서 **\${변수}** 로 변수를 문자열 중간에 바로 삽입할 수 있습니다.
  "안녕 " + name + "!" 대신 \`안녕 \${name}!\` 처럼 쓰면 훨씬 간결합니다.`,
      },
      {
        type: 'code',
        title: '연산자 예시',
        code: `// 산술 연산자
let a = 10 + 5; // 15
let b = 10 - 5; // 5
let c = 10 * 5; // 50
let d = 10 / 5; // 2
let e = 10 % 3; // 1 (나머지: 10 ÷ 3 = 3 나머지 1)

// 비교 연산자 (항상 === 사용 권장)
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true  (값 + 타입 일치)
console.log(10 === "10"); // false (숫자 vs 문자열 → 불일치)
console.log(10 !== 5);  // true

// 논리 연산자
console.log(true && false); // false (AND: 둘 다 true여야)
console.log(true || false); // true  (OR: 하나만 true여도)
console.log(!true);         // false (NOT: 반전)

// 문자열 연결 vs 템플릿 리터럴
const name = "김철수";
const age = 20;
const old = "이름: " + name + ", 나이: " + age; // 구식
const modern = \`이름: \${name}, 나이: \${age}\`;   // ✅ 권장`,
        language: 'javascript',
      },
    ],
  },
  {
    id: '13',
    title: '조건문 & 반복문',
    description: 'if문, switch문, for문, while문 등 제어 구조를 학습합니다',
    category: '#13',
    sections: [
      {
        type: 'text',
        title: '조건문과 반복문',
        content: '**조건문(if, switch)** 은 조건에 따라 다른 동작을 수행하고, **반복문(for, while)** 은 같은 작업을 효율적으로 반복 처리할 수 있습니다.',
      },
      {
        type: 'code',
        title: '조건문',
        code: `// if-else
const score = 85;

if (score >= 90) {
  console.log("A 학점");
} else if (score >= 80) {
  console.log("B 학점");
} else if (score >= 70) {
  console.log("C 학점");
} else {
  console.log("재시험");
}

// switch
const day = "월요일";

switch (day) {
  case "월요일":
    console.log("한 주의 시작!");
    break;
  case "금요일":
    console.log("불금!");
    break;
  default:
    console.log("평범한 날");
}

// 삼항 연산자
const isAdult = age >= 18 ? "성인" : "미성년자";`,
        language: 'javascript',
      },
      {
        type: 'code',
        title: '반복문',
        code: `// for 문
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// 배열 반복
const fruits = ["사과", "바나나", "오렌지"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of (배열 반복)
for (const fruit of fruits) {
  console.log(fruit);
}

// while 문
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// forEach (배열 메서드)
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});`,
        language: 'javascript',
      },
    ],
  },
  {
    id: '14',
    title: 'DOM 조작 기초',
    description: 'JavaScript로 HTML 요소를 선택하고 조작하는 방법을 배웁니다',
    category: '#14',
    sections: [
      {
        type: 'text',
        title: 'DOM (Document Object Model)',
        content: '**DOM(Document Object Model)** 은 HTML 문서를 **객체(object)** 로 표현한 것입니다. JavaScript로 DOM을 통해 웹 페이지의 **요소를 선택·변경·추가·삭제**할 수 있습니다.',
      },
      {
        type: 'code',
        title: '요소 선택하기',
        code: `// ID로 선택 — id가 'header'인 요소 1개
const header = document.getElementById('header');

// 클래스로 선택 — class="item"인 요소 전체 (유사배열)
const items = document.getElementsByClassName('item');

// CSS 선택자로 선택 (가장 많이 사용)
const firstBtn = document.querySelector('button');      // 첫 번째만
const allBtns  = document.querySelectorAll('button');   // 전부 (NodeList)
const byClass  = document.querySelector('.card');       // 클래스
const byId     = document.querySelector('#header');     // ID

// 태그 이름으로 선택
const paragraphs = document.getElementsByTagName('p');`,
        language: 'javascript',
      },
      { type: 'demo', demoId: '14-select' },
      {
        type: 'code',
        title: '요소 조작하기',
        code: `// 텍스트 변경
const title = document.querySelector('h1');
title.textContent = "새로운 제목";        // 태그 무시, 순수 텍스트
title.innerHTML = "<strong>강조된</strong> 제목"; // HTML 태그 해석

// 스타일 직접 변경
title.style.color = "blue";
title.style.fontSize = "32px";

// 클래스 조작
const box = document.querySelector('.box');
box.classList.add('active');       // 클래스 추가
box.classList.remove('inactive');  // 클래스 제거
box.classList.toggle('highlight'); // 있으면 제거, 없으면 추가

// 속성 변경
const link = document.querySelector('a');
link.setAttribute('href', 'https://google.com'); // 속성 설정
console.log(link.getAttribute('href'));           // 속성 읽기

// 요소 생성 및 추가
const newItem = document.createElement('li');
newItem.textContent = "새로 추가된 항목";
document.querySelector('ul').appendChild(newItem);`,
        language: 'javascript',
      },
      { type: 'demo', demoId: '14-dom' }
    ],
  },
  {
    id: '15',
    title: '이벤트 처리',
    description: '클릭, 입력 등 사용자 상호작용을 처리하는 방법을 학습합니다',
    category: '#15',
    sections: [
      {
        type: 'text',
        title: '이벤트(Event)란?',
        content: `**이벤트(Event)** 는 웹 페이지에서 일어나는 모든 "사건"입니다.
사용자가 버튼을 클릭하거나, 키보드를 누르거나, 마우스를 움직이는 것이 모두 이벤트입니다.

JavaScript는 이 이벤트를 **감지(listen)** 하고, 이벤트가 발생했을 때 **원하는 동작을 실행**할 수 있습니다.
이를 **이벤트 리스너(Event Listener)** 라고 합니다.

자주 사용하는 이벤트 종류:
• **click** — 마우스 클릭
• **input** — 입력 필드에 타이핑할 때
• **submit** — 폼 제출 버튼을 눌렀을 때
• **keydown** — 키보드 키를 눌렀을 때
• **mouseenter / mouseleave** — 마우스가 요소에 들어오거나 나갈 때`,
      },
      {
        type: 'text',
        title: '① 요소 선택 → ② 이벤트 연결 → ③ 동작 실행',
        content: `이벤트 리스너는 항상 이 3단계로 동작합니다.

─────────────────────────────────────────
**① HTML에서 요소를 선택한다**

HTML에 id, class, 태그가 있어야 JS에서 찾을 수 있습니다.

  HTML:  <button id="myBtn" class="btn">클릭</button>

  JS로 선택하는 방법 3가지:
  • **getElementById('myBtn')** — id="myBtn" 인 요소 1개 선택
  • **querySelector('.btn')** — class="btn" 인 첫 번째 요소 선택
  • **querySelector('button')** — 태그 이름으로 첫 번째 선택
  • **querySelectorAll('.btn')** — 해당하는 모든 요소 선택 (배열처럼 반환)

─────────────────────────────────────────
**② addEventListener로 이벤트를 연결한다**

  요소.addEventListener('이벤트종류', 실행할함수);

  • 첫 번째 인자: 감지할 이벤트 이름 (문자열)
  • 두 번째 인자: 이벤트 발생 시 실행할 **콜백 함수(callback function)**

─────────────────────────────────────────
**③ 이벤트가 발생하면 콜백 함수가 실행된다**

  콜백 함수에는 **event 객체(e)** 가 자동으로 전달됩니다.
  이 객체에는 어떤 요소에서 발생했는지, 어떤 키를 눌렀는지 등의 정보가 들어있습니다.
  • **e.target** — 이벤트가 발생한 요소 그 자체
  • **e.target.value** — input 요소에 입력된 현재 값
  • **e.key** — 눌린 키보드 키 이름
  • **e.preventDefault()** — 브라우저의 기본 동작을 막음 (예: 폼 제출 시 페이지 새로고침 방지)`,
      },
      {
        type: 'code',
        title: '요소 선택 방법 3가지',
        code: `<!-- HTML -->
<button id="myBtn">클릭하세요</button>
<input class="search-input" placeholder="검색어 입력">
<ul>
  <li class="item">항목 1</li>
  <li class="item">항목 2</li>
</ul>`,
        language: 'html',
      },
      {
        type: 'code',
        title: 'addEventListener 기본 구조',
        code: `// ① ID로 선택 → 클릭 이벤트 연결
const btn = document.getElementById('myBtn');
//                   ↑ id="myBtn" 인 요소를 찾아서

btn.addEventListener('click', function(e) {
//                   ↑이벤트종류  ↑ 이벤트 발생 시 실행할 함수
  console.log('클릭됨!');
  console.log(e.target); // 클릭된 요소 자체
});

// ② 클래스로 선택 (querySelector)
const input = document.querySelector('.search-input');
//                                   ↑ .클래스명 (CSS 선택자 문법)

input.addEventListener('input', (e) => {
  console.log('입력값:', e.target.value); // 현재 입력된 텍스트
});

// ③ 여러 요소 동시 연결 (querySelectorAll → forEach)
const items = document.querySelectorAll('.item');
//                                       ↑ 모든 .item 요소 선택

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log('클릭한 항목:', e.target.textContent);
  });
});`,
        language: 'javascript',
      },
      {
        type: 'code',
        title: '자주 쓰는 이벤트 종류',
        code: `// ─ 마우스 이벤트 ─
box.addEventListener('mouseenter', () => {  // 마우스가 요소에 들어올 때
  box.style.backgroundColor = 'orange';
});
box.addEventListener('mouseleave', () => {  // 마우스가 요소에서 나갈 때
  box.style.backgroundColor = 'gray';
});

// ─ 폼 제출 이벤트 ─
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ← 이게 없으면 페이지가 새로고침됨!
  console.log('폼 데이터 처리');
});

// ─ 키보드 이벤트 ─
document.addEventListener('keydown', (e) => {
  console.log('누른 키:', e.key); // 'Enter', 'ArrowUp', 'a' 등
  if (e.key === 'Enter') {
    console.log('엔터 입력!');
  }
});`,
        language: 'javascript',
      },
      {
        type: 'demo',
        demoId: '15-events',
      }
    ],
  },
  {
    id: '16',
    title: '에러 & 문제 해결',
    description: '일반적인 에러와 디버깅 방법을 배웁니다',
    category: '#16',
    sections: [
      {
        type: 'text',
        title: '에러의 종류와 해결 방법',
        content: '프로그래밍 중 발생하는 다양한 에러를 이해하고 해결하는 방법을 배웁니다. **F12** 를 눌러 **콘솔(Console)** 을 확인하세요!',
      },
      {
        type: 'error',
      }
    ],
  },
  {
    id: '17',
    title: 'UI 컴포넌트 총정리',
    description: 'NAV, Modal, Card, Badge, Skeleton 등 실무에서 자주 쓰는 UI 컴포넌트를 배웁니다',
    category: '#17',
    sections: [
      {
        type: 'text',
        title: '실무 UI 컴포넌트란?',
        content: `웹 서비스는 수십 가지 반복적인 **UI 패턴**으로 이루어져 있습니다. 자주 쓰는 **컴포넌트** 이름과 구조를 알아두면 **디자인 시스템**을 이해하고 구현하는 속도가 빨라집니다.

주요 컴포넌트 목록:
• **NAV (Navigation Bar)** — 상단 탐색 메뉴
• **Breadcrumb** — 현재 위치 경로 표시
• **Modal / Dialog** — 팝업 레이어
• **Dropdown / Select** — 선택 목록
• **Card** — 콘텐츠 묶음 박스
• **Badge / Chip** — 상태·카테고리 라벨
• **Toast / Snackbar** — 일시적 알림 메시지
• **FAB (Floating Action Button)** — 고정 액션 버튼
• **Skeleton** — 로딩 중 자리 표시자
• **Pagination** — 페이지 이동 컨트롤`,
      },
      {
        type: 'code',
        title: 'NAV — 상단 탐색 바',
        demoId: '17-nav',
        code: `<nav class="navbar">
  <a class="logo" href="/">MyApp</a>

  <ul class="nav-links">
    <li><a href="/home" class="active">홈</a></li>
    <li><a href="/about">소개</a></li>
    <li><a href="/work">작업</a></li>
  </ul>

  <button class="nav-cta">시작하기</button>
</nav>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #0a0a0a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { color: #9ca3af; text-decoration: none; transition: color 0.2s; }
.nav-links a:hover, .nav-links a.active { color: white; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-nav' },
      {
        type: 'code',
        title: 'Breadcrumb — 경로 표시',
        demoId: '17-breadcrumb',
        code: `<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">홈</a></li>
    <li><a href="/products">상품</a></li>
    <li aria-current="page">운동화</li>
  </ol>
</nav>

<style>
.breadcrumb {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  font-size: 0.875rem;
  color: #6b7280;
}
.breadcrumb li:not(:last-child)::after {
  content: '/';
  margin-left: 0.5rem;
  color: #d1d5db;
}
.breadcrumb a { color: #374151; text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-breadcrumb' },
      {
        type: 'code',
        title: 'Modal / Dialog — 팝업 레이어',
        demoId: '17-modal',
        code: `<!-- 오버레이 + 다이얼로그 구조 -->
<div class="modal-overlay" id="overlay">
  <div class="modal" role="dialog" aria-modal="true">
    <h2 class="modal-title">정말 삭제할까요?</h2>
    <p class="modal-body">이 작업은 되돌릴 수 없습니다.</p>
    <div class="modal-footer">
      <button onclick="closeModal()">취소</button>
      <button class="danger">삭제</button>
    </div>
  </div>
</div>

<style>
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 200;
}
.modal {
  background: white; border-radius: 12px;
  padding: 2rem; max-width: 400px; width: 90%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.modal-footer { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem; }
button.danger { background: #ef4444; color: white; border: none; padding: 0.5rem 1.25rem; border-radius: 6px; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-modal' },
      {
        type: 'code',
        title: 'Card — 콘텐츠 묶음 / Badge — 라벨',
        demoId: '17-card',
        code: `<div class="card">
  <img src="thumbnail.jpg" alt="썸네일" class="card-img" />
  <div class="card-body">
    <div class="card-tags">
      <span class="badge green">완료</span>
      <span class="badge blue">React</span>
    </div>
    <h3 class="card-title">프로젝트 제목</h3>
    <p class="card-desc">간단한 설명이 들어갑니다.</p>
  </div>
</div>

<style>
.card {
  border-radius: 12px; overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.3s, transform 0.3s;
}
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.12); transform: translateY(-4px); }
.card-img { width: 100%; height: 160px; object-fit: cover; }
.card-body { padding: 1.25rem; }
.card-tags { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }

/* Badge */
.badge {
  font-size: 0.75rem; font-weight: 600;
  padding: 0.2rem 0.6rem; border-radius: 999px;
}
.badge.green { background: #dcfce7; color: #166534; }
.badge.blue  { background: #dbeafe; color: #1e40af; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-card' },
      {
        type: 'code',
        title: 'Skeleton — 로딩 자리 표시자',
        demoId: '17-skeleton',
        code: `<div class="card skeleton-card">
  <div class="skeleton skeleton-img"></div>
  <div class="skeleton-body">
    <div class="skeleton skeleton-line w-3/4"></div>
    <div class="skeleton skeleton-line w-full"></div>
    <div class="skeleton skeleton-line w-1/2"></div>
  </div>
</div>

<style>
/* 반짝이는 로딩 효과 */
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 800px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}
.skeleton-img  { height: 160px; border-radius: 8px 8px 0 0; }
.skeleton-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.skeleton-line { height: 14px; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-skeleton' },
      {
        type: 'code',
        title: 'Pagination — 페이지 이동',
        demoId: '17-pagination',
        code: `<nav class="pagination" aria-label="페이지 이동">
  <button class="page-btn" disabled>‹ 이전</button>

  <button class="page-btn">1</button>
  <button class="page-btn active">2</button>
  <button class="page-btn">3</button>
  <span class="page-ellipsis">…</span>
  <button class="page-btn">10</button>

  <button class="page-btn">다음 ›</button>
</nav>

<style>
.pagination { display: flex; align-items: center; gap: 0.25rem; }
.page-btn {
  min-width: 36px; height: 36px; padding: 0 0.5rem;
  border: 1px solid #e5e7eb; border-radius: 6px;
  background: white; cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.page-btn:hover:not(:disabled) { background: #f3f4f6; }
.page-btn.active { background: #0a0a0a; color: white; border-color: #0a0a0a; }
.page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.page-ellipsis { padding: 0 0.25rem; color: #9ca3af; }
</style>`,
        language: 'html',
      },
      { type: 'demo', demoId: '17-pagination' },
      {
        type: 'code',
        title: 'FAB & Toast — 고정 버튼 / 알림',
        code: `<button class="fab" id="fabButton">＋</button>

<div class="toast" id="toast">저장되었습니다 ✓</div>

<script>
document.getElementById('fabButton').addEventListener('click', () => {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
});
</script>

<style>
.fab {
  position: fixed; bottom: 2rem; right: 2rem;
  width: 56px; height: 56px; border-radius: 50%;
  background: #0a0a0a; color: white; font-size: 1.5rem;
  border: none; cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}
.fab:hover { transform: scale(1.1); }

.toast {
  position: fixed; bottom: 5rem; right: 2rem;
  background: #0a0a0a; color: white;
  padding: 0.75rem 1.25rem; border-radius: 8px;
  font-size: 0.875rem; opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.3s;
  pointer-events: none;
}
.toast.show { opacity: 1; transform: translateY(0); }
</style>`,
        language: 'html',
      },
      {
        type: 'interactive',
      }
    ],
  },
  {
    id: '18',
    title: '오늘 내용 정리',
    description: '배운 내용을 복습하고 정리합니다',
    category: '#18',
    sections: [
      {
        type: 'text',
        title: '수고하셨습니다!',
        content: '오늘 **HTML**, **CSS**, **JavaScript**의 기초를 모두 배웠습니다. 이제 여러분은 **간단한 웹 페이지**를 만들 수 있습니다!',
      },
      {
        type: 'text',
        title: '핵심 요약',
        content: `
**HTML**: 웹 페이지의 구조와 내용
- 태그를 사용해 요소를 정의
- 시맨틱 태그로 의미 있는 구조 작성

**CSS**: 웹 페이지의 디자인과 레이아웃
- 선택자로 요소를 선택
- 박스 모델, Flexbox로 레이아웃 구성
- 미디어 쿼리로 반응형 디자인

**JavaScript**: 웹 페이지에 동적 기능 추가
- 변수, 연산자, 조건문, 반복문
- DOM 조작으로 페이지 제어
- 이벤트 처리로 사용자와 상호작용
        `,
      },
      {
        type: 'text',
        title: '다음 단계',
        content: '계속 연습하고 **작은 프로젝트**를 만들어보세요. **실습**이 가장 중요합니다!',
      }
    ],
  },
  {
    id: '19',
    title: '미니 프로젝트 - ToDo 앱',
    description: '배운 내용을 활용해 실제 ToDo 앱을 만들어봅니다',
    category: '#19',
    sections: [
      {
        type: 'text',
        title: 'ToDo 앱 만들기',
        content: '오늘 배운 **HTML**, **CSS**, **JavaScript**를 모두 활용하여 실제 동작하는 **ToDo 앱**을 만들어봅시다!',
      },
      {
        type: 'code',
        title: 'HTML 구조',
        code: `<div class="todo-app">
  <h2>나만의 작은 ToDo 보드</h2>
  
  <form id="todoForm">
    <input 
      type="text" 
      id="todoInput" 
      placeholder="할 일을 입력하세요..."
    />
    <button type="submit">추가</button>
  </form>
  
  <ul id="todoList"></ul>
</div>`,
        language: 'html',
      },
      {
        type: 'code',
        title: 'CSS 스타일',
        code: `.todo-app {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

#todoForm {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

#todoInput {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#todoList {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.todo-item.completed {
  opacity: 0.6;
  text-decoration: line-through;
}`,
        language: 'css',
      },
      {
        type: 'code',
        title: 'JavaScript 기능',
        code: `const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const text = input.value.trim();
  if (!text) return;
  
  // 새 할 일 항목 생성
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = \`
    <input type="checkbox" class="todo-checkbox" />
    <span class="todo-text">\${text}</span>
    <button class="delete-btn">삭제</button>
  \`;
  
  // 체크박스 이벤트
  const checkbox = li.querySelector('.todo-checkbox');
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });
  
  // 삭제 버튼 이벤트
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  
  list.appendChild(li);
  input.value = '';
});`,
        language: 'javascript',
      },
      {
        type: 'demo',
      }
    ],
  },
];
