const swiper = new Swiper('.swiper01', {
    loop: false,
    slidesPerView: 3,
    // slidesPerGroup:1,
    spaceBetween : 20,
  
    
  });
  const swiper2 = new Swiper('.swiper02', {
    loop: false,
    slidesPerView: 3,
    // slidesPerGroup:1,
    spaceBetween : 20,
  
    
  });


  const radio01 = document.getElementById('radio01')
  const radio02 = document.getElementById('radio02')    
  const swiper01 = document.querySelector('.swiper01')
  const swiper02 = document.querySelector('.swiper02')

  radio01.addEventListener('click',function(){

    if(radio01.checked){
        swiper01.style.display = 'block'
        swiper02.style.display = 'none'
    }

  })
  
  radio02.addEventListener('click',function(){

    if(radio02.checked){
        swiper02.style.display = 'block'
        swiper01.style.display = 'none'
    }

  })