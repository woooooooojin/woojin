document.addEventListener('DOMContentLoaded', function () {


    const userId = document.getElementById('user_id')
    const userPw1 = document.getElementById('user_pw1')
    const userPw2 = document.getElementById('user_pw2')
    const phoneSecond = document.getElementById('phone_second')
    const phoneThird = document.getElementById('phone_third')
    const userYear = document.getElementById('user_year')
    const userMonth = document.getElementById('user_month')
    const userDay = document.getElementById('user_day')


    userId.addEventListener('change', checkId)
    userPw1.addEventListener('change', checkPw)
    userPw2.addEventListener('change', comparePW)
    phoneSecond.addEventListener('keyup',moveThird)
    userYear.addEventListener('keyup',moveMonth)
    userMonth.addEventListener('keyup',moveDay)



    function checkId() {
        const idTrue = document.querySelector('.id_true')
        const idFalse = document.querySelector('.id_false')
        const idvalcheck = /^[a-z0-9]+$/
        //a-z소문자 아무거나 0-9숫자 아무거나 사용할수 있다는 뜻, +는 영소문자,숫자가 한번씩 나와야 한다는 뜻
        const idVal = userId.value

        if (!idvalcheck.test(idVal) || userId.value.length < 6 || userId.value.length > 16 ) {
            idTrue.style.display = 'none'
            idFalse.style.display = 'block'
            userId.value =''
            userId.focus()
        }else{
            idTrue.style.display = 'block'
            idFalse.style.display = 'none'
        }


    } //check id ()





    function checkPw() {
        const pw1True = document.querySelector('.pw1_true')
        const pw1False = document.querySelector('.pw1_false')
        const lock01 = document.querySelector('.lock_1')
        const pwvalCheck = /^[a-zA-Z0-9]+$/
        const pwVal = userPw1.value

        if(!pwvalCheck.test(pwVal) || userPw1.value.length < 8){
            pw1True.style.display = 'none'
            pw1False.style.display = 'block'
            lock01.style.color = 'red'

            userPw1.value=''
            userPw1.focus()
        }else{
            pw1True.style.display = 'block'
            pw1False.style.display = 'none'
            lock01.style.color = 'blue'
        }

    } //checkpw ()




    function comparePW() {
        const pw2True = document.querySelector('.pw2_true')
        const pw2False = document.querySelector('.pw2_false')
        const lock02 = document.querySelector('.lock_2')
        if(userPw1.value !== userPw2.value){
            pw2True.style.display = 'none'
            pw2False.style.display = 'block'
            lock02.style.color = 'red'
        }else{
            pw2True.style.display = 'block'
            pw2False.style.display = 'none'
            lock02.style.color = 'blue'
        }

    } //compare pw()


    function moveThird(){
        if(phoneSecond.value.length>=4){
            phoneThird.focus()
        }
    }//movethird

    function moveMonth(){
        if(userYear.value.length>=4){
            userMonth.focus()
        }
    }//movemonth


    function moveDay(){
        if(userMonth.value.length>=2){
            userDay.focus()
        }
    }//moveday

    










})