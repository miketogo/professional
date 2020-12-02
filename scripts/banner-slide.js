

let right_arrow = document.querySelector('.banner__heandler_position_right');
let left_arrow = document.querySelector('.banner__heandler_position_left');
let image_center = document.querySelector('.banner__container_content');
let image_left = document.querySelector('.banner__container_content_left');
let image_right = document.querySelector('.banner__container_content_right');
let title = document.querySelector('.banner__title');
let subtitle = document.querySelector('.banner__subtitle');
let button = document.querySelector('.banner__button');
let i = 0;
let left = 5;
let right = 1;
let cheeck = 0;
let banner__array = [
  { title: 'Какое-то предложение1',subtitle: 'Чтото напсианно снизу 1' , scrol_id:'#scrol-item0', content_id:'#banner__container_content_0', content_:'./images/banner/profes.png', bannerHref: '#1'},
  { title: 'Арендуйте паркинг!',subtitle: 'Устали искать место?' , scrol_id:'#scrol-item1', content_id:'#banner__container_content_1', content_:'./images/banner/parking.png', bannerHref: '#2'},
  { title: 'Какое-то предложение3',subtitle: 'Чтото напсианно снизу 3' , scrol_id:'#scrol-item2', content_id:'#banner__container_content_2', content_:'./images/banner/profes.png', bannerHref: '#3'},
  { title: 'Covid-2019',subtitle: 'Ограничения работы Ук' , scrol_id:'#scrol-item3', content_id:'#banner__container_content_3', content_:'./images/banner/covid.png', bannerHref: '#4'},
  { title: 'Какое-то предложение5',subtitle: 'Чтото напсианно снизу 5' , scrol_id:'#scrol-item4', content_id:'#banner__container_content_4', content_:'./images/banner/test.png', bannerHref: '#5'},
  { title: 'Какое-то предложение6',subtitle: 'Чтото напсианно снизу 6' , scrol_id:'#scrol-item5', content_id:'#banner__container_content_5', content_:'./images/banner/novoal.png', bannerHref: '#6'},
]
title.textContent = banner__array[i].title;
subtitle.textContent = banner__array[i].subtitle;
image_center.src =banner__array[i].content_;
button.href = banner__array[i].bannerHref;
$(".banner__heandler").attr("disabled", true);
setTimeout(
  () => {
    for(let h = 0; h <= 0; h = h + 1){
      image_right.src = banner__array[right].content_;
      setTimeout(
        () => {
          i= i + 1;
          if(i>=6){
            i=0;
          };
          smoothly(title, 'textContent', banner__array[i].title);
          smoothly(subtitle, 'textContent', banner__array[i].subtitle);
      $('.banner__scrol-item').removeClass('banner__scrol-item_active');
      $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');
      $('.banner__container_content').toggleClass('banner__container_content_translate-left');
      $('.banner__container_content_right').toggleClass('banner__container_content_translate-left');
      button.href = banner__array[i].bannerHref;
      setTimeout(
        () => {
          image_center.src = banner__array[right].content_;
          $('.banner__container_content').removeClass('banner__container_content_translate-left');
          $('.banner__container_content_right').removeClass('banner__container_content_translate-left');
          right= right + 1;
          left= left + 1;
          if(right>=6){
            right=0;
          }
          if(left>=6){
            left=0;
          }
        },
        0.3 * 1000
      );
        },
        0.2 * 1000
      );
    };
    $(".banner__heandler").attr("disabled", false);
    cheeck= 1;
  },
  1.5 * 1000
);







  right_arrow.addEventListener('click', function () {
    image_right.src = banner__array[right].content_;
    $(".banner__heandler").attr("disabled", true);
    setTimeout(
      () => {
        $(".banner__heandler").attr("disabled", false);
      },
      0.8 * 1000
    );

    setTimeout(
      () => {
        i= i + 1;
        if(i>=6){
          i=0;
        };
        smoothly(title, 'textContent', banner__array[i].title);
        smoothly(subtitle, 'textContent', banner__array[i].subtitle);
    $('.banner__scrol-item').removeClass('banner__scrol-item_active');
    $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');
    $('.banner__container_content').toggleClass('banner__container_content_translate-left');
    $('.banner__container_content_right').toggleClass('banner__container_content_translate-left');
    button.href = banner__array[i].bannerHref;
    setTimeout(
      () => {
        image_center.src = banner__array[right].content_;
        $('.banner__container_content').removeClass('banner__container_content_translate-left');
        $('.banner__container_content_right').removeClass('banner__container_content_translate-left');
        right= right + 1;
        left= left + 1;
        if(right>=6){
          right=0;
        }
        if(left>=6){
          left=0;
        }
      },
      0.6 * 1000
    );
      },
      0.2 * 1000
    );



  });



  left_arrow.addEventListener('click', function () {
    image_left.src = banner__array[left].content_;
    $(".banner__heandler").attr("disabled", true);
    setTimeout(
      () => {
        $(".banner__heandler").attr("disabled", false);
      },
      0.8 * 1000
    );
    setTimeout(
      () => {
        i= i - 1;
        if(i<=-1){
          i=5;
        }
        smoothly(title, 'textContent', banner__array[i].title);
        smoothly(subtitle, 'textContent', banner__array[i].subtitle);
        $('.banner__scrol-item').removeClass('banner__scrol-item_active');
        $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');

        $('.banner__container_content').toggleClass('banner__container_content_translate-right');
        $('.banner__container_content_left').toggleClass('banner__container_content_translate-right');
        button.href = banner__array[i].bannerHref;
        setTimeout(
          () => {
            image_center.src = banner__array[left].content_;
            $('.banner__container_content').removeClass('banner__container_content_translate-right');
            $('.banner__container_content_left').removeClass('banner__container_content_translate-right');
            right= right - 1;
            left= left - 1;
            if(right<=-1){
              right=5;
            }
            if(left<=-1){
              left=5;
            }
          },
          0.6 * 1000
        );
      },
      0.2 * 1000
    );



  });

  var container = document.querySelector('.banner__container');
  var listener = SwipeListener(container);

  container.addEventListener('swipe', function (e) {
  var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;
    if(cheeck >= 1){
    if (screen.width < 1351){
    if (Math.abs(x[0]-x[1])>100){
      if (directions.right) {
        cheeck = 0;
        setTimeout(
          () => {
            cheeck = 1;
          },
          0.6 * 1000
        );
        image_left.src = banner__array[left].content_;
        setTimeout(
          () => {
            i= i - 1;
            if(i<=-1){
              i=5;
            }
            smoothly(title, 'textContent', banner__array[i].title);
            smoothly(subtitle, 'textContent', banner__array[i].subtitle);
            $('.banner__scrol-item').removeClass('banner__scrol-item_active');
            $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');

            $('.banner__container_content').toggleClass('banner__container_content_translate-right');
            $('.banner__container_content_left').toggleClass('banner__container_content_translate-right');
            button.href = banner__array[i].bannerHref;
            setTimeout(
              () => {
                image_center.src = banner__array[left].content_;
                $('.banner__container_content').removeClass('banner__container_content_translate-right');
                $('.banner__container_content_left').removeClass('banner__container_content_translate-right');
                right= right - 1;
                left= left - 1;
                if(right<=-1){
                  right=5;
                }
                if(left<=-1){
                  left=5;
                }
              },
              0.3 * 1000
            );
          },
          0.2 * 1000
        );

      }
      if (directions.left) {
        cheeck = 0;
        setTimeout(
          () => {
            cheeck = 1;
          },
          0.6 * 1000
        );
        image_right.src = banner__array[right].content_;
        setTimeout(
          () => {
            i= i + 1;
            if(i>=6){
              i=0;
            };
            smoothly(title, 'textContent', banner__array[i].title);
            smoothly(subtitle, 'textContent', banner__array[i].subtitle);
        $('.banner__scrol-item').removeClass('banner__scrol-item_active');
        $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');
        $('.banner__container_content').toggleClass('banner__container_content_translate-left');
        $('.banner__container_content_right').toggleClass('banner__container_content_translate-left');
        button.href = banner__array[i].bannerHref;
        setTimeout(
          () => {
            image_center.src = banner__array[right].content_;
            $('.banner__container_content').removeClass('banner__container_content_translate-left');
            $('.banner__container_content_right').removeClass('banner__container_content_translate-left');
            right= right + 1;
            left= left + 1;
            if(right>=6){
              right=0;
            }
            if(left>=6){
              left=0;
            }
          },
          0.3 * 1000
        );
          },
          0.2 * 1000
        );

  }};}};});
  //   var banner = document.getElementById('banner');
  //   var bannerCenter = document.getElementById('bannerCenter');
  //   var bannerRight = document.getElementById('bannerRight');
  //   var bannerLeft = document.getElementById('bannerLeft');
  //   var startingX;


  //   function bannerHendleTouchStrat(evt){
  //     startingX= evt.touches[0].clientX;

  //   };

  //   function bannerHendleTouchMove(evt){
  //     var touch = evt.touches[0];
  //     var change = (touch.clientX - startingX);
  //     var change2 = (startingX - touch.clientX);
  //     if (change < 70 & change2 < 0){
  //       return;
  //     }else{
  //       bannerCenter.style.transition = 'none'
  //       bannerLeft.style.transition = 'none'
  //       // right
  //         bannerLeft.src = banner__array[left].content_;
  //         bannerCenter.style.left = ((-change + 70) * -0.1) + '%';
  //         bannerLeft.style.left = (-100 + (-change + 70) * -0.1) + '%';
  //       };
  //     if(change2 < 70 & change < 0){
  //       return;
  //     }else{
  //             bannerCenter.style.transition = 'none'
  //             bannerRight.style.transition = 'none'
  //             // right
  //               bannerRight.src = banner__array[right].content_;
  //               bannerCenter.style.left = ((-change2 + 70) * 0.1) + '%';
  //               bannerRight.style.left = (100 - (-change2 + 70) * -0.1) + '%';
  //             };
  //          };

  //   function bannerHendleTouchEnd(evt){
  //     var change = evt.changedTouches[0].clientX - startingX;
  //     var change2 = startingX - evt.changedTouches[0].clientX;
  //     var threshold = screen.width / 3;
  //     bannerCenter.style.transition = 'all 0.3s ease-in-out';
  //     bannerLeft.style.transition = 'all 0.3s ease-in-out';
  //     bannerRight.style.transition = 'all 0.3s ease-in-out';
  //     if( change < threshold & change2 < 0){
  //         bannerCenter.style.left = 0 + '%';
  //         bannerLeft.style.left = -100 + '%';
  //   } else{
  //         bannerCenter.style.left = 100 + '%';
  //         bannerLeft.style.left = 0 + '%';
  //         i= i - 1;
  //           if(i<=-1){
  //             i=5;
  //           };
  //           $('.banner__scrol-item').removeClass('banner__scrol-item_active');
  //           $(banner__array[i].scrol_id).toggleClass('banner__scrol-item_active');
  //           smoothly(title, 'textContent', banner__array[i].title);
  //           smoothly(subtitle, 'textContent', banner__array[i].subtitle);
  //         setTimeout(
  //           () => {
  //             bannerCenter.src = banner__array[left].content_;
  //             bannerCenter.style.transition = 'none'
  //             bannerLeft.style.transition = 'none'
  //             bannerCenter.style.left = 0 + '%';
  //             bannerLeft.style.left = -100 + '%';
  //             right= right - 1;
  //             left= left - 1;
  //             if(right<=-1){
  //                right=5;
  //             };
  //             if(left<=-1){
  //                left=5;
  //             };

  //           },
  //           0.3 * 1000
  //         );


  //   };

  //      if( change2 < threshold & change < 0){
  //         bannerCenter.style.left = 0 + '%';
  //         bannerRight.style.left = 100 + '%';
  //     } else{
  //         bannerCenter.style.left = -100 + '%';
  //         bannerRight.style.left = 0 + '%';
  // };
  //   };



