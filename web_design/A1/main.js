$(function(){

    $('.menu_list').mouseenter(function(){
        $('.sub_menu').stop().slideDown()
    })

    $('.menu_list').mouseleave(function(){
        $('.sub_menu').stop().slideUp()
    })


    setInterval(() => {
        $('.slide_wrap').animate({'margin-left' : '100%'},function(){
            $('.slide').first().appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-left' : '0'})
        })
    }, 3000);

})