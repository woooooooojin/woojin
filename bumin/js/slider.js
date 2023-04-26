$(function(){

    const eleWidht = $('.frame ul li').innerWidth();

    let state = false;
    let playOn = false;
    let direction = 'right';
    let autoX;

    function play(){
        if(!playOn){
            playOn = true
            autoX = setInterval(function(){
                if(direction === 'right'){
                    $('.arrow_btn .next i').click()
                }else{
                    $('.arrow_btn .prev i').click()
                }
            },2000)
        }

        if(playOn){
            $('.frame ul li a').mouseover(function(){
                stop()
            })
        }
    }//play()


    function stop(){
        if(playOn){
            playOn = false;
            clearInterval(autoX);
        }
        $('.frame ul li a').mouseout(function(){
            play()
        })
        $('.frame ul li a').click(function(){
            location.href
        })
    }//stop()

    function left(){
        stop()
        dirction = 'right'
        $('.frame ul').animate({left: eleWidht * - 1},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css('left',0);
            state = false;
            play();
        })
    }//left()

    function right(){
        stop()
        direction = 'left';

        $('.frame ul li:last').insertBefore($('.frame ul li:first'));
        $('.frame ul').css('left',eleWidht * - 1);
        $('.frame ul').animate({left:0},500,function(){
            state = false;
            play();
        })
    }//right()



    $('.prev').click(function(){
        if(!state){
            state = true;
            right()
        }
    })//prev click event

    $('.next').click(function(){
        if(!state){
            state = true;
            left()
        }
    })//next click event

    $('.play').click(function(){
        play();
    })//play click event

    $('.stop').click(function(){
        stop()
    })//stop click event

    $('.play').click();




})