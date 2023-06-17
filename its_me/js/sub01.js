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






//////code popup//////// 

const popup01 = document.querySelector('.popup_01')
const popup01Btn = document.querySelector('.btn01')
const closeBtn = document.querySelector('.close_btn')

popup01Btn.addEventListener('click',()=>{

    popup01.style.display = 'block'
    
})
closeBtn.addEventListener('click',()=>{
    popup01.style.display='none'
})