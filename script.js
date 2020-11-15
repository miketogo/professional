$('.menu__burger').on('click', function(e){
  e.preventDefault;
  $('.swipe-menu').toggleClass('swipe-menu_active');
  $('.background-fade').toggleClass('background-fade_active');
  $('body').addClass('stop-scrolling');
});

$('.swipe-menu__exit_touch-zone').on('click', function(e){
  e.preventDefault;
  $('.swipe-menu').removeClass('swipe-menu_active');
  $('body').removeClass('stop-scrolling');
});
