$(function () {

    $('.quick_menu').css('top', $(window).height() / 2 - $('.quick_menu').height() / 2);

    $(window).scroll(function () {

        let point = $(this).scrollTop() + ($(window).height() / 2 - $('.quick_menu').height() /
            2)
        $('.quick_menu').stop().animate({
            top: point,
        }, 300)


    }) //quickmenu scroll event

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 300) {
            $('.btn_wrap').stop().animate({
                right: 30,
            }, 300)
        } else {
            $('.btn_wrap').stop().animate({
                right: -100,
            }, 300)
        }
    }) //btn wrap event


    $('.btn_top').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0,
        }, 300)
    })

    $('.btn_bot').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(document).height(),
        }, 300)
    }) //top button event







    $('.main_logo').click(function () {
        $(location).attr('href', './index.html')
    })





})


//cart like count event
const heart = document.querySelectorAll('.fa-heart')
const likeCnt = document.getElementById('likecnt')

let cntheart = 0


heart.forEach((value) => {
    value.addEventListener('click', function () {
        cntheart++
        likeCnt.innerHTML = cntheart
    })

})

const cart = document.querySelectorAll('.fa-shopping-cart')
const CartCnt = document.getElementById('cartcnt')

let cntcart = 0
cart.forEach((value) => {
    value.addEventListener('click', function () {
        cntcart++
        CartCnt.innerHTML = cntcart
    })

})




const minusBtn = document.querySelectorAll('.minus_btn')
const plusBtn = document.querySelectorAll('.plus_btn')

const totalBtn = document.querySelectorAll('.totalbtn')

let cnt = 0

// minusBtn.forEach((val) => {
//     val.addEventListener('click', function () {
//             cnt--
//             totalBtn.innerHTML = cnt

//     })
// })

for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', function () {
       cnt--
        for (let i = 0; i < totalBtn.length; i++) { 
            
            totalBtn[i].value = cnt
        }


    })
}


// plusBtn.forEach((val) => {
//     val.addEventListener('click', function () {
//         for (let i = 0; i < totalBtn.length; i++) {
//             cnt++
//             totalBtn[i].value = cnt

//         }
//     })
// })