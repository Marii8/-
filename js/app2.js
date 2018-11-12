// beach.htmlにて使用
$(function(){
  let mySwiper = new Swiper('.swiper-container',{
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  effect: 'fade',
  })
});