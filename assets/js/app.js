$(function () {
  function openSubMenu() {
    $(this).find(".header__sub-menu").slideToggle();
  }
  $(".header__menu__item--has-child").on("click", openSubMenu);

  function openMobileMenu() {
    $(".header__nav").toggleClass("active");
    $(this).toggleClass("active");
  }
  $(".header__burger").on("click", openMobileMenu);

  if ($("body").hasClass("esther")) {
    $(".esther__gallery").slick({
      arrows: false,
      dots: true,
      autoplay: true,
      speed: 3000,
    });
  }
});
