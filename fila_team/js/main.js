



//header lnb mouseover mouseleave event
window.addEventListener('DOMContentLoaded', () => {
    const mainLogo = document.querySelector('.logoimg');
    const lnbA = document.querySelectorAll('.head_lnb li');
    const head = document.querySelector('header');
    const aTag = document.querySelectorAll('.head_lnb li a')
    const gnbI = document.querySelectorAll('.head_gnb li a i')

    head.addEventListener('mouseover', () => {

        mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
        head.style.backgroundColor = '#fff'
       
        for (let i = 0; i < aTag.length; i++) {
            aTag[i].style.color = 'black'
        }
        for (let i = 0; i < lnbA.length; i++) {
            lnbA[i].style.color = 'black'
        }
        gnbI.forEach((value)=>{
            value.style.color = 'black'
        }) 

      
    })

    head.addEventListener('mouseleave', () => {

        mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
        head.style.backgroundColor = ''
       
        for (let i = 0; i < aTag.length; i++) {
            aTag[i].style.color = '#fff'
        }
        gnbI.forEach((value)=>{
            value.style.color = '#fff'
        }) 



        // if(window.scrollY < 100){
        //     gnbI.forEach((value)=>{
        //         value.style.color = '#fff'
        //     })
        //     for (let i = 0; i < aTag.length; i++) {
        //         aTag[i].style.color = '#fff'
        //     }
        // }else{
        //     gnbI.forEach((value)=>{
        //         value.style.color = 'black'
        //     })
        //     for (let i = 0; i < aTag.length; i++) {
        //         aTag[i].style.color = 'black'
        //     }
        // }

    
    })



});

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

    } else if(window.screenY <= 100){
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


//header wheel, add remove class event
// window.addEventListener('wheel',(e) => {

// const headFix = document.querySelector('header');


//     if (e.deltaY > 100 && scrollY > 100) {//휠다운
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     }else if(e.deltaY == 0){
//         headFix.classList.add("head_down");


//     }else if(e.deltaY < -100){
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



document.addEventListener('DOMContentLoaded',()=>{

    const newInfoBtn = document.querySelector('.new_info');
    const newInfoDesc = document.querySelector('.new_info_desc');
    const newInfoClose = document.querySelector('.new_box_close');
   
    newInfoBtn.addEventListener('click',()=>{
        newInfoDesc.style.display = 'block'
    })

    newInfoClose.addEventListener('click',()=>{
        newInfoDesc.style.display = 'none'
    })
       
    

})