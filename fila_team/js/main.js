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

        mainLogo.setAttribute('src', 'img/LOGO/logo01.png')


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
        mainLogo.setAttribute('src', 'img/LOGO/logo01.png')
        for (let i = 0; i < mainLnb.length; i++) {
            mainLnb[i].style.color = 'black'
        }
        for (let i = 0; i < mainGnb.length; i++) {
            mainGnb[i].style.color = 'black'
        }

    } else if (window.scrollY <= 100) {
        document.querySelector('header').style.backgroundColor = ''
        mainLogo.setAttribute('src', 'img/LOGO/logo03.png')
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
// document.addEventListener('DOMContentLoaded', () => {

//     const circle = document.querySelector('.rec_circle');
//     const textBox = document.querySelector('.rectext_01');
//     const lineSpan = document.querySelector('.spanline2');

    
//     let state = false;

//     circle.addEventListener('click', () => {

//         if (!state) {
//             textBox.style.display = 'block'
//             lineSpan.style.transform = 'rotate(0deg)'
//             state = true
//         } else if (state) {
//             textBox.style.display = 'none'
//             lineSpan.style.transform = 'rotate(90deg)'
//             state = false
//         }
//     })

//     const circle2 = document.querySelector('.circle_2')
//     const lineSpan2 = document.querySelector('.spanline3')
//     const textBox2 = document.querySelector('.rectext_02')

//     let state2 = false;

//     circle2.addEventListener('click',()=>{

//         if(!state2){
//             textBox2.style.display = 'block'
//             lineSpan2.style.transform = 'rotate(0deg)'
//             state2 = true
//         }else if(state2){
//             textBox2.style.display = 'none'
//             lineSpan2.style.transform = 'rotate(90deg)'
//             state2 = false
//         }
//     })



// })



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



///////////////////랭킹스와이퍼 카테고리 클릭이벤트//////////////////////////

const tshirt = document.getElementById('tshirt')
const online = document.getElementById('online')
const targa = document.getElementById('targa')
const slides = document.querySelectorAll('.rank_slide img')

const rankTit = document.querySelector('.rank_text h4')
const rankList = document.querySelectorAll('.ranklist li')
const tennis = document.getElementById('tennis')
const running = document.getElementById('running')

tshirt.addEventListener('click',function(){

    slides[0].setAttribute('src','./img/swiper_img/01.jpg')
    slides[1].setAttribute('src','./img/swiper_img/02.jpg')
    slides[2].setAttribute('src','./img/swiper_img/03.jpg')
    slides[3].setAttribute('src','./img/swiper_img/04.jpg')
    slides[4].setAttribute('src','./img/swiper_img/05.jpg')
    slides[5].setAttribute('src','./img/swiper_img/06.jpg')

    rankTit.innerHTML = '#티셔츠 & 팬츠'
    const tarArr = ['01 컴포트핏 인터네셔널 반팔 맨투맨','02 컴포트핏 조거팬츠','03 이지팬츠','04 베이직 리니어 반팔티','05 3D 빅로고 반팔티','06 컴포트핏 인터네셔널 로고 반팔티']
    for(let i in tarArr){
        for(let i =0; i<rankList.length; i++){
            rankList[i].innerHTML = tarArr[i]
        }
    }


})
targa.addEventListener('click',function(){

    slides[0].setAttribute('src','./img/swiper_img/2-01.jpg')
    slides[1].setAttribute('src','./img/swiper_img/2-02.jpg')
    slides[2].setAttribute('src','./img/swiper_img/2-03.jpg')
    slides[3].setAttribute('src','./img/swiper_img/2-04.jpg')
    slides[4].setAttribute('src','./img/swiper_img/2-05.jpg')
    slides[5].setAttribute('src','./img/swiper_img/2-06.jpg')
    rankTit.innerHTML = '#타르가'

    const tarArr = ['타르가01','타르가02','타르가03','타르가04','타르가05','타르가06']
    for(let i in tarArr){
        for(let i =0; i<rankList.length; i++){
            rankList[i].innerHTML = tarArr[i]
        }
    }

})

online.addEventListener('click',function(){

    slides[0].setAttribute('src','./img/swiper_img/3-01.jpg')
    slides[1].setAttribute('src','./img/swiper_img/3-02.jpg')
    slides[2].setAttribute('src','./img/swiper_img/3-03.jpg')
    slides[3].setAttribute('src','./img/swiper_img/3-04.jpg')
    slides[4].setAttribute('src','./img/swiper_img/3-05.jpg')
    slides[5].setAttribute('src','./img/swiper_img/3-06.jpg')
    rankTit.innerHTML = '#온라인단독'

    
    const tarArr = ['온라인01','온라인02','온라인03','온라인04','온라인05','온라인06']
    for(let i in tarArr){
        for(let i =0; i<rankList.length; i++){
            rankList[i].innerHTML = tarArr[i]
        }
    }
})

tennis.addEventListener('click',function(){
    slides[0].setAttribute('src','./img/swiper_img/4-01.jpg')
    slides[1].setAttribute('src','./img/swiper_img/4-02.jpg')
    slides[2].setAttribute('src','./img/swiper_img/4-03.jpg')
    slides[3].setAttribute('src','./img/swiper_img/4-04.jpg')
    slides[4].setAttribute('src','./img/swiper_img/4-05.jpg')
    slides[5].setAttribute('src','./img/swiper_img/4-06.jpg')
    rankTit.innerHTML = '#테니스'

    const tarArr = ['테니스01','테니스02','테니스3','테니스04','테니스05','테니스06']
    for(let i in tarArr){
        for(let i =0; i<rankList.length; i++){
            rankList[i].innerHTML = tarArr[i]
        }
    }

})

running.addEventListener('click',function(){
    slides[0].setAttribute('src','./img/swiper_img/5-01.jpg')
    slides[1].setAttribute('src','./img/swiper_img/5-02.jpg')
    slides[2].setAttribute('src','./img/swiper_img/5-03.jpg')
    slides[3].setAttribute('src','./img/swiper_img/5-04.jpg')
    slides[4].setAttribute('src','./img/swiper_img/5-05.jpg')
    slides[5].setAttribute('src','./img/swiper_img/5-06.jpg')
    rankTit.innerHTML = '#런닝화'

    const tarArr = ['러닝01','러닝02','러닝03','러닝04','러닝05','러닝06']
    for(let i in tarArr){
        for(let i =0; i<rankList.length; i++){
            rankList[i].innerHTML = tarArr[i]
        }
    }
})




//////////////신제품 카테고리 클릭 이벤트//////////////////

const newTshirt = document.getElementById('newTshirt')
const newTennis = document.getElementById('newTennis')
const newShoes = document.getElementById('newShoes')
const newSlide = document.querySelectorAll('.newslide img')

const newTit = document.querySelectorAll('.new_text h4')
const newFirstP = document.querySelectorAll('.new_text .first_p')
const newSecondP = document.querySelectorAll('.new_text .second_p')
const newDetail = document.querySelectorAll('.new_text .new_detail')

newTshirt.addEventListener('click',function(){

    newSlide[0].setAttribute('src','./img/newarrival/new04.jpg')
    newSlide[1].setAttribute('src','./img/newarrival/new05.jpg')
    newSlide[2].setAttribute('src','./img/newarrival/new06.jpg')
    newSlide[3].setAttribute('src','./img/newarrival/new01.jpg')
    newSlide[4].setAttribute('src','./img/newarrival/new02.jpg')
    newSlide[5].setAttribute('src','./img/newarrival/new03.jpg')

    const newTitArr = ['테니스짐백','휠라 테이퍼 샌들 V3','컴포트핏<br/>우븐 후드티','테니스 반바지','컴포트핏 플래그 반팔티']
    for(let i in newTitArr){
        for(let i =0; i<newSlide.length; i++){
            newTit[i] = newTitArr[i]
        }
    }

    

})



