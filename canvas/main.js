const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800


canvas.addEventListener('mousemove',onMove)
canvas.addEventListener('mousedown',onMouseDown)
canvas.addEventListener('mouseup',canclePainting)
canvas.addEventListener('mouseleave',canclePainting)


let isPainting = false

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

}