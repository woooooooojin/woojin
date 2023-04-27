

let countDown = new Date('Dec 20, 2023 12:00:00').getTime();

let x = setInterval(function(){

    let now = new Date().getTime();
    let timeOut = countDown - now;

    let days = Math.floor(timeOut / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeOut % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeOut % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeOut % (1000 * 60) / 1000);

    document.getElementById('timer').innerHTML = days + ' 일 ' + hours + ' 시간 ' + minutes + ' 분 ' + seconds + ' 초 ';

    if(timeOut < 0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = '종료된 이벤트입니다.';
    }
})