# Netflix

넷플릭스 대한민국 웹사이트 클론 코딩

## Description:

레이아웃 설계와 BEM 방법론을 참고하여 네이밍에 집중해 작업했습니다.

## Build with:

- html
- css
- javascript

## Features:

- 시맨틱 태그를 활용한 레이아웃 구성
- flex와 grid를 이용한 요소 배치
- css 변수를 활용한 스타일 시트 작성
- 반응형 웹 구현

## 기억하고 싶은 코드

### 1. 외부 font 적용

외부 font를 적용하는 코드

```css
@font-face {
  font-family: 'NetflixSans';
  src: url('../fonts/NetflixSans-Light.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'NetflixSans';
  src: url('../fonts/NetflixSans-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'NetflixSans';
  src: url('../fonts/NetflixSans-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}
```

<br>

### 2. 셀렉트 박스

셀렉트 박스 왼쪽에 이미지를 삽입하려면 select문을 `<div>`로 감싸 그 안에 이미지를 추가해주면 된다.

```html
<div class="header__nav__select">
  <img />
  <!-- 이미지 삽입 -->
  <select name="languge">
    <option value="ko">한국어</option>
    <option value="en">English</option>
  </select>
</div>
```

<br>

### 3. 어두운 배경이미지

배경 이미지는 어둡게 처리하고, 그 안의 텍스트는 밝게 유지하는 코드

```css
main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url('../images/main.jpg');
}
```

<br>

### 4. 요소 show/hide 기능 구현

이벤트가 발생하면 특정 요소가 보이게 하는 기능 구현  
`data-*`로 필요한 정보를 저장해 사용했다.

```js
const faqCardContainer = document.querySelector('.faq__card-container');
faqCardContainer.addEventListener('click', (e) => {
  // faq 번호 가져오기
  const faqNum = e.target.dataset.faq;
  // 번호에 해당하는 보여주고 싶은 요소 가져오기
  const faqBody = document.querySelector(`[data-faq=faq_body_${faqNum}]`);
  const faqIcon = e.target.querySelector('i');
  faqBody.classList.toggle('hide');
  faqIcon.classList.toggle('xi-plus');
  faqIcon.classList.toggle('xi-close');
});
```

> 💡이벤트 타겟의 자식요소를 가져오기 위해 `children`을 사용하지 않고,
> `e.target.querySelector()`로 이벤트 타겟 하위 요소에서 검색해 가져왔다.

## Reference

2025.2.18. 넷플릭스 대한민국 사이트
![netflix-kr_web_page](https://github.com/user-attachments/assets/fe229e2b-6f60-4145-8b63-ed531c513548)
