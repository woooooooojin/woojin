/*top btn*/

const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll',function(){

    if(window.scrollY > 200){
        gsap.to(topBtn,0.3,{
            opacity:1,
        })
    }else{
        gsap.to(topBtn,0.3,{
            opacity:0,
        })
    }

})



topBtn.addEventListener('click',()=>{
    gsap.to(window,0.3,{
        scrollTo: 0,
    })
})



/*imgbox*/

const imgEls = document.querySelectorAll('.img_box div')

imgEls.forEach((imgEl, index)=>{

    gsap.to(imgEl,2,{
        delay: index * 0.5,
        opacity:1,
    })

})


//txt box

const txtEls = document.querySelectorAll('.txt_box div')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){

        gsap.to(txtEls[0],0.5,{
            opacity:1,
        })
        gsap.to(txtEls[1],0.5,{
            delay : 0.5,
            opacity:1,

        })
        gsap.to(txtEls[2],0.5,{
            delay : 1,
            opacity:1,

        })

    }

})





//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides:true,
    slidesPerView: 2,
    // slidesPerGroup:1,
    spaceBetween : 10,
    // loopedSlides: true,

    autoplay:{
        delay : 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    touchEventsTarget:'wrapper'
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});