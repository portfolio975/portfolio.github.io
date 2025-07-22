// ハンバーガーメニュー
jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery(".p-sp-header__button").toggleClass("is-checked");
  jQuery(".p-sp-nav").toggleClass("is-checked");
});

jQuery(".p-sp-nav__link").on("click", function(e) {
  e.preventDefault();
  jQuery(".p-sp-header__button").removeClass("is-checked");
  jQuery(".p-sp-nav").toggleClass("is-checked");
});

// スムーススクロール
jQuery('a[href^="#"]').on("click", function(e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});

jQuery(window).on("scroll", function() {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".c-to-top-button").css("opacity", "1");
  } else {
    jQuery(".c-to-top-button").css("opacity", "0");
  }
});

// スクロール連動
$(window).on("scroll", function () {
  $(".l-main section").each(function () {
    var sectionTop = $(this).offset().top;
    var sectionHeight = $(this).outerHeight();
    var scrollPos = $(window).scrollTop();
    var sectionId = $(this).attr("id");

    if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight - 100) {
      $(".p-header__nav-link").removeClass("active");
      $('.p-header__nav-link[href="#' + sectionId + '"]').addClass("active");
    }
  });
});




// const intersectionObserver = new IntersectionObserver(function(entries) {
//   entries.forEach(function(entry) {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("is-in-view");
//     } else {

//     }
//   })
// });

// const inViewItems = document.querySelectorAll(".js-in-view");
// inViewItems.forEach(function(inViewItem) {
//   intersectionObserver.observe(inViewItem);
// });




document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".p-fade__in-up");

  const options = {
    root: null, // ビューポート
    rootMargin: "-50% 0px -50% 0px", // 上下の中央50%の範囲がトリガー
    threshold: 0, // マージンに入った瞬間に発火
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
        observer.unobserve(entry.target); // 一度だけアニメーションしたい場合
      }
    });
  }, options);

  targets.forEach((target) => {
    observer.observe(target);
  });
});
