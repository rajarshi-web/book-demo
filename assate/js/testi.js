$('#testi').owlCarousel({
    loop:true,
    margin:0,
    mouseDrag:true,
    touchDrag:false,
    // animateIn: 'animate__fadeIn',
    // animateOut: 'animate__fadeOut',
    nav:false,
    // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed: 3000,
    responsive:{

        0:{

            items:1
        },
        768:{

            items:1
        },
        1000:{

            items:2
        }
    }
    
});