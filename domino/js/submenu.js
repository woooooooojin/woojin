///////롤링공지사항
function notice_roll() {
    $('.rolling li:first').slideUp(function () {
        $(this).appendTo($('.rolling')).slideDown()
    })
}
setInterval(function () {
    notice_roll()
}, 3000);


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




//Uncaught TypeError: Cannot read properties of undefined ..????


//menu 개수 카운트 

const minusBtn = document.querySelectorAll('.minus_btn')
const plusBtn = document.querySelectorAll('.plus_btn')
const totalBtn = document.querySelectorAll('.totalbtn')

// const mBtn = document.querySelectorAll('#minusbtn')
// const pBtn = document.querySelectorAll('#plusbtn')
// const tBtn = document.querySelectorAll('#total_btn')
const menuBox = document.querySelectorAll('.menu_box')


for (let i = 0; i < menuBox.length; i++) {

    minusBtn[i].addEventListener('click', () => {
        totalBtn[i].value--

        if (totalBtn[i].value <= 0) {
            totalBtn[i].value = 1
        }


    })


    plusBtn[i].addEventListener('click', () => {
        totalBtn[i].value++;
        if (totalBtn[i].value > 10) {
            alert('최대수량은 10개 입니다.');
            totalBtn[i].value = 10;
        }
    })

    totalBtn[i].addEventListener('change', () => {
        if (totalBtn[i].value <= 0) {
            alert('최소수량은 1개 입니다.')
            totalBtn[i].value = 1
        } else if (totalBtn[i].value > 10) {
            alert('최대수량은 10개 입니다.')
            totalBtn[i].value = 10
        }
    })

}