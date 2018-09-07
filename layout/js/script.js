$('.menu-collapse').click(function(){
    $('.menu-sub').not($(this).parent().next()).hide();
    $(this).parent().next().fadeToggle(300);
});