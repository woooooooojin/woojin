//input
const lineWidth = document.getElementById('line_width')
const color = document.getElementById('color')

const fileInput = document.getElementById('file')
const textInput = document.getElementById('text')

//color options
// const colorOpt = Array.from(document.getElementsByClassName('color_opt'))
const colorOpt = document.querySelectorAll('.color_opt')

//mode button
const modeBtn = document.getElementById('mode_btn')
const resetBtn = document.getElementById('reset_btn')
const eraseBtn = document.getElementById('erase_btn')
const saveBtn = document.getElementById('save')




const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const canvasWidth = 800
const canvasHeight = 800
canvas.width = canvasWidth
canvas.height = canvasHeight
ctx.lineCap='round'
// ctx.lineWidth = lineWidth.value



//event
canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', onMouseDown)
canvas.addEventListener('mouseup', canclePainting)
canvas.addEventListener('mouseleave', canclePainting)
canvas.addEventListener('click', canvasClick)
canvas.addEventListener('dblclick', doubleClick)

lineWidth.addEventListener('change', lineWidthChange) //선 굵기 
color.addEventListener('change', onColorChange) //색상변경
colorOpt.forEach(color => color.addEventListener('click', colorClick)) //사용자 선택 색상
modeBtn.addEventListener('click', modeClick) //fill stroke
resetBtn.addEventListener('click', resetCanvas)
eraseBtn.addEventListener('click', eraseClick)
fileInput.addEventListener('change', fileChange)
saveBtn.addEventListener('click',saveClick)


let isPainting = false // paint 상태변수
let isFilling = false // filling 상태변수   


function onMove(e) {

    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(e.offsetX, e.offsetY)

}

function onMouseDown() {
    isPainting = true
}

function canclePainting() {

    isPainting = false
    ctx.beginPath()
    //새로운 path로 시작한다   

}

function lineWidthChange(e) {
    ctx.lineWidth = e.target.value
}

function onColorChange(e) {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
} // color change function

function colorClick(e) {
    const colorValue = e.target.dataset.color
    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    color.value = colorValue
} //color click function

function modeClick() {
    if (isFilling) {
        isFilling = false
        modeBtn.innerText = '채우기'
    } else {
        isFilling = true
        modeBtn.innerText = '그리기'
    }
} //mode change function

function canvasClick(e) {
    if (isFilling) {
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    }
} //fill function

function resetCanvas() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
} //reset funtcion

function eraseClick() {
    ctx.strokeStyle = 'white'
    isFilling = false
    modeBtn.innerText = '채우기'
} //erase function

function fileChange(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight)
        fileInput.value = null
    }
}


function doubleClick(e) {
    const text = textInput.value

    if (text !== '') {
        ctx.save() //스타일 라인굵기등을 저장해둠
        ctx.lineWidth = 1
        ctx.font = '30px serif'
        ctx.fillText(text, e.offsetX, e.offsetY)
        ctx.restore() //저장했던 상태로 되돌리기
    }

    
}

function saveClick(){
    const url = canvas.toDataURL() //url로 인코딩
    const a = document.createElement('a')
    a.href = url
    a.download = "myImg.png"
    a.click()

}