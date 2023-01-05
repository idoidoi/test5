$(function(){
    // Slick slider - welcome --------
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
      });

      /* TypeIt - Welcome */
    $('#typing').typeIt({
        strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
        speed: 100, // 알파벳 타이핑 속도
        autoStart: true, // 자동 재생 사용
        // loop: true,
        breakLines: false, // 줄 바꿈 사용안함
    });

    // slick - review------------
    $('.review-slider , .mockup-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
      });

    //   WOW Scroll Reveal Animation
      wow = new WOW(
        {
        boxClass:     'wow',      // default
        offset:       150,          // default
        mobile:       true,       // default
      }
      )
      wow.init();

})

$(function(){
    // Header Scroll Chansge
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            $('header, .btn-top').addClass('active');
        }
        else{
            $('header, .btn-top').removeClass('active');
        }
    })

    $('.faq-desc').eq(0).show();
    $('.faq-title').click(function(){
        $(this).next().stop().slideDown();
        $(this).parent().siblings().children('.faq-desc').stop().slideUp();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
    })

    $(".video-frame").click(function(){
        $(".video-modal").fadeIn();
        $("body").addClass("active");
    })
    $(".close-modal").click(function(){
        $(".video-modal").fadeOut();
        $("body").removeClass("active");
    })
})