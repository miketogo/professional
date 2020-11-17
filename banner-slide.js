let right_arrow = document.querySelector('.banner__heandler_position_right');
let left_arrow = document.querySelector('.banner__heandler_position_left');
let image_center = document.querySelector('.banner__container_content');
let image_left = document.querySelector('.banner__container_content_left');
let image_right = document.querySelector('.banner__container_content_right');
let title = document.querySelector('.banner__title');
let subtitle = document.querySelector('.banner__subtitle');
let i = 0;
let left = 5;
let right = 1;
let cheeck = false;
let banner__array = [
  { title: 'Какое-то предложение1',subtitle: 'Чтото напсианно снизу 1' , scrol_id:'#scrol-item0', content_id:'#banner__container_content_0', content_:'./images/banner/novoal.png'},
  { title: 'Какое-то предложение2',subtitle: 'Чтото напсианно снизу 2' , scrol_id:'#scrol-item1', content_id:'#banner__container_content_1', content_:'./images/banner/test.png'},
  { title: 'Какое-то предложение3',subtitle: 'Чтото напсианно снизу 3' , scrol_id:'#scrol-item2', content_id:'#banner__container_content_2', content_:'./images/banner/novoal.png'},
  { title: 'Какое-то предложение4',subtitle: 'Чтото напсианно снизу 4' , scrol_id:'#scrol-item3', content_id:'#banner__container_content_3', content_:'./images/banner/test.png'},
  { title: 'Какое-то предложение5',subtitle: 'Чтото напсианно снизу 5' , scrol_id:'#scrol-item4', content_id:'#banner__container_content_4', content_:'./images/banner/novoal.png'},
  { title: 'Какое-то предложение6',subtitle: 'Чтото напсианно снизу 6' , scrol_id:'#scrol-item5', content_id:'#banner__container_content_5', content_:'./images/banner/test.png'},
]
title.textContent = banner__array[i].title;
subtitle.textContent = banner__array[i].subtitle;
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
          console.log(left,i,right);
        },
        0.6 * 1000
      );
        },
        0.2 * 1000
      );
    };
    $(".banner__heandler").attr("disabled", false);
    cheeck= true;
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
        console.log(left,i,right);
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
            console.log(left,i,right);
          },
          0.6 * 1000
        );
      },
      0.2 * 1000
    );



  });



if(cheeck = true){
  var container = document.querySelector('.banner__container');
  var listener = SwipeListener(container);

  container.addEventListener('swipe', function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;

    if (screen.width < 1351){
    if (Math.abs(x[0]-x[1])>100){
      if (directions.right) {
        image_left.src = banner__array[left].content_;
        console.log('Swiped right.');
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
                console.log(left,i,right);
              },
              0.6 * 1000
            );
          },
          0.2 * 1000
        );

      }
      if (directions.left) {
        image_right.src = banner__array[right].content_;
        console.log('Swiped left.');
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
            console.log(left,i,right);
          },
          0.6 * 1000
        );
          },
          0.2 * 1000
        );

  }};}});

};
