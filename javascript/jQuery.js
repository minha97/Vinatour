$(function(){
    //---- mainBanner ----
    var showBanner = 0;

    function fadeBanner(){
        console.log(showBanner);
        $(".banner>ul>li").eq(showBanner).stop().fadeIn(800)
        .siblings().fadeOut(800);

        $(".pager li").eq(showBanner).addClass("active")
        .siblings()
        .removeClass("active");
    }

    $(".pager li").click(function(){
        showBanner = $(this).index();
        
        fadeBanner();
    })

    $(".arrow a").first().click(function(){
        console.log(showBanner);
        if (showBanner > 0) {
            showBanner--;
        } else {
            showBanner = 2;
        }
        fadeBanner();
    })
    $(".arrow a").last().click(function () {
        console.log(showBanner)
        if (showBanner < 2) {
            showBanner++;
        } else {
            showBanner = 0;
        }
        fadeBanner();
    })

    // ---- resort 플러그인 ----

    $(".resortA>ul").slick({
        centerMode:true,
        slidesToShow:3,
        slidesToScroll:1,
        // autoplay:true,
        // autoplaySpeed:2000,
        centerPadding:'60px',
        responsive: [
            {
              breakpoint: 361,
              settings: {
                slidesToShow: 1,
                centerMode:false
              }
            },
        ]
    })
    
    //---- ham ----
    
    var button = false;
    $(".ham").on("click", function () {
        
        if (button == false) {
            $(".ham_bg").css("display", "block");
            // console.log("클릭")
            $("#nav").stop().animate({
                right: 0
            }, 300)
            button = true;
        }
        else {
            $(".ham_bg").css("display", "none");
            $("#nav").stop().animate({
                right: -100 + "%"
            }, 500)
            button = false;
        }
    });
});