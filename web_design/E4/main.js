$(function(){

  // $('.slide:gt(0)').hide()
  // setInterval(() => {
  //   $('.slide:first').fadeOut(500).next().fadeIn(1500)
  //   $('.slide:first').appendTo('.slide_wrap')
  // }, 2500);

  setInterval(() => {
      $('.slide_wrap').animate({'margin-left':'-100%'},function(){
        $('.slide:first').appendTo('.slide_wrap')
        $('.slide_wrap').css({'margin-left':'0'})
      })
  }, 2500);



})