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
const sideTxt2 = document.querySelector('.side_desc')
const drinkTxt2 = document.querySelector('.drink_desc')

let total = 29900
let result



if (pizzaChk01.checked) {

    pizzaPrice.innerHTML = ''
    pizzaPrice.innerHTML = '슈퍼디럭스히어로 L 29,900원'
    totalPrice.innerHTML = `${total} 원`



}




rightBox.addEventListener('change', () => {
    for (let i = 0; i < dowBtns.length; i++) {
        if (dowBtns[0].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '오리지널 도우'
            result = total + 0
            totalPrice.innerHTML = `${result} 원`
            sideTxt2.innerHTML = ''
            drinkTxt2.innerHTML = ''



        } else if (dowBtns[1].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '슈퍼시드 화이버 함유 도우(더블 치즈엣지) + 6000원'
            totalPrice.innerHTML = ''
            result = total + 6000
            totalPrice.innerHTML = `${result} 원`
            sideTxt2.innerHTML = ''
            drinkTxt2.innerHTML = ''


        } else if (dowBtns[2].checked) {
            dowPrice.innerHTML = ''
            dowPrice.innerHTML = '오리지널 도우 (더블 치즈엣지) + 3000원'
            totalPrice.innerHTML = ''
            result = total + 3000
            totalPrice.innerHTML = `${result} 원`
            sideTxt2.innerHTML = ''
            drinkTxt2.innerHTML = ''


        }


    }



    //토핑선택 

    const minusBtn = document.querySelectorAll('.minus_btn')
    const plusBtn = document.querySelectorAll('.plus_btn')
    const toppingCnt = document.querySelectorAll('#toppingCnt')
    const toppingValue1 = document.querySelector('.topping_cnt1')
    const toppingValue2 = document.querySelector('.topping_cnt2')

    for (let i = 0; i < toppingCnt.length; i++) {
        minusBtn[i].addEventListener('click', function () {

            if (toppingCnt[i].value <= 0) {
                toppingCnt[i].value = '0'

            } else {
                toppingCnt[i].value--
                totalPrice.innerHTML = `${result + toppingValue1.value * 500 + toppingValue2.value * 300} 원`
            }
        })

        plusBtn[i].addEventListener('click', function () {
            toppingCnt[i].value++
            totalPrice.innerHTML = `${result + toppingValue1.value * 500 + toppingValue2.value * 300} 원`

        })

    }



    //사이드 선택
    const sideMinus = document.querySelectorAll('.side_minus')
    const sidePlus = document.querySelectorAll('.side_plus')
    const sideCnt = document.querySelectorAll('#sideCnt')
    const sideValue1 = document.querySelector('.side_cnt1')
    const sideValue2 = document.querySelector('.side_cnt2')
    const sideValue3 = document.querySelector('.side_cnt3')
    const sideValue4 = document.querySelector('.side_cnt4')
    const sideValue5 = document.querySelector('.side_cnt5')
    const sideValue6 = document.querySelector('.side_cnt6')
    const sideValue7 = document.querySelector('.side_cnt7')
    const sideValue8 = document.querySelector('.side_cnt8')
    const sideTxt = document.querySelector('.side_desc')
    const drinkTxt = document.querySelector('.drink_desc')

    for (let i = 0; i < sideCnt.length; i++) {
        sideMinus[i].addEventListener('click', () => {

            if (sideCnt[i].value <= 0) {
                sideCnt[i].value = '0'
            } else {
                sideCnt[i].value--
                totalPrice.innerHTML = `
            ${result + (sideValue1.value * 9800) + 
                (sideValue2.value * 9800) + 
                (sideValue3.value * 4600) + 
                (sideValue4.value * 9800) + 
                (sideValue5.value * 2300) + 
                (sideValue6.value * 2400) + 
                (sideValue7.value * 800) + 
                (sideValue8.value * 200)} 
                원`

                sideTxt.innerHTML = `
            <p>아보카도 크림 파스타 * ${sideValue1.value}</p> 
            <p>체다 치즈 치킨 * ${sideValue2.value}</p> 
            <p>치킨 체다 더티 프라이즈 * ${sideValue3.value}</p> 
            <p>칙볼(치킨볼) 파스타 * ${sideValue4.value}</p>
            `

                drinkTxt.innerHTML = `
            <p>코카콜라 1.25L * ${sideValue5.value}</p>
            <p>스프라이트 1.5L * ${sideValue6.value}</p>
            <p>우리피클 * ${sideValue7.value}</p>
            <p>갈릭디핑소스 * ${sideValue8.value}</p>
            `
            }

        })
        sidePlus[i].addEventListener('click', () => {
            sideCnt[i].value++
            totalPrice.innerHTML = `
            ${result + (sideValue1.value * 9800) + 
                (sideValue2.value * 9800) + 
                (sideValue3.value * 4600) + 
                (sideValue4.value * 9800) + 
                (sideValue5.value * 2300) + 
                (sideValue6.value * 2400) + 
                (sideValue7.value * 800) + 
                (sideValue8.value * 200)} 
                원`

            sideTxt.innerHTML = `
                <p>아보카도 크림 파스타 * ${sideValue1.value}</p> 
                <p>체다 치즈 치킨 * ${sideValue2.value}</p> 
                <p>치킨 체다 더티 프라이즈 * ${sideValue3.value}</p> 
                <p>칙볼(치킨볼) 파스타 * ${sideValue4.value}</p>
                `

            drinkTxt.innerHTML = `
            <p>코카콜라 1.25L * ${sideValue5.value}</p>
            <p>스프라이트 1.5L * ${sideValue6.value}</p>
            <p>우리피클 * ${sideValue7.value}</p>
            <p>갈릭디핑소스 * ${sideValue8.value}</p>
            `

        })

    }



})