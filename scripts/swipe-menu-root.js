var cards = document.getElementById('root');
var swipeMenu = document.getElementById('swipe-menu');
var background = document.getElementById('background-darker');
var startingX;
var checkeer = -55.1;
if(screen.width < 1351){

}
function rootHendleTouchStrat(evt){
  startingX= evt.touches[0].clientX;

};

function rootHendleTouchMove(evt){
  var touch = evt.touches[0];
  var change = (touch.clientX - startingX);
  if (change < 70){
    return;
  } else{
    if (screen.width > 1352){
      return
    };
    if (screen.width < 1351){
      swipeMenu.style.transition = 'none'
      background.style.left = 0;
      if(checkeer < 0){
        checkeer=(-53.6 + ((change -70) * 0.1));
        swipeMenu.style.left = (-55.1 + ((change -70) * 0.1)) + 'vw';
      };
      background.style.opacity = ((change-70)*0.003);

  };
    if (screen.width < 721){
      swipeMenu.style.transition = 'none'
      background.style.left = 0;
      background.style.opacity = ((change-70)*0.003);
      swipeMenu.style.left = (-73.3 + ((change -70) * 0.2)) + 'vw';
  };


    };
};

function rootHendleTouchEnd(evt){
  var change = evt.changedTouches[0].clientX - startingX;
  var threshold = screen.width / 3;
  if( change < threshold){
    if (screen.width < 1351){
      swipeMenu.style.left = -55.1 + 'vw';
    };
    if (screen.width < 721){
      swipeMenu.style.left = -73.3 + 'vw';
    };


    background.style.opacity = 0;
    swipeMenu.style.transition = 'all 0.3s ease-in-out'
    setTimeout(
          () => {
            background.style.left = -100 + 'vw';
            swipeMenu.style.transition = 'none'
          },
          0.3 * 1000
        );


  } else{
    // $('.background-darker').toggleClass('background-darker_active');
    $('body').addClass('stop-scrolling');
    background.style.opacity = 1;
    swipeMenu.style.transition = 'all 0.3s ease-in-out'
    swipeMenu.style.left = 0;
    checkeer = -55;
  };

};




  function backgroundHendleTouchStrat(evt){
    startingX= evt.touches[0].clientX;

  };

  function backgroundHendleTouchMove(evt){
    var touch = evt.touches[0];
    var change = (startingX - touch.clientX);
    if (change < 70){
      return;
    } else{
      swipeMenu.style.transition = 'none'
      if (screen.width < 1351){
        background.style.opacity = (1 -(change+70)*0.003);
        swipeMenu.style.left = (0 + ((-change +70) * 0.1)) + 'vw';
      };
      if (screen.width < 721){
        background.style.opacity = (1 -(change+70)*0.003);
        swipeMenu.style.left = (0 + ((-change +70) * 0.2)) + 'vw';
      };


    };
  };

  function backgroundHendleTouchEnd(evt){
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if( change < threshold){
      background.style.opacity = 1;
      swipeMenu.style.left = 0 + 'vw';
      swipeMenu.style.transition = 'all 0.3s ease-in-out'
    } else{
      if (screen.width > 1352){
        return
      };
      if (screen.width < 1351){
        swipeMenu.style.transition = 'all 0.3s ease-in-out';
        background.style.opacity = 0;
        swipeMenu.style.left = -55.1 + 'vw';
      };
      // $('.background-darker').toggleClass('background-darker_active');
      if (screen.width < 721){
        swipeMenu.style.transition = 'all 0.3s ease-in-out';
        background.style.opacity = 0;
        swipeMenu.style.left = -73.3 + 'vw';
      };

      $('body').removeClass('stop-scrolling');
      setTimeout(
        () => {
          background.style.left = -100 + 'vw';
        },
        0.3 * 1000
      );
    };

  };

  function swipeMenuHendleTouchStrat(evt){
    startingX= evt.touches[0].clientX;

  };

  function swipeMenuHendleTouchMove(evt){
    var touch = evt.touches[0];
    var change = (startingX - touch.clientX);
    if (change < 70){
      return;
    } else{
      swipeMenu.style.transition = 'none'
      if (screen.width < 1351){
        background.style.opacity = (1 -(change+70)*0.003);
        swipeMenu.style.left = (0 + ((-change +70) * 0.1)) + 'vw';
      };
      if (screen.width < 721){
        background.style.opacity = (1 -(change+70)*0.003);
        swipeMenu.style.left = (0 + ((-change +70) * 0.2)) + 'vw';
      };


    };
  };

  function swipeMenuHendleTouchEnd(evt){
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if( change < threshold){
      background.style.opacity = 1;
      swipeMenu.style.left = 0 + 'vw';
      swipeMenu.style.transition = 'all 0.3s ease-in-out'
    } else{
      if (screen.width > 1352){
        return
      };
      if (screen.width < 1351){
        swipeMenu.style.transition = 'all 0.3s ease-in-out';
        background.style.opacity = 0;
        swipeMenu.style.left = -55.1 + 'vw';
      };
      // $('.background-darker').toggleClass('background-darker_active');
      if (screen.width < 721){
        swipeMenu.style.transition = 'all 0.3s ease-in-out';
        background.style.opacity = 0;
        swipeMenu.style.left = -73.3 + 'vw';
      };

      $('body').removeClass('stop-scrolling');
      setTimeout(
        () => {
          background.style.left = -100 + 'vw';
        },
        0.3 * 1000
      );
    };

  };



$('.menu__burger').on('click', function(e){
  e.preventDefault;
  swipeMenu.style.transition = 'all 0.3s ease-in-out'
  background.style.left = 0;
  background.style.opacity = 1;
  swipeMenu.style.left = 0;
  $('body').addClass('stop-scrolling');
});
$('.swipe-menu__exit_touch-zone').on('click', function(e){
  e.preventDefault;
  background.style.opacity = 0;
  swipeMenu.style.transition = 'all 0.3s ease-in-out'
  swipeMenu.style.left = -73.3 + 'vw';
  $('body').removeClass('stop-scrolling');
  setTimeout(
    () => {
      background.style.left = -100 + 'vw';
    },
    0.3 * 1000
  );
});
background.addEventListener('click', function () {
  $('body').removeClass('stop-scrolling');
  background.style.opacity = 0;
  swipeMenu.style.transition = 'all 0.3s ease-in-out'
  swipeMenu.style.left = -73.3 + 'vw';
  setTimeout(
    () => {
      background.style.left = -100 + 'vw';
    },
    0.3 * 1000
  );
});
