


$(function(){

    const eleWidht = $('.frame ul li').innerWidth();

    let state = false;
    let playOn = false; //상태변수
    let direction = 'right';
    let bannerAuto ; //setinterval 함수를 멈추게 하기 위해 변수사용 


    function play(){
        if(!playOn){//!playon = play되지 않는다면, true가 아니라면
            playOn = true
            bannerAuto = setInterval(function(){
                if(direction === 'right'){
                    $('.next').click()
                }else{
                    $('.prev').click()
                }
            },2000)//무한반복 setinterval 2초동안 실행
        }

        if(playOn){
            $('.frame li a').mouseover(function(){
                stop()
            })
        }//플레이중에 마우스오버하면 멈춤



    }//play()




    function stop(){
        if(playOn){
            playOn = false;
            clearInterval(bannerAuto);

        }
        $('.frame li a').mouseout(function(){
            play()
        })

        $('.frame li a').click(function(){
            location.href;
        })



    }//stop()


    function left(){
        stop()
        direction = 'right';
        $('.frame ul').animate({left: eleWidht * -1},500, function(){

            $(this).children('li:first').insertAfter($(this).children('li:last'));
            //ul자식중 마지막자식 뒤에 첫째를 넣는다
            $(this).css('left', 0);
            state = false;
            play();
        })


    }//left()


    function right(){
        stop()
        direction = 'left';

        $('.frame ul li:last').insertBefore($('.frame ul li:first'));
        $('.frame ul').css('left',eleWidht * -1);
        $('.frame ul').animate({left:0},500,function(){
            state = false;
            play();
        })


    }
    //right()


    
    //호출
    $('.prev').click(function(){
        if(!state){
            state = true;
            right()
        }
    })//prev btn click event

    $('.next').click(function(){
        if(!state){
            state = true;
            left()
        }
    })//next btn click event

    $('.play').click(function(){
        play();
    })


    $('.stop').click(function(){
        stop();
    })

    $('.play').click() //초기 강제 자동실행










})