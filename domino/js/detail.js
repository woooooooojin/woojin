///////롤링공지사항
function notice_roll(){
    $('.rolling li:first').slideUp(function(){
        $(this).appendTo($('.rolling')).slideDown()
    })
}
setInterval(function(){notice_roll()},3000);


///////////jquery//////////

$(function () {

    $('.quick_menu').css('top', $(window).height() / 2 - $('.quick_menu').height() / 2);

    $(window).scroll(function () {

        let point = $(this).scrollTop() + ($(window).height() / 2 - $('.quick_menu').height() /
            2)
        $('.quick_menu').stop().animate({
            top: point,
        }, 300)


    }) //quickmenu scroll event

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 300) {
            $('.btn_wrap').stop().animate({
                right: 30,
            }, 300)
        } else {
            $('.btn_wrap').stop().animate({
                right: -100,
            }, 300)
        }
    }) //btn wrap event


    $('.btn_top').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0,
        }, 300)
    })

    $('.btn_bot').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(document).height(),
        }, 300)
    }) //top button event





    $('.main_logo').click(function () {
        $(location).attr('href', '../index.html')
    })

   

    

    $('.close_btn3').click(function () {
        $('.popup3').css('display', 'none');
    })

    $('.moreclick .more_open').click(function () {
        $('.more_list2').slideDown(300);
        $('.more_open').css('display', 'none');
        $('.more_close').css('display', 'block');

    })
    $('.moreclick .more_close').click(function () {
        $('.more_list2').slideUp(300);
        $('.more_open').css('display', 'block');
        $('.more_close').css('display', 'none');

    })




})