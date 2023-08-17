$(function(){


    //가로 슬라이드
    setInterval(() => {
         $('.slide_wrap').animate({'margin-left' : '-100%'},function(){
        $('.slide').first().appendTo('.slide_wrap')
        $('.slide_wrap').css({'margin-left':'0%'})
    })
    }, 2000);

    // 세로슬라이드
    //   setInterval(() => {
    //      $('.slide_wrap').animate({'margin-top' : '-500px'},function(){
    //     $('.slide:first').appendTo('.slide_wrap')
    //     $('.slide_wrap').css({'margin-top':'0'})
    // })
    // }, 2000);

    //페이드
    // $('.slide:gt(0)').hide() //gt는 지정된 숫자보다 인덱스번호가 큰 요소를 리턴
    // setInterval(() => {
    //     $('.slide:first').fadeOut(500).next().fadeIn(1500)
    //     $('.slide:first').appendTo('.slide_wrap')
    // }, 3000);




   


})

