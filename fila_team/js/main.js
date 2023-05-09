//header lnb mouseover mouseleave event
// window.addEventListener('DOMContentLoaded', () => {
//     const mainLogo = document.querySelector('.logoimg');
//     const lnbA = document.querySelectorAll('.head_lnb li');
//     const head = document.querySelector('header');
//     const aTag = document.querySelectorAll('.head_lnb li a')
//     const gnbI = document.querySelectorAll('.head_gnb li a i')

//     head.addEventListener('mouseover', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
//         head.style.backgroundColor = '#fff'

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = 'black'
//         }
//         for (let i = 0; i < lnbA.length; i++) {
//             lnbA[i].style.color = 'black'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = 'black'
//         })


//     })

//     head.addEventListener('mouseleave', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
//         head.style.backgroundColor = ''

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = '#fff'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = '#fff'
//         })


//     })

// });


//마우스오버 이벤트고민좀 하자,,,

window.addEventListener('mouseover', () => {

    const mainLogo = document.querySelector('.logoimg');
    const lnbA = document.querySelectorAll('.head_lnb li');
    const head = document.querySelector('header');
    const aTag = document.querySelectorAll('.head_lnb li a')
    const gnbI = document.querySelectorAll('.head_gnb li a i')




    if (window.scrollY === 0) {

        // head.style.backgroundColor = '#fff'

        mainLogo.setAttribute('src', 'img/LOGO/01(1).png')


        // for (let i = 0; i < aTag.length; i++) {
        //     aTag[i].style.color = 'black'
        // }
        // for (let i = 0; i < lnbA.length; i++) {
        //     lnbA[i].style.color = 'black'
        // }
        // gnbI.forEach((value) => {
        //     value.style.color = 'black'
        // })
    }
    // else if(window.scrollY >= 100){
    //     for (let i = 0; i < lnbA.length; i++) {
    //         gnbI[i].style.color = 'black'
    //     }

    //     mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
    // }

})





window.addEventListener('scroll', (e) => {


    const mainLnb = document.querySelectorAll('.head_lnb ul li a');
    const mainGnb = document.querySelectorAll('.head_gnb ul li a');
    const mainLogo = document.querySelector('.head_logo .imgwrap img');

    if (window.scrollY > 100) {
        document.querySelector('header').style.backgroundColor = '#fff'
        mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
        for (let i = 0; i < mainLnb.length; i++) {
            mainLnb[i].style.color = 'black'
        }
        for (let i = 0; i < mainGnb.length; i++) {
            mainGnb[i].style.color = 'black'
        }

    } else if (window.scrollY <= 100) {
        document.querySelector('header').style.backgroundColor = ''
        mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
        for (let i = 0; i < mainLnb.length; i++) {
            mainLnb[i].style.color = '#fff'
        }
        for (let i = 0; i < mainGnb.length; i++) {
            mainGnb[i].style.color = '#fff'
        }

    }




})


// header wheel, add remove class event
window.addEventListener('wheel', (e) => {

    const headFix = document.querySelector('header');
    const dropDown = document.querySelector('.dropdown_menu');

    if (e.deltaY > 10) { 
        headFix.classList.remove("head_up");
        headFix.classList.add("head_down");
        

    } else if (e.deltaY == 0) { 
        headFix.classList.add("head_down");


    } else if (e.deltaY < -10) {
        headFix.classList.remove("head_down");
        headFix.classList.add("head_up");
    }

})








//header wheel, add remove class event
// window.addEventListener('wheel', (e) => {

//     const headFix = document.querySelector('header');


//     if (e.deltaY > 100 && scrollY > 100) { 
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     } else if (e.deltaY == 0) { 
//         headFix.classList.add("head_down");


//     } else if (e.deltaY < -50) {
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");
//     }

// })




//popup close btn event
document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.querySelector('.close_btn')
    const popupCount = document.querySelector('.countdown')

    closeBtn.addEventListener('click', () => {
        popupCount.style.display = 'none'

    })

})


//신제품 상품정보 event
document.addEventListener('DOMContentLoaded', () => {

    const newInfoBtn = document.querySelector('.new_info');
    const newInfoDesc = document.querySelector('.new_info_desc');
    const newInfoClose = document.querySelector('.new_box_close');

    newInfoBtn.addEventListener('click', () => {
        newInfoDesc.style.display = 'block'
    })

    newInfoClose.addEventListener('click', () => {
        newInfoDesc.style.display = 'none'
    })



})


//추천상품 circle click event
document.addEventListener('DOMContentLoaded', () => {

    const circle = document.querySelector('.rec_circle');
    const textBox = document.querySelector('.rectext_01');
    const lineSpan = document.querySelector('.spanline2');

    
    let state = false;

    circle.addEventListener('click', () => {

        if (!state) {
            textBox.style.display = 'block'
            lineSpan.style.transform = 'rotate(0deg)'
            state = true
        } else if (state) {
            textBox.style.display = 'none'
            lineSpan.style.transform = 'rotate(90deg)'
            state = false
        }
    })

    const circle2 = document.querySelector('.circle_2')
    const lineSpan2 = document.querySelector('.spanline3')
    const textBox2 = document.querySelector('.rectext_02')

    let state2 = false;

    circle2.addEventListener('click',()=>{

        if(!state2){
            textBox2.style.display = 'block'
            lineSpan2.style.transform = 'rotate(0deg)'
            state2 = true
        }else if(state2){
            textBox2.style.display = 'none'
            lineSpan2.style.transform = 'rotate(90deg)'
            state2 = false
        }
    })



})



//gnb search box  click event
document.addEventListener('DOMContentLoaded',()=>{
    const searchClose = document.querySelector('.search_close')
    const searchBox = document.querySelector('.search_box')

    searchClose.addEventListener('click',()=>{
        searchBox.style.display = 'none';
    })

    const gnbSearch = document.querySelector('.gnb_search')

    gnbSearch.addEventListener('click',()=> {
        searchBox.style.display = 'block'
    })
})