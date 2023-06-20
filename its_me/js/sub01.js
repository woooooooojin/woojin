const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})



////////////섹션별 gsap애니메이션/////////////

const skillsTools = document.querySelector('.skills_tools')
const sortBox = document.querySelector('.sortbox')
const filterBox = document.querySelector('.filterbox')
const reviewBox = document.querySelector('.reviewbox')
const noticeBox = document.querySelector('.noticebox')
const DomBox = document.querySelector('.Dombox')
const swiperBox = document.querySelector('.swiperbox')



gsap.from(sortBox, 0.3, {
    scrollTrigger: {
        trigger: skillsTools,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})

gsap.from(filterBox, 0.3, {
    scrollTrigger: {
        trigger: sortBox,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})
gsap.from(reviewBox, 0.3, {
    scrollTrigger: {
        trigger: filterBox,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})
gsap.from(noticeBox, 0.3, {
    scrollTrigger: {
        trigger: reviewBox,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})
gsap.from(DomBox, 0.3, {
    scrollTrigger: {
        trigger: noticeBox,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})
gsap.from(swiperBox, 0.3, {
    scrollTrigger: {
        trigger: DomBox,
        start: 'bottom 50%',
    },
    y: 50,
    opacity: 0,
    
})







//////code popup//////// 

// const popup01 = document.querySelector('.popup_01')
// const popup02 = document.querySelector('.popup_02')
// const popup03 = document.querySelector('.popup_03')
// const popup04 = document.querySelector('.popup_04')

// const popup01Btn = document.querySelector('.btn01')
// const popup02Btn = document.querySelector('.btn02')
// const popup03Btn = document.querySelector('.btn03')
// const popup04Btn = document.querySelector('.btn04')

// const closeBtn01 = document.querySelector('.cbtn01')
// const closeBtn02 = document.querySelector('.cbtn02')
// const closeBtn03 = document.querySelector('.cbtn03')
// const closeBtn04 = document.querySelector('.cbtn04')

// popup01Btn.addEventListener('click',()=>{
//     popup01.style.display = 'block'
// })
// closeBtn01.addEventListener('click',()=>{
//     popup01.style.display='none'
// })

// popup02Btn.addEventListener('click',()=>{
//     popup02.style.display = 'block'
// })
// closeBtn02.addEventListener('click',()=>{
//     popup02.style.display='none'
// })

// popup03Btn.addEventListener('click',()=>{
//     popup03.style.display='block'
// })
// closeBtn03.addEventListener('click',()=>{
//     popup03.style.display = 'none'
// })

// popup04Btn.addEventListener('click',()=>{
//     popup04.style.display='block'
// })
// closeBtn04.addEventListener('click',()=>{
//     popup04.style.display = 'none'
// })


// const popup = document.querySelectorAll('.pop')
// const popBtn = document.querySelectorAll('.code_btn')
// const popClose = document.querySelectorAll('.close_btn')

// for(let i =0; i<popup.length; i++){
//     popBtn[i].addEventListener('click',function(){
//         popup[i].style.display = 'block'
//     })
//     popClose[i].addEventListener('click',function(){
//         popup[i].style.display='none'

//     })
// }