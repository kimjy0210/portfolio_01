
// 문서준비이벤트
$(function () {

  // depth2_wrap
  $(".depth2_wrap").hide()

  $("#gnb > li").mouseenter(function () {
    $(this).find(".depth2_wrap").stop().fadeIn()
  });

  $("#gnb > li").mouseleave(function () {
    $(this).find(".depth2_wrap").stop().fadeOut()
  });

  // mb 메인배너 영역
  const mb = new Swiper('.mb', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-button-pagination",
      type: "fraction",
    },
    navigation: { //방향버튼 - 태그추가
      nextEl: ".swiper-button-next", // 다음
      prevEl: ".swiper-button-prev", // 이전
    },
  });

  // mgnb 전체메뉴
  $(".mgnb_wrap").hide();

  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });

  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").slideToggle();
    $(this).toggleClass("on");
  });

  // program 프로그램 영역
  const program_list = new Swiper('.program_list', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: { //방향버튼 - 태그추가
      nextEl: ".swiper-button-next", // 다음
      prevEl: ".swiper-button-prev", // 이전
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1101: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1441: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });


  // reservation 시설예약신청 영역
  const reservation_list = new Swiper('.reservation_list', {

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-button-pagination",
      type: "bullets",
      clickable: true,
    },
  });


  // footer 푸터 영역
  $(".family li ol").hide()

  $(".family > li").click(function () {
    $(".family > li ol").stop().slideToggle();
    $(this).toggleClass("on");
  });

}); // 문서준비이벤트 종료 (삭제x)