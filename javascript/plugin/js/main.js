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