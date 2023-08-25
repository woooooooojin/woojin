$(function(){

    $('.lnb').mouseenter(function(){
        $('.sub_wrap, .menubg').fadeIn(500)
    })
    $('.lnb').mouseleave(function(){
        $('.sub_wrap, .menubg').fadeOut(500)
    })

    $('.slide:gt(0)').hide()
    setInterval(()=>{
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    },2500)

})