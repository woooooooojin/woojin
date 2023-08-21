$(function(){
    
    $('.main_menu').mouseenter(function(){
        $('.sub_menu, .headbg').slideDown(300)
    })

    $('.main_menu').mouseleave(function(){
        $('.sub_menu, .headbg').slideUp(300)
    })


    setInterval(() => {
        $('.slider_wrap').animate({'margin-top' : '-300px'},function(){
            $('.slider:first').appendTo('.slider_wrap')
            $('.slider_wrap').css({'margin-top' : '0'})
        })
    }, 2000);

  

    // $('.slider:gt(0)').hide()
    // setInterval(() => {
    //     $('.slider:first').fadeOut(500).next().fadeIn(1500)
    //     $('.slider:first').appendTo('.slider_wrap')
    // }, 2000);

   



})

// const mainMenu = document.querySelectorAll('.lnb .main_menu li a')

// for(let i =0; i<mainMenu.length; i++){
//     mainMenu[i].addEventListener('mouseover',function(){
//         mainMenu[i].classList.add('on')
//     })

//     mainMenu[i].addEventListener('mouseleave',function(){
//         mainMenu[i].classList.remove('on')
//     })
// }

