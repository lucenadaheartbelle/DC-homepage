

//testing

$(document).ready(function(){
    var index = 0;
    var slides = $('.slide');
    var total_slides = slides.length;

    // 🔹 1. Check if the URL has a hash (like #2025-performances)
    var hash = window.location.hash;
    if (hash) {
        var target = $(hash);
        if (target.length > 0) {
            index = slides.index(target);
        }
    }

    // 🔹 2. Show the correct slide (based on hash or first)
    slides.eq(index).addClass('active').show();

    function showNextSlide(){
        slides.eq(index).removeClass('active').hide();
        index = (index + 1) % total_slides;
        slides.eq(index).addClass('active').show();
    }

    function showPrevSlide(){
        slides.eq(index).removeClass('active').hide();
        index = (index - 1 + total_slides) % total_slides;
        slides.eq(index).addClass('active').show();
    }

    // 🔹 3. Navigation button events
    $('.left').on('click', showPrevSlide);
    $('.right').on('click', showNextSlide);

    // 🔹 4. Video click event for fullscreen
    $('.video').click(function(event) {
        event.preventDefault();
        
        var videoElement = $(this).find('video')[0];
        var videoSrc = $(this).find('source').attr('src');
        
        if (videoSrc) {
            $('#fullVideo').attr('src', videoSrc);
            $('#fullVideoContainer').css('display', 'flex');
        }
    });

    // 🔹 5. Close fullscreen when clicking outside or pressing ESC
    $('#fullVideoContainer, #closeBtn').click(function(event) {
        if (event.target === this || event.target.id === 'closeBtn') {
            $('#fullVideoContainer').hide();
            $('#fullVideo')[0].pause();
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('#fullVideoContainer').hide();
            $('#fullVideo')[0].pause();
        }
    });

    // 🔹 6. Auto-play preview on hover (optional)
    $('.video video').hover(
        function() {
            this.play();
        },
        function() {
            this.pause();
            this.currentTime = 0;
        }
    );

    // Debug info
    console.log("Loaded hash:", hash, "→ Showing slide index:", index);
});


