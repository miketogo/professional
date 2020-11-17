var container1 = document.querySelector(".cards");
var listener = SwipeListener(container1);
let background= document.querySelector('.background-darker');


container1.addEventListener('swipe', function (e) {
  var directions = e.detail.directions;
  var x = e.detail.x;
  var y = e.detail.y;

  if (screen.width < 1351){
  if (Math.abs(x[0]-x[1])>100){
    if (directions.right) {
        $('.swipe-menu').toggleClass('swipe-menu_active');
        $('.background-darker').toggleClass('background-darker_active');
        $('body').addClass('stop-scrolling');
    }
    }};
  }
);
var container2 = document.querySelector(".root");
  var listener = SwipeListener(container2);

container2.addEventListener('swipe', function (e) {
  var directions = e.detail.directions;
  var x = e.detail.x;
  var y = e.detail.y;

  if (screen.width < 1351){
  if (Math.abs(x[0]-x[1])>100){
    if (directions.left) {
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
    }
    }};
  }
);

background.addEventListener('click', function () {
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
