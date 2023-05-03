window.addEventListener('scroll',(e) => {

   
    const mainLnb = document.querySelectorAll('.head_lnb ul li a');
    const mainGnb = document.querySelectorAll('.head_gnb ul li a');
    const mainLogo = document.querySelector('.head_logo .imgwrap img');

    if(window.scrollY > 100){
        document.querySelector('header').style.backgroundColor = '#fff'
        mainLogo.setAttribute('src','img/LOGO/01(1).png')
        for(let i = 0; i < mainLnb.length; i++){
            mainLnb[i].style.color = 'black'
        }
        for(let i = 0; i < mainGnb.length; i++){
            mainGnb[i].style.color = 'black'
        }

    }else{
        document.querySelector('header').style.backgroundColor = ''
        mainLogo.setAttribute('src','img/LOGO/01(3).png')
        for(let i = 0; i < mainLnb.length; i++){
            mainLnb[i].style.color = '#fff'
        }
        for(let i = 0; i < mainGnb.length; i++){
            mainGnb[i].style.color = '#fff'
        }
       
    }

    

})