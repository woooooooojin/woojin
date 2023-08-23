$(function(){

    $('.lnb_list li').mouseover(function(){
        $(this).find('.sub_menu').stop().fadeIn(500)
    })
    $('.lnb_list li').mouseleave(function(){
        $(this).find('.sub_menu').stop().fadeOut(500)
        
    })


    $('.slide:gt(0)').hide()
    setInterval(() => {
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 2000);

})