$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var gtswiper = new Swiper('.gtswiper', {
        autoHeight: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
            fill: 'row',
            rows: 2,
        },
        // breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1000: {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            // }
        // },
        navigation: {
            nextEl: '.gtswiper-button-next',
            prevEl: '.gtswiper-button-prev',
          },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    });
})

$(function(){
    $(".gameType .top li").click(function(){
        $(this)
        .addClass("active");
       
        $(this).siblings()
        .removeClass("active");

        // $(".fakedeco").css({opacity:"0"});
        // $(".lideco").animate({paddingTop:"0.99%", opacity: "1"});

        var log = $(this).index();

        if( log == 0) 
        {
            $(".typeContent.hot")
            .addClass("display");

            $(".typeContent.hot").siblings()
            .removeClass("display");

            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.hot")
            .addClass("display");

            // $(".lideco").css({top: '-12px', left: '11.9%'});
        }

        if( log == 1) 
        {
            $(".typeContent.all")
            .addClass("display");

            $(".typeContent.all").siblings()
            .removeClass("display");

            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.all")
            .addClass("display");

            // $(".lideco").css({top: '-12px', left: '24.3%'});
        }

        if(log == 2) 
        {
            $(".typeContent.sport")
            .addClass("display");

            $(".typeContent.sport").siblings()
            .removeClass("display");

            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.sport")
            .addClass("display");
            
            // $(".lideco").css({top: '-12px', left: '36.65%'});
        }

        if(log == 3) 
        {
            $(".typeContent.live")
            .addClass("display");

            $(".typeContent.live").siblings()
            .removeClass("display");

            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.live")
            .addClass("display");
            
            
            // $(".lideco").css({top: '-12px', left: '49%'});
        }
        if(log == 4) 
        {
            $(".typeContent.slot")
            .addClass("display");

            $(".typeContent.slot").siblings()
            .removeClass("display");
            
            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.slot")
            .addClass("display");

            // $(".lideco").css({top: '-12px', left: '61.5%'});
        }
        if(log == 5) 
        {
            $(".typeContent.fish")
            .addClass("display");

            $(".typeContent.fish").siblings()
            .removeClass("display");
               
            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.fish")
            .addClass("display");

            // $(".lideco").css({top: '-12px', left: '73.8%'});
        }
        if(log == 6) 
        {
            $(".typeContent.board")
            .addClass("display");

            $(".typeContent.board").siblings()
            .removeClass("display");
                    
            $(".swiper-slide")
            .removeClass("display");

            $(".swiper-slide.board")
            .addClass("display");

            // $(".lideco").css({top: '-12px', left: '86.1%'});
        }
    })

})
//箭頭動畫
$(function(){
    var w = $(window).innerWidth();
    var midX = $(".gameType .midLine").offset().top;
    var n = $(".gameType .top li .lideco");
    var h= $(n).prop("scrollHeight");
    var nA = $(".gameType .top li.active .lideco");

    if(w >= 1350)
    {
        $(n).offset({
            top : midX + 50,
        })
        $(nA).offset({
            top : midX - (h - 3),
        })

        $(n,nA)
        .css({
            "width" : "7.9%",
            "height" : "0",
            "padding-top" : "10%",
        })
    }
    else
    {
        $(n,nA)
        .css({
            "width" : "9px",
            "height" : "11px",
            "padding-top" : "0"
        })

        $(nA).offset({
            top : midX - 8.5,
        })
    }

    $(".gameType .top li").click(function(){
        var w = $(window).innerWidth();
        var midX = $(".gameType .midLine").offset().top;
        var n = $(this).find(".lideco");
        var h= $(n).prop("scrollHeight");

        $(this)
        .siblings().find(".lideco")
        .offset({
            top : midX + 50,
        })

        if(w >= 1350)
        {
            $(n).offset({
                top : midX - (h - 3),
            })
        }
        else
        {
            $(n)
            .css({
                "width" : "9px",
                "height" : "11px",
                "padding-top" : "0"
            })

            $(n).offset({
                top : midX - 8.5,
            })
        }
    })

    $(window).resize(function(){
        var w = $(window).innerWidth();
        var midX = $(".gameType .midLine").offset().top;
        var n = $(".gameType .top li .lideco");
        var h= $(n).prop("scrollHeight");
        var nA = $(".gameType .top li.active .lideco");

        if(w >= 1350)
        {
            $(n).offset({
                top : midX + 50,
            })
            $(nA).offset({
                top : midX - (h - 3),
            })

            $(n,nA)
            .css({
                "width" : "7.9%",
                "height" : "0",
                "padding-top" : "10%",
            })
        }
        else
        {
            $(n,nA)
            .css({
                "width" : "9px",
                "height" : "11px",
                "padding" : "0"
            })

            $(n).offset({
                top : midX + 50,
            })

            $(nA).offset({
                top : midX - 8.5,
            })
        }
    })
})

//mouse Trial
$(function(){
    var timer = null;
    var handle = null;

    $("html").mousemove(function(mE){
        var mX = mE.pageX - $("html").offset().left;
        var mY = mE.pageY - $("html").offset().top;

        clearInterval(handle);
        handle = setInterval(function(){
            $(".bg")
            .append("<freeze style='top: "+ mY +"px; left: "+ mX +"px;'></freeze>");

            if($(".bg freeze").length >= 5)
            {
                $(".bg freeze").first()
                .remove();
            }
        },700)

        if(timer != null) return;

        timer = setTimeout(function(){
            timer = null;
        },220);

        $(".bg")
        .append("<i style='top: "+ mY +"px; left: "+ mX +"px;'></i>");

        if($(".bg i").length >= 10)
        {
            $(".bg i").first()
            .remove();
        }
    })
})
