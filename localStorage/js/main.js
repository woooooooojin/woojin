
const todoInput = document.getElementById('todo_input') // input
const addBtn = document.querySelector('.add') //add btn
const todoList = document.querySelector('.todo_list') // todo list

document.addEventListener('DOMContentLoaded',getLocal)

addBtn.addEventListener('click',addToDo)


function addToDo(e) {
    e.preventDefault();

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class','todo')

    const newTodo = document.createElement('li')
    newTodo.setAttribute('class','todo_desc')
    newTodo.innerHTML = todoInput.value

    newDiv.appendChild(newTodo) 
    saveLocal(todoInput.value)

    //완료버튼
    const compBtn = document.createElement('button')
    compBtn.setAttribute('class','complete')
    compBtn.innerHTML = '완료'
    newDiv.appendChild(compBtn)

    //삭제버튼
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','delete')
    delBtn.innerHTML='삭제'
    newDiv.appendChild(delBtn)



    todoList.appendChild(newDiv)
    todoInput.value = '' //초기화

    
   

}


function saveLocal(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))

    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}//로컬스토리지에 저장


function getLocal(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class','todo')

    const newTodo = document.createElement('li')
    newTodo.setAttribute('class','todo_desc')
    newTodo.innerHTML = todo

    newDiv.appendChild(newTodo) 

    //완료버튼
    const compBtn = document.createElement('button')
    compBtn.setAttribute('class','complete')
    compBtn.innerHTML = '완료'
    newDiv.appendChild(compBtn)

    //삭제버튼
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','delete')
    delBtn.innerHTML='삭제'
    newDiv.appendChild(delBtn)



    todoList.appendChild(newDiv)
    todoInput.value = '' //초기화
    })
}//저장된 키값을 가져오기



