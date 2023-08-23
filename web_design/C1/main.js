$(function(){

    $('.lnb_list li').mouseover(function(){
        $(this).find('.sub_menu').css({'width':'100%'})
        $(this).find('.sub_menu').css({'display':'block'})
    })
    $('.lnb_list li').mouseleave(function(){
        $('.sub_menu').css({'width':'0'})
        $('.sub_menu').css({'display':'none'})
        
    })


    $('.slide:gt(0)').hide()
    setInterval(() => {
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 2000);

})