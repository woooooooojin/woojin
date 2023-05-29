

document.addEventListener('DOMContentLoaded', function () {
   
    const numBox = document.querySelector('#hp5')


    const randomNum = Math.floor(Math.random() * 10001)
    let randomTxt = document.createTextNode(randomNum)


    const hpBtn = document.querySelector('.hp_btn')
    hpBtn.addEventListener('click', function () {

        numBox.appendChild(randomTxt);

    })


    const hp4Btn = document.getElementById('hp4_btn');
    const hp4Value = document.getElementById('hp4')
    const numPop = document.querySelector('.num_chk')
    const numPop2 = document.querySelector('.num_chk02')
    hp4Btn.addEventListener('click', function () {

        if (hp4Value.value == randomNum) {
            numPop.style.display = 'block'
            numPop2.style.display = 'none'


        } else {
            numPop.style.display = 'none'
            numPop2.style.display = 'block'
        }

    })



    // const myId = 'woojin'
    // const myPw = 'woojin123'

    const userId = document.getElementById('name')
    const userPw = document.getElementById('passwd')
    const loginBtn = document.getElementById('login_btn')
    const joinBtn = document.getElementById('join_btn')
    const loginPopup = document.querySelector('.login_popup')
    const loginPopup01 = document.querySelector('.login_popup01')
    const loginPopup2 = document.querySelector('.login_popup2')
    const loginPopup3 = document.querySelector('.login_popup3')
    let errcnt = 0
    loginBtn.addEventListener('click', function () {


        if (userId.value === 'woojin') {
            if (userPw.value === 'woojin123') {
                loginPopup.style.display = 'block'
            } else {
                loginPopup01.style.display = 'block'
                errcnt++
            }
        } else {
            loginPopup2.style.display = 'block'
        }

        if (errcnt >= 5) {
            loginPopup3.style.display = 'block'
        }




    })



    //id pw 알려주는 팝업

    const idInfo = document.querySelector('.id_pw_info')
    const idInfoClose = document.getElementById('id_info_btn')

    idInfoClose.addEventListener('click', () => {

        idInfo.style.display = 'none'

    })



    const hp2 = document.getElementById('hp2')
    const hp3 = document.getElementById('hp3')


    hp2.addEventListener('keyup', moveHp3)

    function moveHp3() {

        if (hp2.value.length >= 4) {

            hp3.focus()


        }
    }




    //비회원 체크박스 
    const allCheck = document.getElementById('text_chk')
    const checkEls = document.querySelectorAll('.itemchk')
    const check2 = document.getElementById('text_chk2')
    const check3 = document.getElementById('text_chk3')
    const check4 = document.getElementById('text_chk4')
    const check5 = document.getElementById('text_chk5')
    const check6 = document.getElementById('text_chk6')

    allCheck.addEventListener('click', checkAll)
    check2.addEventListener('click', eachCheck)
    check3.addEventListener('click', eachCheck)
    check4.addEventListener('click', eachCheck)
    check5.addEventListener('click', eachCheck)


    function checkAll() {

        if (allCheck.checked === true) {
            checkEls.forEach((els) => {

                els.checked = true

            })

        } else if (allCheck.checked === false) {
            checkEls.forEach((els) => {

                els.checked = false

            })

        }

    }

    function eachCheck() {
        if (check2.checked && check3.checked && check4.checked && check5.checked) {
            allCheck.checked = true
        } else {
            allCheck.checked = false
        }
    }



    //비밀번호 보이게 안보이게하기

    const showPw = document.querySelector('.show_pw')
    const hidePw = document.querySelector('.hide_pw')
    const loginPw = document.querySelector('.loinpw')
    // const pwInput = document.getElementById('passwd')

    showPw.addEventListener('click', function () {

        loginPw.type = 'text'
        hidePw.style.display = 'block'
        showPw.style.display = 'none'
    })

    hidePw.addEventListener('click', function () {
        loginPw.type = 'password'
        hidePw.style.display = 'none'
        showPw.style.display = 'block'

    })


    // const findInputName = document.getElementById('findid')
    // const findInputId = document.getElementById('findpw')
    // const myId = document.querySelector('.idbox')
    // const myPw = document.querySelector('.pwbox')
    // const idBtn = document.getElementById('idbtn')
    // const pwBtn = document.getElementById('pwbtn')

    // idBtn.addEventListener('click', findMyId)
    // pwBtn.addEventListener('click',findMyPw)

    // function findMyId() {
    //     if (findInputName.value === '우진') {

    //         myId.innerHTML = '아이디는 woojin 입니다.'
    //     }else{
    //         myId.innerHTML = '일치하는 아이디가 없습니다.'
    //     }


    // }
    // function findMyPw() {
    //     if (findInputId.value === 'woojin') {

    //         myPw.innerHTML = '비밀번호는 woojin123 입니다.'
    //     }else{
    //         myPw.innerHTML = '일치하는 비밀번호가 없습니다.'
    //     }


    // }








})


$(function () {
    $('.find_id_open').click(function () {

        $('.find_01').css('display', 'block')

    })
    $('.fpw_open').click(function () {

        $('.find_02').css('display', 'block')

    })
    $('.findidclose').click(function () {
        $('.find_01').css('display', 'none')

    })
    $('.findpwclose').click(function () {
        $('.find_02').css('display', 'none')
    })
})
///////롤링공지사항
function notice_roll(){
    $('.rolling li:first').slideUp(function(){
        $(this).appendTo($('.rolling')).slideDown()
    })
}
setInterval(function(){notice_roll()},3000);




