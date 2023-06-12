// document.addEventListener('DOMContentLoaded', function () {



    //장바구니 찜  카운트증가 
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










// }) //document


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





    $('.close_btn2 p').click(function () {
        $('.popup2').css('display', 'none');
    })

    $('.main_logo').click(function () {
        $(location).attr('href', './index.html')
    })

    $(window).scroll(function () {

        if ($(window).scrollTop() >= $('.section4').offset().top) {
            $('.recommand_right div').stop().animate({
                opacity: 1,
            }, 300)
        }
    })

    $(window).scroll(function () {

        if ($(window).scrollTop() >= $('.recommand').offset().top) {
            $('.sbox01').animate({
                opacity: 1,
            }, 500)
            $('.sbox02').delay(300).animate({
                opacity: 1,
            }, 500)
            $('.sbox03').delay(500).animate({
                opacity: 1,
            }, 500)
            $('.sbox04').delay(700).animate({
                opacity: 1,
            }, 500)
            $('.sbox05').delay(900).animate({
                opacity: 1,
            }, 500)
            $('.sbox06').delay(1100).animate({
                opacity: 1,
            }, 500)
            $('.sbox07').delay(1300).animate({
                opacity: 1,
            }, 500)
            $('.sbox08').delay(1500).animate({
                opacity: 1,
            }, 500)


        }
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



