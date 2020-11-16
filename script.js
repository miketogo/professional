$('.menu__burger').on('click', function(e){
  e.preventDefault;
  $('.swipe-menu').toggleClass('swipe-menu_active');
  $('.background-darker').toggleClass('background-darker_active');
  $('body').addClass('stop-scrolling');
});

$('.swipe-menu__exit_touch-zone').on('click', function(e){
  e.preventDefault;
  $('.swipe-menu').removeClass('swipe-menu_active');
  $('body').removeClass('stop-scrolling');
  $('.background-darker').toggleClass('background-darker_deactive');
  setTimeout(
    () => {
      $('.background-darker').removeClass('background-darker_active');
      $('.background-darker').removeClass('background-darker_deactive');
    },
    0.6 * 1000
  );
});

