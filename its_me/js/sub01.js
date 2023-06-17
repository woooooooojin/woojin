const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})


// const btn01 = document.getElementById('btn01')
// const btn02 = document.getElementById('btn02')
// const btn03 = document.getElementById('btn03')
// const btn04 = document.getElementById('btn04')
// const btn05 = document.getElementById('btn05')
// const section01 = document.getElementById('main')
// const section02 = document.getElementById('about')
// const section03 = document.getElementById('cardflip')
// const section04 = document.getElementById('portfolio')
// const section05 = document.getElementById('contact')




// btn01.addEventListener('click', () => {
//     gsap.to(window, 0.3, {
//         scrollTo: section01,
//     })

// })

// btn02.addEventListener('click', () => {
//     gsap.to(window, 0.3, {
//         scrollTo: section02,
//     })

// })

// btn03.addEventListener('click', () => {
//     gsap.to(window, 0.3, {
//         scrollTo: section03,
//     })

// })

// btn04.addEventListener('click', () => {
//     gsap.to(window, 0.3, {
//         scrollTo: section04,
//     })

// })
// btn05.addEventListener('click', () => {
//     gsap.to(window, 0.3, {
//         scrollTo: section05,
//     })

// })




//code popup 

const popup01 = document.querySelector('.popup_01')
const popup01Btn = document.querySelector('.btn01')
const closeBtn = document.querySelector('.close_btn')

popup01Btn.addEventListener('click',()=>{

    popup01.style.display = 'block'
    
})
closeBtn.addEventListener('click',()=>{
    popup01.style.display='none'
})