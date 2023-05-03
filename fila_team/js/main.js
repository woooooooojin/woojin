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

    } else {
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


// document.addEventListener('DOMContentLoaded', () => {
//     const mainLogo = document.querySelectorAll('.logoimg');
//     const lnbA = document.querySelector('.head_lnb li');
//     const head = document.querySelector('header');

//     lnbA.addEventListener('click', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
//         // head.style.backgroundColor = '#fff'

//     })

// });





// window.addEventListener('wheel',(e) => {

// const headFix = document.querySelector('header');


//     if (e.deltaY > 1) {//휠다운
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     }else if(e.deltaY < 1){//휠업
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");


//     }

// })





document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.querySelector('.close_btn')
    const popupCount = document.querySelector('.countdown')

    closeBtn.addEventListener('click', () => {
        popupCount.style.display = 'none'

    })

})