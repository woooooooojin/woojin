$(function(){


    //가로 슬라이드
    // setInterval(() => {
    //      $('.slide_wrap').animate({'margin-left' : '-100%'},function(){
    //     $('.slide').first().appendTo('.slide_wrap')
    //     $('.slide_wrap').css({'margin-left':'0%'})
    // })
    // }, 2000);

    // 세로슬라이드
      setInterval(() => {
         $('.slide_wrap').animate({'margin-top' : '-500px'},function(){
        $('.slide').first().appendTo('.slide_wrap')
        $('.slide_wrap').css({'margin-top':'0'})
    })
    }, 2000);

   


})

