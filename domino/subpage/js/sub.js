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
            }else {
                loginPopup01.style.display = 'block'
                errcnt ++
            }
        }else {
            loginPopup2.style.display = 'block'
        }

        if (errcnt >= 5) {
            loginPopup3.style.display = 'block'
        }




    })



    //id pw 알려주는 팝업

    const idInfo = document.querySelector('.id_pw_info')
    const idInfoClose = document.getElementById('id_info_btn')

    idInfoClose.addEventListener('click',()=>{

        idInfo.style.display = 'none'

    })



    const hp2 = document.getElementById('hp2')
    const hp3 = document.getElementById('hp3')
    const hp2Check = /[0-9]/
    const hp3Check = /[0-9]/

    


    hp2.addEventListener('keyup',moveHp3)

    function moveHp3(){

        if(hp2.value.length >= 4){
            
            hp3.focus()

        }
    }




})