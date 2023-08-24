$(function(){

    $('.lnb li').mouseenter(function(){
        $(this).find('.sub_menu').stop().fadeIn(500)
    })
    $('.lnb li').mouseleave(function(){
        $(this).find('.sub_menu').stop().fadeOut(500)
    })


    setInterval(() => {
        $('.slide_wrap').animate({'margin-top' : '-650px'},function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-top' : '0'})
        })
    }, 2000);

})