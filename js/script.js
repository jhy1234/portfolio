$(document).ready(function(){
    var navBut = document.getElementById("navIcon"),
    navMobile = document.getElementById("navMobile"),
    caption = document.getElementById("caption");

    const mq = window.matchMedia("(max-width: 600px)");

    $(navBut).click(function(){
        $(navMobile).fadeToggle(300, function(){
            $(caption).fadeToggle(300);
        });
    });

    $(window).resize(function(){
        if(!mq.matches){
            $(navMobile).hide();
            caption.style.display = "flex";
            caption.style.top = "120px";
        } else {
            caption.style.top = 0;

        }
    });

    //animated bar, reference: https://codepen.io/alex_rodrigues/pen/ogYZdr
    setTimeout(function start (){
    
    $('.skillBars').each(function(i){  
        var $bar = $(this);
        $(this).append('<span class="percent"></span>')
        setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));      
        }, i*100);
    });

    $('.percent').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).parent('.skillBars').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) +'%');
            }
        });
    });

    }, 300)
    
});