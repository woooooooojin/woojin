import subData from "./sub_data.js";


const subList = document.querySelector('.sublist')

for (let i = 0; i < subData.length; i++) {

    const subDiv = document.createElement('div')
    subDiv.setAttribute('class', 'subBox')



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







document.addEventListener('DOMContentLoaded', function () {

    // const filterOpen = document.querySelector('.filter_open')
    // const filterClose = document.querySelector('.filter_close')
    // const filterList = document.querySelector('.filter_box_list')


    // filterOpen.addEventListener('click',()=>{

    //     filterList.style.display = 'block'


    // })
    // filterClose.addEventListener('click',()=>{
    //     filterList.style.display = 'none'
    // })

    const grid01 = document.querySelector('.grid_01')
    const grid02 = document.querySelector('.grid_02')
    const subBox = document.querySelectorAll('.subBox')

    grid01.addEventListener('click', girdChange01)
    grid02.addEventListener('click', girdChange02)

    function girdChange01() {

        for (let i = 0; i < subBox.length; i++) {
            subBox[i].style.width = 'calc(100% - 75% - 25px)'
        }


    }

    function girdChange02() {


        for (let i = 0; i < subBox.length; i++) {
            subBox[i].style.width = 'calc(100% - 80% - 24px)'

        }


    }




})



document.addEventListener('DOMContentLoaded', function () {



    const selectBox = document.getElementById('select_sort'); //select box
    // const optLength = selectBox.options.length; //select box의 option 갯수
    const sortData =  subData.sort((itemA, itemB) => {
        
    })
       
    






})