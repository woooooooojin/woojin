
let counting = document.querySelector('.counting')
let cnt = 0;

let count = setInterval(() => {
    if(cnt === 100){
        clearInterval(count)
        return false;
    }
    cnt += 1
    counting.innerHTML = cnt + '%'
}, 20);