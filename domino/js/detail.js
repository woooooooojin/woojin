///////롤링공지사항
function notice_roll() {
    $('.rolling li:first').slideUp(function () {
        $(this).appendTo($('.rolling')).slideDown()
    })
}
setInterval(function () {
    notice_roll()
}, 3000);


///////////jquery//////////

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
        $(location).attr('href', '../index.html')
    })





    $('.close_btn3').click(function () {
        $('.popup3').css('display', 'none');
    })

    $('.moreclick .more_open').click(function () {
        $('.more_list2').slideDown(300);
        $('.more_open').css('display', 'none');
        $('.more_close').css('display', 'block');

    })
    $('.moreclick .more_close').click(function () {
        $('.more_list2').slideUp(300);
        $('.more_open').css('display', 'block');
        $('.more_close').css('display', 'none');

    })




})


const rightBox = document.querySelector('.right_box')
//가격표시란
const pizzaPrice = document.querySelector('.pizza_desc')
const dowPrice = document.querySelector('.dow_desc')
const totalPrice = document.querySelector('.total_desc')
let LargeCnt = 29900
let MediumCnt = 22500

//피자 사이즈 선택
const pizzaChk01 = document.getElementById('sizebtn1')
const pizzaChk01Label = document.querySelector('.size01')
const pizzaChk02 = document.getElementById('sizebtn2')
const pizzaChk02Label = document.querySelector('.size02')
const pizzaSize = document.querySelector('.right_size')

//피자 도우 선택
const dowBtns = document.getElementsByName('dowbtn')
const dowWrap = document.querySelector('.dowwrap')
const dowBtn01 = document.getElementById('dowbtn01')
const dowBtn02 = document.getElementById('dowbtn02')
const dowBtn03 = document.getElementById('dowbtn03')
let total = 0
let result = 0



if (pizzaChk01.checked) {
    pizzaPrice.innerHTML = ''
    pizzaPrice.innerHTML = '슈퍼디럭스히어로 L 29,900원'
    total = 29900
    totalPrice.innerHTML = `${total} 원`

}




rightBox.addEventListener('change', () => {
    for (let i = 0; i < dowBtns.length; i++) {
        if (dowBtns[0].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '오리지널 도우'

            totalPrice.innerHTML = ''
            totalPrice.innerHTML = `${total} 원`



        } else if (dowBtns[1].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '슈퍼시드 화이버 함유 도우(더블 치즈엣지) + 6000원'
            totalPrice.innerHTML = ''
            result = total + 6000
            totalPrice.innerHTML = `${result} 원`


        } else if (dowBtns[2].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '오리지널 도우 (더블 치즈엣지) + 3000원'
            totalPrice.innerHTML = ''
            result = total + 3000
            totalPrice.innerHTML = `${result} 원`


        }


    }


    //토핑선택 ㄱㄱ


})