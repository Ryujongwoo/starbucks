/* 여기 부터
// console.log('JS');
// search 클래스 속성이 지정된 요소를 선택한다.
const searchEl = document.querySelector('.search');
// search 클래스 속성이 지정된 자식 요소 중에서 input 태그 요소를 선택한다.
// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

// search 클래스 속성이 지정된 요소가 클릭되면 실행할 이벤트를 지정한다.
searchEl.addEventListener('click', function () {
  // input 태그 요소(검색창)에 포커스를 지정한다.
  searchInputEl.focus();
});

// search 클래스 속성이 지정된 자식 요소 중에서 input 태그 요소가 포커스를 가지면 실행할 
// 이벤트를 지정한다.
searchInputEl.addEventListener('focus', function () {
  // search 클래스 속성이 지정된 요소에 focused 클래스 속성을 지정한다.
  searchEl.classList.add('focused');
  // search 클래스 속성이 지정된 자식 요소 중에서 input 태그 요소에 placeholder 속성을
  // 지정하고 속성 값으로 통합검색을 지정한다.
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// search 클래스 속성이 지정된 자식 요소 중에서 input 태그 요소가 포커스를 잃으면 실행할 
// 이벤트를 지정한다.
searchInputEl.addEventListener('blur', function () {
  // search 클래스 속성이 지정된 요소의 focused 클래스 속성을 제거한다.
  searchEl.classList.remove('focused');
  // search 클래스 속성이 지정된 자식 요소 중에서 input 태그 요소에 placeholder 속성을
  // 공백으로 지정한다.
  searchInputEl.setAttribute('placeholder', '');
});
여기까지 common.js로 이동 */

// badges 클래스 속성이 지정된 요소를 선택한다.
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window는 자바스크립트에서 브라우저에 보이는 창 자체를 의미한다.
// 브라우저에 보이는 창에서 실행될 스크롤 이벤트를 지정한다.
// window.addEventListener('scroll', function () {
//   console.log('scroll!');
// });

// 화면이 스크롤 될때마다 이벤트가 실행되면 너무 많은 이벤트가 실행되는 문제가 발생되므로 lodash.js를
// 사용한다.
// debounce와 throttle을 이용한 최적화
// debounce와 throttle은 이벤트의 반복 실행시 콜백 함수의 불필요한 실행을 줄이는 역할을 한다.
// 여러차례 빈번하게 발생하게되는 랜더링을 막아 줄 수 있다.
// 이러한 debounce, throttle을 간편하게 구현할 수 있도록 만든 라이브러리가 Lodash이다. 물론 라이브러리를
// 사용하지 않고 직접 구현할 수도 있다.
// _.throttle(콜백 함수, 시간): 지정된 시간마다 콜백 함수를 실행한다.
window.addEventListener('scroll', _.throttle(function () {
  // console.log('scroll!');
  // window.scrollY: 화면이 위에서부터 몇 px 위치에 있는지 얻어온다.
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간(초), 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      // opacity는 화면에서 사라지게만 할 뿐 요소가 차지하는 영역은 그대로 유지되기 때문에 display를 이용해서
      // 요소가 차지하던 영역도 사라지게 한다.
      display: 'none'
    });

    // 맨 위로 이동하는 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    // 맨 위로 이동하는 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));


toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    // scrollTo를 사용하기 위해서 ScrollToPlugin.min.js cdn을 추가해야 한다.
    scrollTo: 0
  });
});

// visual 클래스 속성이 지정된 요소의 모든 자손 요소 중에서 fade-in 속성이 지정된 모든 요소를 선택한다.
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (item, index) {
  // console.log(item, index);
  gsap.to(item, 1, {
    delay: (index + 1) * 0.7, // 애니메이션 재생 딜레이를 지정한다.
    opacity: 1,
  });
});

// 수직 슬라이드
// notice-line 클래스 속성이 지정된 요소의 자손 요소 중에서 mySwiper 클래스 속성이 지정된 요소를 선택해서
// swiper js를 사용해 수직 슬라이드 효과를 지정한다.
// Swiper('선택자', {옵션})
new Swiper('.notice-line .mySwiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생
  loop: true // 반복 재생
});

// 수평 슬라이드
new Swiper('.promotion .mySwiper', {
  direction: 'horizontal', // 수평 슬라이드, 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 5000, // 자동 재생 간격 지정, 기본값은 3000
  },
  loop: true,
  pagination: { // 현재 화면에 보여지는 슬라이드 페이지 보이기
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이동
    prevEl: ".promotion .swiper-prev", // 이전 슬라이드 보이기
    nextEl: ".promotion .swiper-next", // 다음 슬라이드 보이기
  },
});

// promotion 클래스 속성이 지정된 요소를 선택한다.
const promotionEl = document.querySelector('.promotion');
// toggle-promotion 클래스 속성이 지정된 요소를 선택한다.
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 이거 먼저 설명하고 나머지 설명
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축으로 움직이는 정도
    repeat: -1, // 반복 횟수, -1은 무한대
    yoyo: true, // 왕복 재생
    ease: "power1.inOut", // 이징 함수
    delay: random(0, delay),
  });
}
// floating 클래스 먼저 실행해 보고 1, 2, 3으로 나눠서 실행
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// section 태그 중에 scroll-spy 클래스가 지정된 모든 요소를 선택한다.
const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls.length);

spyEls.forEach(function (item) {
  console.log(item);
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: item, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8 // 브라우저에 표시된 내용이 위치한 부분의 비율
    })
    .setClassToggle(item, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

// 어워즈
new Swiper('.awards .mySwiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

/* 여기부터터
// 올해 연도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
여기까지 common.js로 이동 */

