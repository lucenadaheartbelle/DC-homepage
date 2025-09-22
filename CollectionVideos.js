$(document).ready(function(){
            var index = 0;
            var slides = $('.slide');
            var total_slides = slides.length;

            // Show first slide
            slides.eq(index).addClass('active');

            function showNextSlide(){
                slides.eq(index).removeClass('active');
                index = (index + 1) % total_slides;
                slides.eq(index).addClass('active');
            }

            function showPrevSlide(){
                slides.eq(index).removeClass('active');
                index = (index - 1 + total_slides) % total_slides; // Fixed negative modulo
                slides.eq(index).addClass('active');
            }

            // Navigation button events
            $('.left').on('click', function(){
                showPrevSlide();
            });

            $('.right').on('click', function(){
                showNextSlide();
            });

            // Video click event for fullscreen
            $('.video').click(function(event) {
                event.preventDefault();
                
                var videoElement = $(this).find('video')[0];
                var videoSrc = $(this).find('source').attr('src');
                
                if (videoSrc) {
                    $('#fullVideo').attr('src', videoSrc);
                    $('#fullVideoContainer').css('display', 'flex');
                }
            });

            // Close fullscreen when clicking outside video or on close button
            $('#fullVideoContainer').click(function(event) {
                if (event.target === this) {
                    $(this).hide();
                    $('#fullVideo')[0].pause(); // Pause video when closing
                }
            });

            $('#closeBtn').click(function() {
                $('#fullVideoContainer').hide();
                $('#fullVideo')[0].pause(); // Pause video when closing
            });

            // ESC key to close fullscreen
            $(document).keyup(function(e) {
                if (e.keyCode == 27) { // ESC key
                    $('#fullVideoContainer').hide();
                    $('#fullVideo')[0].pause(); // Pause video when closing
                }
            });

            // Auto-play preview on hover (optional)
            $('.video video').hover(
                function() {
                    this.play();
                },
                function() {
                    this.pause();
                    this.currentTime = 0;
                }
            );
        });


// $(document).ready(function(){
//                 var index = 0;
//                 var total_slides = $('.slide').length;
//                 var slidesWrapper = $('.slides-wrapper');
//                 var isAnimating = false;

//                 function updateSlidePosition() {
//                     var translateX = -index * 100;
//                     slidesWrapper.css('transform', 'translateX(' + translateX + '%)');
//                 }

//                 function showNextSlide(){
//                     if (isAnimating) return;
//                     isAnimating = true;
                    
//                     index = (index + 1) % total_slides;
//                     updateSlidePosition();
                    
//                     setTimeout(function() {
//                         isAnimating = false;
//                     }, 600);
//                 }

//                 function showPrevSlide(){
//                     if (isAnimating) return;
//                     isAnimating = true;
                    
//                     index = (index - 1 + total_slides) % total_slides;
//                     slides.eq(index).addClass('active');
                    
//                     setTimeout(function() {
//                         isAnimating = false;
//                     }, 600);
//                 }

//                 // Navigation button events
//                 $('.left').on('click', function(){
//                     showPrevSlide();
//                 });

//                 $('.right').on('click', function(){
//                     showNextSlide();
//                 });

//                 // Keyboard navigation
//                 $(document).keydown(function(e) {
//                     if (e.keyCode == 37) { // Left arrow
//                         showPrevSlide();
//                     } else if (e.keyCode == 39) { // Right arrow
//                         showNextSlide();
//                     }
//                 });

//                 // Video click event for fullscreen
//                 $('.video').click(function(event) {
//                     event.preventDefault();
                    
//                     var videoSrc = $(this).find('source').attr('src');
                    
//                     if (videoSrc) {
//                         $('#fullVideo').attr('src', videoSrc);
//                         $('#fullVideoContainer').css('display', 'flex');
//                     }
//                 });

//                 // Close fullscreen when clicking outside video or on close button
//                 $('#fullVideoContainer').click(function(event) {
//                     if (event.target === this) {
//                         $(this).hide();
//                         $('#fullVideo')[0].pause();
//                         $('#fullVideo')[0].currentTime = 0;
//                     }
//                 });

//                 $('#closeBtn').click(function() {
//                     $('#fullVideoContainer').hide();
//                     $('#fullVideo')[0].pause();
//                     $('#fullVideo')[0].currentTime = 0;
//                 });

//                 // ESC key to close fullscreen
//                 $(document).keyup(function(e) {
//                     if (e.keyCode == 27) { // ESC key
//                         $('#fullVideoContainer').hide();
//                         $('#fullVideo')[0].pause();
//                         $('#fullVideo')[0].currentTime = 0;
//                     }
//                 });

//                 // Auto-play preview on hover (optional)
//                 $('.video video').hover(
//                     function() {
//                         this.play();
//                     },
//                     function() {
//                         this.pause();
//                         this.currentTime = 0;
//                     }
//                 );
//             });