// $(document).ready(function(){
//   $('.carousel__inner').slick({
//       speed: 1200,
//       adaptiveHeight: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="img/Icons/left.svg"> </button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="img/Icons/arrow_right.png"></button>',
//       responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 dots: true,
//                 arrows: false
//                 }
//         }
//       ]
//   });
// });
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items: 1,
//         autoHeight:true,
//         loop: true,
//         nav: true,
//         navText: ["<img src='img/icons/arrow_left.png'>", "<img src='img/Icons/arrow_right.png'>"],
//         dots: false,
//         responsive:{
//         900:{
//             nav: false
//         }
//     }  
//     }
//     )
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    loop: true,
    controls: false,
    nav: false,
    responsive: {
        640: {
            nav: true
        },
        700: {
            // edgePadding: 30,
            nav: true
        },
        900: {
          nav: true,
          navPosition: "bottom",
          edgePadding: 30
        }
      }
  });
document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
});