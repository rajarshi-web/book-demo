$('#abd').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,   
    autoplayTimeout: 3000,
    smartSpeed: 400,
    center: true,
    dots:false,
    // navText: ['&#8592;', '&#8594;'],
    // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/****************************/

jQuery(document.documentElement).keydown(function (event) {    

    // var owl = jQuery("#carousel");

    // handle cursor keys
    if (event.keyCode == 37) {
       // go left
      owl.trigger('prev.owl.carousel', [400]);
      //owl.trigger('owl.prev');
    } else if (event.keyCode == 39) {
       // go right
        owl.trigger('next.owl.carousel', [400]);
       //owl.trigger('owl.next');
    }

});

/****************************/
const mainImg = document.querySelector(".main-img");
const img = document.getElementsByTagName("span");
function getImg(ele){
  mainImg.style.backgroundImage = "none";
  for(let i=0;i<img.length;i++){
    img[i].classList.add("effect");
    img[i].style.backgroundImage = `url(${ele.src})`;
    img[i].style.backgroundPosition = `${-60*i}px 0`;
  }
  setTimeout(()=>{
    for(let i=0;i<img.length;i++){
      img[i].classList.remove("effect");
    }
  },600);
}



/*Size is  set in pixels... supports being written as: '250px' */


