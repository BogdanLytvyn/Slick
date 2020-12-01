$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        easing: 'easy',
        infinite: true,
        initialSlides: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        waitForAnimate: false,
        centerMode: true,
        // rows: 2,
        // slidesPerRows: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
        ],
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
               
                    }
        ],
        mobileFirst:true,
       
    }
       
    );
})