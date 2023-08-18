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

const tabNotice = document.querySelector('.notice')
const tabGallary= document.querySelector('.gallary')

const noticeList = document.querySelector('.notice_list')
const gallaryList = document.querySelector('.gallary_list')

tabNotice.addEventListener('click',function(){
    tabNotice.classList.add('on')
    tabGallary.classList.remove('on')
    noticeList.style.display='block'
    gallaryList.style.display='none'
    
})
tabGallary.addEventListener('click',()=>{
    tabGallary.classList.add('on')
    tabNotice.classList.remove('on')
    gallaryList.style.display='block'
    noticeList.style.display = 'none'

   
})


const firstNotice = document.querySelector('.first_notice')
const popup = document.querySelector('.pop')
const closeBtn = document.querySelector('.close')

firstNotice.addEventListener('click',function(){
    popup.style.display = 'block'
})
closeBtn.addEventListener('click',function(){
    popup.style.display='none'
})
