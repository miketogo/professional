
var container = document.querySelector('.root');
var listener = SwipeListener(container);

container.addEventListener('swipe', function (e) {
  var directions = e.detail.directions;
  var x = e.detail.x;
  var y = e.detail.y;

  if (screen.width < 1351){
  if (directions.right) {
    console.log('Swiped right.');
      $('.swipe-menu').toggleClass('swipe-menu_active');
      $('.background-darker').toggleClass('background-darker_active');
      $('body').addClass('stop-scrolling');
  }
  if (directions.left) {
    console.log('Swiped left.');
      $('.swipe-menu').removeClass('swipe-menu_active');
      $('body').removeClass('stop-scrolling');
      $('.background-darker').removeClass('background-darker_active');
  }};

  console.log('Started horizontally at', x[0], 'and ended at', x[1]);
  console.log('Started vertically at', y[0], 'and ended at', y[1]);
});
