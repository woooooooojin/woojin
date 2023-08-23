$(function(){

    $('.menu_list').mouseenter(function(){
        $('.sub_menu').slideDown(500)
    })
    $('.menu_list').mouseleave(function(){
        $('.sub_menu').slideUp(500)
    })


    setInterval(() => {
        $('.slide_wrap').animate({'margin-left' : '-100%'},function(){
            $('.slide').first().appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-left' : '0%'})
        })
    }, 2000);

})