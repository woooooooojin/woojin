//input
const lineWidth = document.getElementById('line_width')
const color = document.getElementById('color')

//color options
// const colorOpt = Array.from(document.getElementsByClassName('color_opt'))
const colorOpt = document.querySelectorAll('.color_opt')

//mode button
const modeBtn = document.getElementById('mode_btn')
const resetBtn = document.getElementById('reset_btn')
const eraseBtn = document.getElementById('erase_btn')




const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const cnavasWidth = 800
const cavasHeight = 800
canvas.width = cnavasWidth
canvas.height = cavasHeight
// ctx.lineWidth = lineWidth.value



//event
canvas.addEventListener('mousemove',onMove)
canvas.addEventListener('mousedown',onMouseDown)
canvas.addEventListener('mouseup',canclePainting)
canvas.addEventListener('mouseleave',canclePainting)
canvas.addEventListener('click',canvasClick)

lineWidth.addEventListener('change',lineWidthChange) //선 굵기 
color.addEventListener('change',onColorChange) //색상변경
colorOpt.forEach(color => color.addEventListener('click',colorClick)) //사용자 선택 색상
modeBtn.addEventListener('click',modeClick)//fill stroke
resetBtn.addEventListener('click',resetCanvas)
eraseBtn.addEventListener('click',eraseClick)


let isPainting = false // paint 상태변수
let isFilling = false // filling 상태변수   


function onMove(e){

    if(isPainting){
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(e.offsetX, e.offsetY)

}
function onMouseDown(){
    isPainting = true
}
function canclePainting(){

    isPainting = false
    ctx.beginPath()
    //새로운 path로 시작한다   

}

function lineWidthChange(e){
    ctx.lineWidth = e.target.value
}

function onColorChange(e){
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
} // color change function

function colorClick(e){
    const colorValue = e.target.dataset.color
    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    color.value = colorValue
}//color click function

function modeClick(){
    if(isFilling){
        isFilling = false
        modeBtn.innerText = '채우기'
    }else{
        isFilling = true
        modeBtn.innerText = '그리기'
    }
}//mode change function

function canvasClick(e){
    if(isFilling){
        ctx.fillRect(0,0,cnavasWidth,cavasHeight)
    }
}//fill function

function resetCanvas(){
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,cnavasWidth,cavasHeight)
}//reset funtcion

function eraseClick(){
    ctx.strokeStyle = 'white'
    isFilling = false
    modeBtn.innerText = '채우기'
}//erase function