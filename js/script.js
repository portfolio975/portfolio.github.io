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