//  on scroll js
    $(window).scroll(function() {   

        var scroll = $(window).scrollTop();
      //console.log(scroll1) ;
        if (scroll >= 200) {
            $(".header").addClass("darkHeader");
        } else {
            $(".header").removeClass("darkHeader");
        }
    });

$(document).ready(function(){

    // slider js
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        mobileFirst: true,
      });   
    });
    
    // filter js
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
        }
        $(this).addClass("active");

    });