const loginInput = document.querySelector('#login_form input')
const loginForm = document.querySelector('#login_form')
const greet = document.querySelector('#greet')

function loginSubmint(e) {
    e.preventDefault()
    const username = loginInput.value
    loginForm.classList.add('hidden')
    localStorage.setItem('username', username)

    greetUser(username)

}


function greetUser(username) {
    greet.innerText = username + '님의 할 일 !'
    greet.classList.remove('hidden')
}

const saveUserName = localStorage.getItem('username')

if (saveUserName === null) {
    loginForm.classList.remove('hidden')
    loginForm.addEventListener('submit', loginSubmint)
} else {

    greetUser(saveUserName)
}



//clock
const clock = document.querySelector('.clock')

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}
getClock()
setInterval(getClock, 1000)



//background

const backgrounds = [
    "01.jpg",
    "02.png",
    "03.jpg"
]

const randomBack = backgrounds[Math.floor(Math.random() * backgrounds.length)]

const wrap = document.querySelector('.wrap')
const backImg = document.createElement('img')
backImg.setAttribute('class', 'backimg')
backImg.src = `img/${randomBack}`
wrap.appendChild(backImg)









//todolist
const todo = document.getElementById('todo')
const todoList = document.getElementById('todo_list')
const todoInput = document.querySelector('#todo input')

let toDos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(toDos)) // 스트링으로 변환후 배열형태로 넣기
}

function handelTodo(e) {
    e.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ''

    const newtodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newtodoObj)
    paintTodo(newtodoObj)
    saveTodos()

}

todo.addEventListener('submit', handelTodo)

function paintTodo(newTodo) {
    const li = document.createElement('li')
    li.id = newTodo.id
  
    const span = document.createElement('span')
    span.innerText = newTodo.text

    const btn = document.createElement('button')
    btn.innerText = 'X'

    btn.addEventListener('click', deleteTodo)


    li.appendChild(span)
    li.appendChild(btn)

    todoList.appendChild(li)




}

function deleteTodo(e) {
    const li = e.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveTodos() //filter 새로운 배열을 반환하기때문에 다시 저장시켜야함

}



const savedTodos = localStorage.getItem("todos") // 로컬스토리지에 저장된 투두리스트
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo)
    //foreach를 사용하여 새로고침해도 리스트가 남게 페인팅시킴

}