$(function(){

    const eleWidht = $('.frame ul li').innerWidth();

    let state = false;
    let playOn = false;
    let direction = 'right';
    let bannerAuto ;

    function play(){
        if(!playOn){
            playOn = true;
            bannerAuto = setInterval(function(){
                if(direction === 'right'){
                    $('.next').click();
                }else{
                    $('.prev').click();
                }
            },2000)
        }

        if(playOn){
            $('.frame li a').mouseover(function(){
                stop()
            })
        }
    }//play()


    function stop(){
        if(playOn){
            playOn = false;
            clearInterval(bannerAuto);

        }
        $('.frame li a').mouseout(function(){
            play();
        })
        $('.frame li a').click(function(){
            location.href
        })
    } //stop()


    function left(){
        stop()
        direction = 'right';
        $('.frame ul').animate({left:eleWidht * -1},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css('left',0);
            state = false;
            play();

        })
    }//left()

    function right(){
        stop()
        direction = 'left';
        $('.frame ul li:first').insertBefore($('.frame ul li:last'));
        $('.frame ul').css('left',eleWidht * -1);
        $('.frame ul').animate({left:0},500,function(){
            state = false;
            play();
        })
    }//right()


    $('.prev').click(function(){
        if(!state){
            state = true;
            right();
        }
    })

    $('.next').click(function(){
        if(!state){
            state = true;
            left();
        }
    })

    $('.play').click(function(){
        play();
    })

    $('.stop').click(function(){
        stop();
    })
    $('.play').click()



})