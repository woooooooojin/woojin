$(function(){

    $('.lnb li').mouseenter(function(){
        $('.sub_wrap, .menubg').stop().fadeIn(500)
    })
    $('.lnb li').mouseleave(function(){
        $('.sub_wrap, .menubg').stop().fadeOut(500)
    })

    $('.slide:gt(0)').stop().hide()
    setInterval(() => {
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')

    }, 2500);

    // setInterval(() => {
    //     $('.slide_wrap').animate({'margin-top':'-400px'},function(){
    //         $('.slide:first').appendTo('.slide_wrap')
    //         $('.slide_wrap').css({'margin-top':'0'})
    //     })
    // }, 2500);

    // setInterval(() => {
    //     $('.slide_wrap').animate({'margin-left':'-100%'},function(){
    //         $('.slide:first').appendTo('.slide_wrap')
    //         $('.slide_wrap').css({'margin-left':'0%'})
    //     })
    // }, 2500);

})