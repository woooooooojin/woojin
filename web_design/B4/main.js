$(function(){

    $('.lnb').mouseenter(function(){

        $('.sub_menu, .menubg').stop().slideDown(500)
    })
    $('.lnb').mouseleave(function(){
        $('.sub_menu, .menubg').stop().slideUp(500)
    })


    setInterval(() => {
        $('.slide_wrap').animate({'margin-left':'-100%'},function(){

            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-left':'0'})

        })
    }, 2500);

})