$(function(){

    $('.lnb li').mouseenter(function(){
        $(this).find('.sub_menu').slideDown(300)
    })

    $('.lnb li').mouseleave(function(){
       $(this).find('.sub_menu').slideUp(300)
    })


    $('.slide:gt(0)').hide()
    setInterval(() => {
        $('.slide:first').fadeOut(500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 2000);

})

const noticeBtn = document.querySelector('.notice_btn')
const galBtn = document.querySelector('.gal_btn')
const noticeDesc = document.querySelector('.notice_desc')
const galDesc = document.querySelector('.gal_desc')

noticeBtn.addEventListener('click',()=>{
    galBtn.classList.remove('on')
    noticeBtn.classList.add('on')
    noticeDesc.style.display = 'block'
    galDesc.style.display = 'none'
    galBtn.style.borderBottom = '1px solid #ccc'
})
galBtn.addEventListener('click',()=>{
    noticeBtn.classList.remove('on')
    galBtn.classList.add('on')
    noticeDesc.style.display = 'none'
    galDesc.style.display = 'block'
    noticeBtn.style.borderBottom = '1px solid #ccc'
})



const popBtn = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')
const popUp = document.querySelector('.pop')

popBtn.addEventListener('click',()=>{
    popUp.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
    popUp.style.display='none'
})

