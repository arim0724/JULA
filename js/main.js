//aos 초기화
AOS.init({
  offset: 300,
  duration: 2000, //동작시간 2초 내부 모두!
  /* once: true, */ // 기본값은 false(반복) 스크롤 한번만 적용
  disable: window.innerWidth < 768, //breckpoint이야 중담점에서 aos 동작하지 않도록 처리
});



//제품슬라이드
const product_list = new Swiper('.product_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {

      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



//ham
$(".ham").click(function () {
  $(".mgnb_bg").fadeIn();
})

$(".mgnb_close").click(function () {
  $(".mgnb_bg").fadeOut();
})



/* gotop */
$(window).scroll(function () {
  let scrollpos = $(this).scrollTop();
  if (scrollpos > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});

// 버튼 클릭 시 페이지 맨 위로 스크롤
$(".gotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

