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
        content: '이 강의에서는 HTML, CSS, JavaScript의 기초를 배웁니다. 첫 번째로 브라우저에서 정보를 출력하는 방법을 알아봅시다.',
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
        content: 'HTML 문서는 문서의 정보를 담는 <head>와 화면에 보이는 내용을 담는 <body>로 구성됩니다.',
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
        content: 'HTML은 제목(h1~h6), 단락(p), 강조(strong, em) 등 다양한 텍스트 태그를 제공합니다.',
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
        content: '<a> 태그로 다른 페이지로 이동하고, <img> 태그로 이미지를 표시합니다.',
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
        content: `시맨틱(semantic)은 "의미를 가진다"는 뜻입니다.

<div>는 아무 의미 없는 상자지만, 시맨틱 태그는 그 안의 내용이 무엇인지 이름만 봐도 알 수 있습니다.

예시:
• <div class="header"> → 이름이 없어서 사람이 읽어야 알 수 있음
• <header>           → 이름만 봐도 "페이지 상단"임을 즉시 알 수 있음

시맨틱 태그를 쓰면:
① 코드를 사람이 읽기 쉬워집니다 (가독성 ↑)
② 검색 엔진(Google)이 페이지 구조를 더 잘 이해합니다 (SEO ↑)
③ 스크린 리더(시각장애인 보조도구)가 페이지를 올바르게 읽습니다 (접근성 ↑)`,
      },
      { type: 'demo', demoId: '05-semantic' },
      {
        type: 'text',
        title: '부모 태그 안에 자식 태그를 넣으면?',
        content: `HTML 태그는 나무(Tree) 구조처럼 서로 감쌀 수 있습니다.

바깥에 있는 태그 = 부모(Parent)
안에 들어가는 태그 = 자식(Child)

핵심 규칙:
• 자식은 부모 영역 안에서만 표시됩니다
• 부모에 적용된 스타일은 자식에게 상속될 수 있습니다
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
        content: 'CSS 선택자를 사용하여 스타일을 적용할 요소를 지정합니다.',
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
        content: '모든 HTML 요소는 박스 형태이며, content, padding, border, margin으로 구성됩니다.',
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
        title: 'Flexbox',
        content: 'Flexbox는 요소를 효율적으로 배치하고 정렬하는 강력한 레이아웃 시스템입니다.',
      },
      {
        type: 'code',
        title: 'Flex 기본 사용법',
        code: `.container {
  display: flex;
  
  /* 주축 정렬 */
  justify-content: center; /* flex-start, flex-end, space-between, space-around */
  
  /* 교차축 정렬 */
  align-items: center; /* flex-start, flex-end, stretch */
  
  /* 줄바꿈 */
  flex-wrap: wrap;
  
  /* 간격 */
  gap: 20px;
}

.item {
  /* 비율로 크기 지정 */
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}

.item-large {
  flex: 2; /* 2배 크기 */
}`,
        language: 'css',
      },
      {
        type: 'demo',
      }
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
        content: '미디어 쿼리를 사용하면 화면 크기에 따라 다른 스타일을 적용할 수 있습니다.',
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

① transition — 상태 변화(hover 등)를 부드럽게 연결
② animation + @keyframes — 독립적으로 반복 실행되는 움직임
③ transform — 요소를 이동·확대·회전·기울이기
④ Intersection Observer — 스크롤 시 요소가 화면에 들어오면 애니메이션 실행`,
      },
      {
        type: 'code',
        title: '① Transition',
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
        type: 'code',
        title: '② Animation & @keyframes',
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
        type: 'code',
        title: '③ Transform — 이동 / 확대 / 회전 / 기울이기',
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
        type: 'code',
        title: '④ Intersection Observer — 스크롤 reveal 효과',
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
        content: 'JavaScript는 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다.',
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
        title: '변수와 연산자',
        content: 'let, const로 변수를 선언하고, 다양한 연산을 수행할 수 있습니다.',
      },
      {
        type: 'code',
        title: '변수 선언과 연산',
        code: `// 변수 선언
let age = 20; // 재할당 가능
const name = "김철수"; // 재할당 불가능

// 산술 연산자
let a = 10 + 5; // 15
let b = 10 - 5; // 5
let c = 10 * 5; // 50
let d = 10 / 5; // 2
let e = 10 % 3; // 1 (나머지)

// 비교 연산자
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 === 10); // true (일치)
console.log(10 !== 5);  // true (불일치)

// 논리 연산자
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)

// 문자열 연결
const greeting = "안녕" + "하세요"; // "안녕하세요"
const message = \`이름: \${name}, 나이: \${age}\`; // 템플릿 리터럴`,
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
        content: '조건에 따라 다른 동작을 수행하고, 반복 작업을 효율적으로 처리할 수 있습니다.',
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
        content: 'DOM은 HTML 문서를 객체로 표현한 것으로, JavaScript로 웹 페이지를 동적으로 조작할 수 있습니다.',
      },
      {
        type: 'code',
        title: '요소 선택하기',
        code: `// ID로 선택
const header = document.getElementById('header');

// 클래스로 선택
const items = document.getElementsByClassName('item');

// CSS 선택자로 선택
const firstButton = document.querySelector('button');
const allButtons = document.querySelectorAll('button');

// 태그로 선택
const paragraphs = document.getElementsByTagName('p');`,
        language: 'javascript',
      },
      {
        type: 'code',
        title: '요소 조작하기',
        code: `// 텍스트 변경
const title = document.querySelector('h1');
title.textContent = "새로운 제목";
title.innerHTML = "<strong>강조된</strong> 제목";

// 스타일 변경
title.style.color = "blue";
title.style.fontSize = "32px";
title.style.backgroundColor = "yellow";

// 클래스 조작
const box = document.querySelector('.box');
box.classList.add('active');
box.classList.remove('inactive');
box.classList.toggle('highlight');

// 속성 조작
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.getAttribute('href');

// 요소 생성 및 추가
const newDiv = document.createElement('div');
newDiv.textContent = "새로운 요소";
document.body.appendChild(newDiv);`,
        language: 'javascript',
      },
      {
        type: 'demo',
      }
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
        title: '이벤트 리스너',
        content: '사용자의 클릭, 키보드 입력, 마우스 움직임 등의 이벤트를 감지하고 처리할 수 있습니다.',
      },
      {
        type: 'code',
        title: '이벤트 처리하기',
        code: `// 클릭 이벤트
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('버튼이 클릭되었습니다!');
});

// 화살표 함수로도 가능
button.addEventListener('click', () => {
  console.log('클릭!');
});

// 입력 이벤트
const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  console.log('입력값:', event.target.value);
});

// 폼 제출 이벤트
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 동작 방지
  console.log('폼 제출됨');
});

// 마우스 이벤트
const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'gray';
});

// 키보드 이벤트
document.addEventListener('keydown', (event) => {
  console.log('누른 키:', event.key);
  if (event.key === 'Enter') {
    console.log('엔터 키 입력!');
  }
});`,
        language: 'javascript',
      },
      {
        type: 'demo',
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
        content: '프로그래밍 중 발생하는 다양한 에러를 이해하고 해결하는 방법을 배웁니다. F12를 눌러 콘솔을 확인하세요!',
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
        content: `웹 서비스는 수십 가지 반복적인 UI 패턴으로 이루어져 있습니다. 자주 쓰는 컴포넌트 이름과 구조를 알아두면 디자인 시스템을 이해하고 구현하는 속도가 빨라집니다.

주요 컴포넌트 목록:
• NAV (Navigation Bar) — 상단 탐색 메뉴
• Breadcrumb — 현재 위치 경로 표시
• Modal / Dialog — 팝업 레이어
• Dropdown / Select — 선택 목록
• Card — 콘텐츠 묶음 박스
• Badge / Chip — 상태·카테고리 라벨
• Toast / Snackbar — 일시적 알림 메시지
• FAB (Floating Action Button) — 고정 액션 버튼
• Skeleton — 로딩 중 자리 표시자
• Pagination — 페이지 이동 컨트롤`,
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
        content: '오늘 HTML, CSS, JavaScript의 기초를 모두 배웠습니다. 이제 여러분은 간단한 웹 페이지를 만들 수 있습니다!',
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
        content: '계속 연습하고 작은 프로젝트를 만들어보세요. 실습이 가장 중요합니다!',
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
        content: '오늘 배운 HTML, CSS, JavaScript를 모두 활용하여 실제 동작하는 ToDo 앱을 만들어봅시다!',
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
