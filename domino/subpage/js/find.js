import membership from './membership.js'

const findName = document.getElementById('findid')
const findId = document.getElementById('findpw')
const findNum01= document.getElementById('findnum01')
const findNum02= document.getElementById('findnum02')
const myId = document.querySelector('.idbox')
const myPw = document.querySelector('.pwbox')
const idBtn = document.getElementById('idbtn')
const pwBtn = document.getElementById('pwbtn')


idBtn.addEventListener('click', yourId)
pwBtn.addEventListener('click',yourPw)

function yourId() {
    for (let i = 0; i < membership.length; i++) {
        if (findName.value === membership[i].name && findNum01.value === membership[i].birth) {
            myId.innerHTML = '아이디는 ' + membership[i].id + ' 입니다.' + membership[i]
 
        }else{
            myId.innerHTML = '정보를 확인해 주세요.' + membership[i]
        }


    }

}

function yourPw(){

    for(let i =0; i < membership.length; i++){
        if(findNum02.value === membership[i].birth && findId.value === membership[i].id){
            myPw.innerHTML = '비밀번호는 ' + membership[i].pw + ' 입니다.'
        }else{
            myPw.innerHTML = '정보를 확인해 주세요.'
            
        }

    }

}
