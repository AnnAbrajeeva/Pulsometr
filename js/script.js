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
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src='img/icons/arrow_left.png'>", "<img src='img/Icons/arrow_right.png'>"],
        dots: false
    }
    );
  });