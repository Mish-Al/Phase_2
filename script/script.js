$(document).ready(function () {
    $(".nxtBtn").on("click", function () {
      let currentImg = $(".active");
      let nextImg = currentImg.next();
       console.log("click");
      if(nextImg.length){
          currentImg.removeClass('active').css('z-index', -1);
          nextImg.addClass('active').css('z-index', 1);
      }
     
      
    });
  });
  
// $(document).ready(function () {
//     let currentSlide = 0;
//     const slides = $('.slide');
//     let dots = $('.dot');
//     function showSlide(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slides.css('transform', `translateX(${-100 * currentSlide}%)`);
//         dots.removeClass('active');
//         dots.eq(currentSlide).addClass('active');
//     }
//     function changeSlide(offset) {
//         showSlide(currentSlide + offset);
//     }
//     $('.next.arrow').on('click', function () {
//         changeSlide(1);
//     });
//     $('.dots-container').on('click', '.dot', function () {
//         const dotIndex = $(this).index();
//         showSlide(dotIndex);
//     });
//     for (let i = 0; i < slides.length; i++) {
//         $('.dots-container').append('<div class="dot"></div>');
//     }
//     dots = $('.dot');
//     showSlide(currentSlide);
// });


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// };

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// <=== Hamburger Function ===>
// function myFunction(x) {
//     x.classList.toggle("change");
//   }

// $(document).ready(function() {
//     // Set up carousel slide index and timer variables
//     var slideIndex = 0;
//     var slideTimer;
  
//     // Show initial slide and start slide timer
//     showSlide(slideIndex);
//     startSlideTimer();
  
//     // Handle previous slide button click
//     $('.prev-slide').click(function() {
//       clearInterval(slideTimer);
//       slideIndex--;
//       if (slideIndex < 0) {
//         slideIndex = $('.slide').length - 1;
//       }
//       showSlide(slideIndex);
//       startSlideTimer();
//     });
  
//     // Handle next slide button click
//     $('.next-slide').click(function() {
//       clearInterval(slideTimer);
//       slideIndex++;
//       if (slideIndex >= $('.slide').length) {
//         slideIndex = 0;
//       }
//       showSlide(slideIndex);
//       startSlideTimer();
//     });
  
//     // Function to show the specified slide
//     function showSlide(index) {
//       $('.slide').hide();
//       $('.slide').eq(index).show();
//       $('.dot-indicator').removeClass('active');
//       $('.dot-indicator').eq(index).addClass('active');
//     }
  
//     // Function to start the slide timer
//     function startSlideTimer() {
//       slideTimer = setInterval(function() {
//         slideIndex++;
//         if (slideIndex >= $('.slide').length) {
//           slideIndex = 0;
//         }
//         showSlide(slideIndex);
//       }, 5000);
//     }
//   });