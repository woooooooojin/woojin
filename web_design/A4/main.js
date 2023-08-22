$(function(){

    $('.lnb').mouseenter(function(){
        $('.sub_menu, .headbg').slideDown(200)
        
    })

    $('.lnb').mouseleave(function(){
        $('.sub_menu, .headbg').slideUp(200)
    })


    $('.slide:gt(0)').hide()
    setInterval(() => {
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 2000);

})

const pop = document.querySelector('.pop')
const popUp = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

pop.addEventListener('click',()=>{
    popUp.style.display = 'block'
})
closeBtn.addEventListener('click',function(){
    popUp.style.display = 'none'
})
