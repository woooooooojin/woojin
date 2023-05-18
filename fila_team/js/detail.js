document.addEventListener('DOMContentLoaded', function () {

    const pdcInfoLi = document.querySelectorAll('.pdc_info_tit li')
    const infoBox01 = document.querySelector('.infobox_01')
    const infoBox02 = document.querySelector('.infobox_02')
    const infoBox03 = document.querySelector('.infobox_03')
    pdcInfoLi[0].addEventListener('click', function () {
        pdcInfoLi[2].classList.remove("on")
        pdcInfoLi[1].classList.remove("on")
        pdcInfoLi[0].classList.add("on")
        infoBox01.style.display = 'block'
        infoBox02.style.display = 'none'
        infoBox03.style.display = 'none'
    })
    pdcInfoLi[1].addEventListener('click', function () {
        pdcInfoLi[2].classList.remove("on")
        pdcInfoLi[0].classList.remove("on")
        pdcInfoLi[1].classList.add("on")
        infoBox01.style.display = 'none'
        infoBox02.style.display = 'block'
        infoBox03.style.display = 'none'
    })
    pdcInfoLi[2].addEventListener('click', function () {
        pdcInfoLi[0].classList.remove("on")
        pdcInfoLi[1].classList.remove("on")
        pdcInfoLi[2].classList.add("on")
        infoBox01.style.display = 'none'
        infoBox02.style.display = 'none'
        infoBox03.style.display = 'block'
    })





    const sizeInfo = document.querySelector('.size_info')
    const sizeClose = document.querySelector('.size_close')
    const realSize = document.querySelector('.real_size')
    sizeInfo.addEventListener('click', () => {

        realSize.style.display = 'block'

    })
    sizeClose.addEventListener('click', () => {
        realSize.style.display = 'none'

    })







    const reviewTab = document.querySelectorAll('.review_tab ul li')
    const reviewBox = document.querySelector('.review_box01')
    const noticeBox = document.querySelector('.notice_box01')

    reviewTab[0].addEventListener('click', function () {

        reviewTab[1].classList.remove('on1')
        reviewTab[0].classList.add('on1')
        reviewBox.style.display = 'block'
        noticeBox.style.display = 'none'
    })
    reviewTab[1].addEventListener('click', function () {

        reviewTab[0].classList.remove('on1')
        reviewTab[1].classList.add('on1')
        reviewBox.style.display = 'none'
        noticeBox.style.display = 'block'
    })






    //리뷰 등록

    const reviewBtn = document.getElementById('review_btn') //리뷰버튼
    const reviewName = document.getElementById('rename') //리뷰아이디
    const reviewTxt = document.getElementById('retxt') //리뷰본문
    const R_List = document.querySelector('.R_list')


    reviewBtn.addEventListener('click', function () {

        const Li = document.createElement('li')
        Li.setAttribute('class', 'review_inner')

        const numberBox = document.createElement('div')
        numberBox.setAttribute('class', 'inner_number')
        Li.appendChild(numberBox)

        const numberSpan = document.createElement('span')
        numberSpan.setAttribute('class', 'review_txt')
        numberBox.appendChild(numberSpan)

        let Rcnt = 1;
        const Lis = document.querySelectorAll('.review_inner')

        function plusCnt() {
            for (i = 0; i < Lis.length; i++) {
                Rcnt++
            }

            numberSpan.innerHTML = Rcnt

        }
        plusCnt()






        const starBox = document.createElement('div')
        starBox.setAttribute('class', 'inner_stars')
        Li.appendChild(starBox)


        // 별
        const star1 = document.createElement('i')
        star1.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star1)

        const star2 = document.createElement('i')
        star2.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star2)
        const star3 = document.createElement('i')
        star3.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star3)
        const star4 = document.createElement('i')
        star4.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star4)
        const star5 = document.createElement('i')
        star5.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star5)


        const txtBox = document.createElement('div')
        txtBox.setAttribute('class', 'inner_txt')
        Li.appendChild(txtBox)

        const txtspan = document.createElement('span')
        txtspan.setAttribute('class', 'txt_span')
        txtBox.appendChild(txtspan)
        txtspan.innerHTML = reviewTxt.value
        reviewTxt.value = ''



        const idBox = document.createElement('div')
        idBox.setAttribute('class', 'inner_id')
        Li.appendChild(idBox)

        const idSpan = document.createElement('span')
        idSpan.setAttribute('class', 'id_span')
        idBox.appendChild(idSpan)
        idSpan.innerHTML = reviewName.value
        reviewName.value = ''

        const dateBox = document.createElement('div')
        dateBox.setAttribute('class', 'inner_date')
        Li.appendChild(dateBox)

        const dateSpan = document.createElement('span')
        dateSpan.setAttribute('class', 'date_span')
        dateBox.appendChild(dateSpan)

        //날짜 넣기
        let nowDate = new Date().toLocaleDateString();
        dateSpan.innerHTML = nowDate


        const closeBox = document.createElement('div')
        closeBox.setAttribute('class', 'inner_close')
        Li.appendChild(closeBox)

        const closeX = document.createElement('i')
        closeX.setAttribute('class', 'fas fa-times')
        closeBox.appendChild(closeX)









        R_List.appendChild(Li)

        closeX.addEventListener('click', function () {
            R_List.removeChild(Li)
        })





    })





    //주문수량, 가격 event

    const minusBox = document.querySelector('.minus_box')
    const plusBox = document.querySelector('.plus_box')
    const cntBox = document.getElementById('cnt_box')
    const totalPrice = document.querySelector('.total_price span')

    minusBox.addEventListener('click', function () {

        cntBox.value--
        if (cntBox.value <= 0) {
            cntBox.value = 1
        }
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')
        // totalPrice.innerHTML = cntBox.value * 119000
    })
    plusBox.addEventListener('click', function () {

        cntBox.value++
        if (cntBox.value > 20) {
            alert('수량은 최대 20개 가능합니다.')
            cntBox.value = '20'
        }
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')
        // totalPrice.innerHTML = cntBox.value * 119000

    })

    cntBox.addEventListener('change', function () {
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')

        if (cntBox.value <= 0) {
            cntBox.value = '1'
            alert('수량은 1개이상 가능합니다.')
            totalPrice.innerHTML = '119,000'
        }
    })





    //상품문의 등록
    const noticeName = document.getElementById('notice_name')
    const noticeTxt = document.getElementById('notice_txt')
    const noticeBtn = document.getElementById('notice_btn')
    const noticeList = document.querySelector('.N_list')

    noticeBtn.addEventListener('click', function () {

        const noticeLi = document.createElement('li')
        noticeLi.setAttribute('class', 'notice_inner')

        const noticeNum = document.createElement('div')
        noticeNum.setAttribute('class', 'notice_num')
        noticeLi.appendChild(noticeNum)

        const noticeNumSpan = document.createElement('span')
        noticeNumSpan.setAttribute('class', 'notice_num_span')
        noticeNum.appendChild(noticeNumSpan)

        let Rcnt = 1;
        const noLis = document.querySelectorAll('.notice_inner')

        function plusCnt() {
            for (i = 0; i < noLis.length; i++) {
                Rcnt++
            }

            noticeNumSpan.innerHTML = Rcnt

        }
        plusCnt()

        const noticeText = document.createElement('div')
        noticeText.setAttribute('class','notice_txt')
        noticeLi.appendChild(noticeText)

        const textSpan = document.createElement('span')
        textSpan.setAttribute('class','notice_text_span')
        noticeText.appendChild(textSpan)

        textSpan.innerHTML = noticeTxt.value
        noticeTxt.value = ''

        const noticeReBtn = document.createElement('div')
        noticeReBtn.setAttribute('class','notice_rebtn')
        noticeLi.appendChild(noticeReBtn)

        const noticeBtnSpan = document.createElement('span')
        noticeReBtn.appendChild(noticeBtnSpan)
        noticeBtnSpan.innerHTML = '답글달기'

        const noticeId = document.createElement('div')
        noticeId.setAttribute('class','notice_id')
        noticeLi.appendChild(noticeId)

        

        const noticeIdSpan = document.createElement('span')
        noticeIdSpan.setAttribute('class','notice_id_span')
        noticeId.appendChild(noticeIdSpan)

        noticeIdSpan.innerHTML = noticeName.value
        noticeName.value = ''

        const noticeDate = document.createElement('div')
        noticeDate.setAttribute('class','notice_date')
        noticeLi.appendChild(noticeDate)

        const noticeDateSpan = document.createElement('span')
        noticeDateSpan.setAttribute('class','notice_date_span')
        noticeDate.appendChild(noticeDateSpan)

        let nowNoticeDate = new Date().toLocaleDateString();
        noticeDateSpan.innerHTML = nowNoticeDate

        const noticeClose = document.createElement('div')
        noticeClose.setAttribute('class','notice_close')
        noticeLi.appendChild(noticeClose)

        const noticeI = document.createElement('i')
        noticeI.setAttribute('class','fas fa-times')
        noticeClose.appendChild(noticeI)

        ////re
        const noticeRe = document.createElement('div')
        noticeRe.setAttribute('class','Re_list')
        noticeLi.appendChild(noticeRe)




        noticeList.appendChild(noticeLi)

        noticeClose.addEventListener('click', function () {
            noticeList.removeChild(noticeLi)
        })
    })


    ////답글 추가

    const reTxt = document.getElementById('replyTxt')
    const reBtn = document.getElementById('re_btn')
    const n_List = document.querySelector('.notice_list')
    const reClose = document.getElementById('re_close')
    const rePop = document.querySelector('.re_pop')


    

    reBtn.addEventListener('click',function(){
        const noticeLi = document.querySelector('.Re_list')


        const reply = document.createElement('div')
        reply.setAttribute('class','reply_box')

        const replySpan = document.createElement('span')
        replySpan.setAttribute('class','reply_span')
        reply.appendChild(replySpan)
        replySpan.innerHTML = 'ㄴ> 답글 :'

        const replyTxt = document.createElement('span')
        replyTxt.setAttribute('class','reply_txt')
        reply.appendChild(replyTxt)
        replyTxt.innerHTML = reTxt.value

        const replyDel = document.createElement('span')
        replyDel.setAttribute('class','reply_del')
        reply.appendChild(replyDel)
        replyDel.innerHTML = 'X'


        noticeLi.appendChild(reply)

        replyDel.addEventListener('click',function(){
            noticeLi.removeChild(reply)
            
        })




        
        
    


    })

    n_List.addEventListener('click',function(){
        
            rePop.style.display = 'block'
        
        
    })
    reClose.addEventListener('click',function(){
        rePop.style.display = 'none'
    })

    ////답글남기기 버튼만들어서 다시만들기
  














})