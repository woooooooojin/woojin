$(function(){

    $('.lnb li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(500)
    })
    $('.lnb li').mouseleave(function(){
        $(this).find('.sub_menu').stop().slideUp(500)
    })


    setInterval(() => {
        $('.slide_wrap').animate({'margin-top':'-650px'},function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-top':'0'})
        })
    }, 2500);
})

const popBtn = document.querySelector('.first')
const popUp = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

popBtn.addEventListener('click',function(){
    popUp.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
    popUp.style.display = 'none'
})