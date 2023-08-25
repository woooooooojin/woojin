$(function(){

    setInterval(() => {
        $('.slide_wrap').animate({"margin-top":'100%'},function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-top':'0'})
        })
    }, 2500);

})