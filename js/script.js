!function(a){"use strict";a(window).on("load",function(){a(".loader-inner").fadeOut(),a(".loader").delay(200).fadeOut("slow")});var s=a(".header"),e=s.offset();a(window).scroll(function(){a(this).scrollTop()>e.top+50&&s.hasClass("default")?s.fadeOut("fast",function(){a(this).removeClass("default").addClass("switched-header").fadeIn(200),a(".scroll-to-top").addClass("active")}):a(this).scrollTop()<=e.top+50&&s.hasClass("switched-header")&&s.fadeOut("fast",function(){a(this).removeClass("switched-header").addClass("default").fadeIn(100),a(".scroll-to-top").removeClass("active")})}),a("a.scroll").smoothScroll({speed:800,offset:-120}),a(".popup-image").magnificPopup({type:"image",fixedContentPos:!1,fixedBgPos:!1,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),a(".popup-youtube, .popup-vimeo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),a(".filter li a").on("click",function(){a(this).addClass("active"),a(this).parent().siblings().find("a").removeClass("active");var s=a(this).attr("data-filter");if(a(this).closest(".portfolio").find(".grid-item").removeClass("disable"),"all"!==s){for(var e=a(this).closest(".portfolio").find(".grid-item"),o=0;o<e.length;o++)e.eq(o).hasClass(s)||e.eq(o).addClass("disable");return!1}}),a(".countdown").countdown("2020/12/19").on("update.countdown",function(s){a(this).html(s.strftime('<div class="p-2"><span class="counter mb-1 ">%d</span> <span class="label ">Day%!d</span></div> <div class="p-2"><span class="counter mb-1">%H</span> <span class="label">Hour%!H</span></div> <div class="p-2"><span class="counter mb-1">%M</span> <span class="label">Minute%!M</span></div> <div class="p-2"><span class="counter mb-1">%S</span> <span class="label">Second%!S</span></div>'))}),jarallax(document.querySelectorAll(".jarallax"),{speed:.5,disableParallax:/iPad|iPhone|iPod|Android/,disableVideo:/iPad|iPhone|iPod|Android/})}(jQuery);