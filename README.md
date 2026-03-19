
# NL WEB PROGRAMMING 강의 슬라이드 데모

Vite + React로 구성된 웹 강의용 슬라이드 데모 프로젝트입니다. 각 슬라이드는 텍스트/코드/데모/에러/인터랙티브 섹션으로 나뉘어 있으며, `src/app/data/slides.ts`에 데이터로 정의되어 있습니다.

## 실행 방법

1. 의존성 설치
   - `npm i`
2. 개발 서버 실행
   - `npm run dev`
3. 브라우저에서 접속
   - 홈 페이지에서 원하는 슬라이드를 선택할 수 있습니다.

직접 접근(해시 라우팅)
- `/#/slide/<slideId>` (예: `/#/slide/01`)

## 사용 방법(슬라이드)

- 이전/다음 버튼과 사이드바(목차)로 이동할 수 있습니다.
- 키보드 `ArrowLeft` / `ArrowRight`(좌/우 방향키)로 슬라이드를 넘길 수 있습니다.

## 대표 예시(구현에 의해 연결된 데모)

- `01`: 인트로(Interactive)
- `17`: UI 컴포넌트 데모(여러 섹션/데모Id)
- `19`: ToDo 앱 데모

## 프로젝트 구성(중요 파일)

- `src/app/routes.tsx`: 라우트 정의 (`/`, `slide/:slideId`, `*`)
- `src/app/pages/HomePage.tsx`: 슬라이드 목록 렌더링
- `src/app/pages/SlidePage.tsx`: 슬라이드 본문 렌더링
- `src/app/data/slides.ts`: 슬라이드 데이터 및 섹션 타입
  - 섹션 타입: `text`, `code`, `demo`, `error`, `interactive`

## 빌드(배포)

- `npm run build`
- `vite.config.ts`의 `base: '/Web_programming_Lecture/'` 설정을 참고하세요. 배포 경로가 다르면 `base`도 함께 조정해야 합니다.

## 크레딧 / 라이선스

이 프로젝트는 외부 리소스를 일부 사용합니다.
- `shadcn/ui` 구성요소( MIT 라이선스 )
- `Unsplash` 이미지

자세한 크레딧은 `ATTRIBUTIONS.md`를 참고하세요.

## HTML 속성: `id` 와 `class`

`id`와 `class`는 태그(요소) 안에 **속성(attribute)** 으로 넣습니다.

### `id` 넣는 방법

`id`는 보통 페이지에서 **하나만 유일하게** 쓰는 값입니다.

```html
<h1 id="page-title">제목</h1>
<button id="myBtn">클릭</button>
```

### `class` 넣는 방법

`class`는 같은 이름을 여러 요소가 공유할 수 있습니다.

```html
<p class="text-bold">굵은 텍스트</p>
<button class="btn">버튼</button>
```

여러 클래스를 한 태그에 넣을 땐 **공백**으로 구분합니다.

```html
<div class="card active"></div>
```

### (참고) CSS에서 사용하는 형태

- `id`는 `#id이름`
- `class`는 `.class이름`

```css
#page-title {
  color: orange;
}

.btn {
  padding: 10px 16px;
}
```
  