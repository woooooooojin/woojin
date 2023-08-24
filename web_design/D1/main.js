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

const popBtn = document.querySelector('.first')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

popBtn.addEventListener('click',()=>{
    popup.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
    popup.style.display='none'
})