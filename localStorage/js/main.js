const todoInput = document.getElementById('todo_input') // input
const addBtn = document.querySelector('.add') //add btn
const todoList = document.querySelector('.todo_list') // todo list
const delAll = document.querySelector('.alldel')

//event
document.addEventListener('DOMContentLoaded', getLocal)

addBtn.addEventListener('click', addToDo)
todoList.addEventListener('click', toDoControl)
delAll.addEventListener('click', allDelete)


function addToDo(e) {
    e.preventDefault();

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'todo')

    const newTodo = document.createElement('li')
    newTodo.setAttribute('class', 'todo_desc')
    newTodo.innerText = todoInput.value
   
    if (todoInput.value === '') {
        return [
            false,
            alert('할 일을 입력하세요!')
        ]
    } //input 값이 비었을경우 

    newDiv.appendChild(newTodo)

    saveLocal(todoInput.value)



    //완료버튼
    const compBtn = document.createElement('button')
    compBtn.setAttribute('class', 'complete')
    compBtn.innerText = '완료'
    newDiv.appendChild(compBtn)

    //삭제버튼
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'delete')
    delBtn.innerText = '삭제'
    newDiv.appendChild(delBtn)



    todoList.appendChild(newDiv)
    todoInput.value = '' //초기화






}


function saveLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))

    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
} //로컬스토리지에 저장


function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function (todo) {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'todo')

        const newTodo = document.createElement('li')
        newTodo.setAttribute('class', 'todo_desc')
        newTodo.innerText = todo

        newDiv.appendChild(newTodo)

        //완료버튼
        const compBtn = document.createElement('button')
        compBtn.setAttribute('class', 'complete')
        compBtn.innerText = '완료'
        newDiv.appendChild(compBtn)

        //삭제버튼
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'delete')
        delBtn.innerText = '삭제'
        newDiv.appendChild(delBtn)



        todoList.appendChild(newDiv)
        todoInput.value = '' //초기화
    })

} //저장된 키값을 가져오기



function toDoControl(e){
    const btnName = e.target.classList[0]
    if(btnName === 'complete'){
        const todo = e.target.parentElement // 클릭한것의 부모노드
        todo.children[0].classList.toggle('done')
    }else if(btnName === 'delete'){
        const todo = e.target.parentElement
        removeLocal(todo)
        todo.remove()
    }
}

function removeLocal(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
        
    }

    const index = todos.indexOf(todo.children[0].innerText)
    todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))

}

function allDelete(){
   
    window.localStorage.clear()
    todoList.innerHTML = ''
    
}