//   function bannerCenterHendleTouchStrat(evt){
//     startingX= evt.touches[0].clientX;

//   };

//   function bannerCenterHendleTouchMove(evt){
//     var touch = evt.touches[0];
//     var change = (startingX - touch.clientX);
//     if (change < 70){
//       return;
//     } else{
//       bannerCenter.style.transition = 'none'
//       bannerRight.style.transition = 'none'
//       // right
//         bannerRight.src = banner__array[right].content_;
//         bannerCenter.style.left = ((-change + 70) * 0.1) + '%';
//         bannerRight.style.left = (100 - (-change + 70) * -0.1) + '%';
//       };
//     };

//   function bannerCenterHendleTouchEnd(evt){
//     var change =  startingX - evt.changedTouches[0].clientX;
//     var threshold = screen.width / 3;
//     bannerCenter.style.transition = 'all 0.3s ease-in-out'
//     bannerRight.style.transition = 'all 0.3s ease-in-out'
//     if( change < threshold){
//         bannerCenter.style.left = 0 + '%';
//         bannerRight.style.left = 100 + '%';
//   } else{
//         bannerCenter.style.left = -100 + '%';
//         bannerRight.style.left = 0 + '%';

//   };
// };











//         left
//         if(direction = 2){
//           console.log(direction);
//           image_right.src = banner__array[right].content_;
//           bannerCenter.style.left = ((-change +70) * 0.1) + '%';
//           bannerRight.style.left = (100 - (-change +70) * -0.1) + '%';

//         };


