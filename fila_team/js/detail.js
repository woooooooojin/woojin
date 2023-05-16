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
        sizeInfo.addEventListener('click',()=>{

            realSize.style.display = 'block'

        })
        sizeClose.addEventListener('click',()=>{
            realSize.style.display = 'none'

        })








})