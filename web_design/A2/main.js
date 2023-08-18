$(function(){
    
    $('.main_menu').mouseenter(function(){
        $('.sub_menu, .headbg').slideDown(300)
    })

    $('.main_menu').mouseleave(function(){
        $('.sub_menu, .headbg').slideUp(300)
    })

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
