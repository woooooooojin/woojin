import subData from "./sub_data.js";




function madeDiv() {

    const subList = document.querySelector('.sublist')
    for (let i = 0; i < subData.length; i++) {

        const subDiv = document.createElement('div')
        subDiv.setAttribute('class', 'subBox')

        // for (let j = 0; j < subData.length; j++) {
        //     subDiv.setAttribute('id', 'sub_sort')

        // } //아이디값 부여


        const subImgWrap = document.createElement('div')
        subDiv.appendChild(subImgWrap)
        subImgWrap.setAttribute('class', 'subimg_wrap')


        // hover likes and cart
        const hoverBox = document.createElement('div')
        subImgWrap.appendChild(hoverBox)
        hoverBox.setAttribute('class', 'hoverBox')

        const hoverWrap = document.createElement('div')
        hoverBox.appendChild(hoverWrap)
        hoverWrap.setAttribute('class', 'hoverWrap')

        const like = document.createElement('div')
        const likeTxt = document.createElement('i')

        likeTxt.setAttribute('class', 'fas fa-heart')
        like.setAttribute('class', 'like')
        like.appendChild(likeTxt)
        hoverWrap.appendChild(like)

        const cart = document.createElement('div')
        const cartTxt = document.createElement('i')
        cartTxt.setAttribute('class', 'fas fa-shopping-cart')
        cart.appendChild(cartTxt)
        cart.setAttribute('class', 'cart')
        hoverWrap.appendChild(cart)


        //img
        const subImg = document.createElement('img')
        subImg.setAttribute('src', subData[i].src)
        subImgWrap.appendChild(subImg)
        subImg.setAttribute('class', 'subimg')




        //상품설명
        const itemWrap = document.createElement('div')
        subDiv.appendChild(itemWrap)
        itemWrap.setAttribute('class', 'item_wrap')

        const itemDescWrap = document.createElement('div')
        itemWrap.appendChild(itemDescWrap)
        itemDescWrap.setAttribute('class', 'item_desc_wrap')



        const itemCategory = document.createElement('p')
        const itemCategoryTxt = document.createTextNode(subData[i].category)
        itemCategory.appendChild(itemCategoryTxt)
        itemDescWrap.appendChild(itemCategory)
        itemCategory.setAttribute('class', 'item_category')


        const itemName = document.createElement('p')
        const itemNameTxt = document.createTextNode(subData[i].name)
        itemName.appendChild(itemNameTxt)
        itemDescWrap.appendChild(itemName)
        itemName.setAttribute('class', 'item_name')


        const itemPrice = document.createElement('p')
        const itemPriceTxt = document.createTextNode(subData[i].price)
        itemPrice.appendChild(itemPriceTxt)
        itemDescWrap.appendChild(itemPrice)
        itemPrice.setAttribute('class', 'item_price')


        //구매버튼
        const buyBox = document.createElement('div')
        itemWrap.appendChild(buyBox)
        buyBox.setAttribute('class', 'buy_box')

        const buyBtn = document.createElement('div')
        const buyTxt = document.createTextNode('BUY')
        buyBtn.appendChild(buyTxt)
        buyBox.appendChild(buyBtn)
        buyBtn.setAttribute('class', 'buy_btn')



        subList.appendChild(subDiv)






    }
}
madeDiv()


///////////////////////ddd//////////////////////



const selectBox = document.getElementById('select_sort'); //select box
const sublist = document.querySelector('.sublist')

selectBox.addEventListener('change', function () {

    if (selectBox.value === 'expensive') {
        subData.sort((a, b) => {
            return (a.price01 - b.price01) * -1
        })
        sublist.innerHTML = ''
        madeDiv() //높은가격순
    } else if (selectBox.value === 'cheap') {
        subData.sort((a, b) => {
            return (a.price01 - b.price01)
        })
        sublist.innerHTML = ''
        madeDiv() //낮은가격순
    } else if (selectBox.value === 'basic') {
        subData.sort((a, b) => {
            return (a.id - b.id)
        })
        sublist.innerHTML = ''
        madeDiv() //기본순
    } else if (selectBox.value === 'pop') {
        subData.sort((a, b) => {
            return (a.pop - b.pop)
        })
        sublist.innerHTML = ''
        madeDiv() //인기순
    } else if (selectBox.value === 'new') {
        subData.sort((a, b) => {
            return new Date(a.day).getTime() - new Date(b.day).getTime()
        }) //신상날짜순
        sublist.innerHTML = ''
        madeDiv() //신상순
    }

})


//검은색 왜안될까 console 에는 뜨는데,,,

// const blackColor = document.getElementById('color_chk02')
// const itemlist = document.querySelectorAll('.subBox')
// const blacks = subData.map((black) => {
//     return black.color === 'black' ? black : null;
// })


// let arrBlack = subData.filter(n=>{return n.color ==='black'})
// console.log(arrBlack)



// blackColor.addEventListener('change',function(){
 


// })






















const filterOpen = document.querySelector('.filter_open')
const filterClose = document.querySelector('.filter_close')
const filterList = document.querySelector('.filter_box_list')

//제이쿼리로 slide up down구현함
// filterOpen.addEventListener('click', () => {

//     filterList.style.display = 'block'


// })
// filterClose.addEventListener('click', () => {
//     filterList.style.display = 'none'
// })





const grid01 = document.querySelector('.grid_01')
const grid02 = document.querySelector('.grid_02')
let subBox = document.querySelectorAll('.subBox')
const wrapping = document.querySelector('.sublist_wrap')

grid01.addEventListener('click', function () {

    wrapping.classList.add('gridchange02')
    wrapping.classList.remove('gridchange01')
    grid02.style.color = '#ccc'
    grid01.style.color = 'black'

})

grid02.addEventListener('click', function () {
    wrapping.classList.add('gridchange01')
    wrapping.classList.remove('gridchange02')
    grid02.style.color = 'black'
    grid01.style.color = '#ccc'

})


// grid01.addEventListener('click', girdChange01)
// grid02.addEventListener('click', girdChange02)

// function girdChange01() {

//     for (let i = 0; i < subBox.length; i++) {
//         // subBox[i].style.width = 'calc(100% - 75% - 25px)'
//         subBox[i].classList.add('gridchange02')
//         subBox[i].classList.remove('gridchange01')
//     }

//     grid02.style.color = '#ccc'
//     grid01.style.color = 'black'


// }

// function girdChange02() {

//     for (let i = 0; i < subBox.length; i++) {
//         // subBox[i].style.width = 'calc(100% - 80% - 24px)'
//         subBox[i].classList.add('gridchange01')
//         subBox[i].classList.remove('gridchange02')
//     }
//     grid02.style.color = 'black'
//     grid01.style.color = '#ccc'


// }