const loginInput = document.querySelector('#login_form input')
const loginForm = document.querySelector('#login_form')
const greet = document.querySelector('#greet')
function loginSubmint (e){
    e.preventDefault()
    const username = loginInput.value
    loginForm.classList.add('hidden')
    localStorage.setItem('username',username)
   
    greetUser(username)
   
}


function greetUser(username){
    greet.innerText = 'hello ' + username + ' !'
    greet.classList.remove('hidden')
}

const saveUserName = localStorage.getItem('username')

if(saveUserName === null){
    loginForm.classList.remove('hidden')
    loginForm.addEventListener('submit',loginSubmint)
}else{
    
    greetUser(saveUserName)
}



//clock
const clock = document.querySelector('.clock')

function getClock (){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,'0')
    const minutes = String(date.getMinutes()).padStart(2,'0')
    const seconds = String(date.getSeconds()).padStart(2,'0')

    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}
getClock()
setInterval(getClock,1000)



//background

const backgrounds = [
    "beige",
    "steelBlue",
    "lightBlue"
]

const randomBack = backgrounds[Math.floor(Math.random() * backgrounds.length)]

const wrap = document.querySelector('.wrap')

wrap.style.backgroundColor = randomBack