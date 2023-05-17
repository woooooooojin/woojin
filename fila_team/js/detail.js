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

    const reviewBtn = document.getElementById('review_btn')//리뷰버튼
    const reviewName = document.getElementById('rename')//리뷰아이디
    const reviewTxt = document.getElementById('retxt')//리뷰본문
    const R_List = document.querySelector('.R_list')
    

    reviewBtn.addEventListener('click',function(){

        const Li = document.createElement('li')
        Li.setAttribute('class','review_inner')

        const numberBox = document.createElement('div')
        numberBox.setAttribute('class','inner_number')
        Li.appendChild(numberBox)

        const numberSpan = document.createElement('span')
        numberSpan.setAttribute('class','review_txt')
        numberBox.appendChild(numberSpan)

        let Rcnt =1;
        const Lis = document.querySelectorAll('.review_inner')

        function plusCnt(){
            for(i=0;i<Lis.length;i++){
                Rcnt++
            }
                
            numberSpan.innerHTML = Rcnt
            
        }
        plusCnt()
        
        
        
        
      

        const starBox = document.createElement('div')
        starBox.setAttribute('class','inner_stars')
        Li.appendChild(starBox)


        // 별
        const star1 = document.createElement('i')
        star1.setAttribute('class','fas fa-star')
        starBox.appendChild(star1)

        const star2 = document.createElement('i')
        star2.setAttribute('class','fas fa-star')
        starBox.appendChild(star2)
        const star3 = document.createElement('i')
        star3.setAttribute('class','fas fa-star')
        starBox.appendChild(star3)
        const star4 = document.createElement('i')
        star4.setAttribute('class','fas fa-star')
        starBox.appendChild(star4)
        const star5 = document.createElement('i')
        star5.setAttribute('class','fas fa-star')
        starBox.appendChild(star5)


        const txtBox = document.createElement('div')
        txtBox.setAttribute('class','inner_txt')
        Li.appendChild(txtBox)

        const txtspan = document.createElement('span')
        txtspan.setAttribute('class','txt_span')
        txtBox.appendChild(txtspan)
        txtspan.innerHTML = reviewTxt.value
        reviewTxt.value = ''
        


        const idBox = document.createElement('div')
        idBox.setAttribute('class','inner_id')
        Li.appendChild(idBox)

        const idSpan = document.createElement('span')
        idSpan.setAttribute('class','id_span')
        idBox.appendChild(idSpan)
        idSpan.innerHTML = reviewName.value
        reviewName.value=''

        const dateBox = document.createElement('div')
        dateBox.setAttribute('class','inner_date')
        Li.appendChild(dateBox)

        const dateSpan = document.createElement('span')
        dateSpan.setAttribute('class','date_span')
        dateBox.appendChild(dateSpan)
        
        //날짜 넣기
        let nowDate = new Date().toLocaleDateString();
          dateSpan.innerHTML = nowDate


        const closeBox = document.createElement('div')
        closeBox.setAttribute('class','inner_close')
        Li.appendChild(closeBox)

        const closeX = document.createElement('i')
        closeX.setAttribute('class','fas fa-times')
        closeBox.appendChild(closeX)

        



        R_List.appendChild(Li)

        closeX.addEventListener('click',function(){
            R_List.removeChild(Li)
        })
       




    })
   













    

})