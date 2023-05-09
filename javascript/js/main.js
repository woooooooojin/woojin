import shoppingList from './data.js'

const bestProduct = document.querySelector('.best_product')
for(let j =1; j<=4; j++){
for(let i = 0; i < shoppingList.length; i++){
    
    const bestDiv = document.createElement('div')
    bestDiv.setAttribute('class','best_box')
    
    const bestImg = document.createElement('img')
    bestImg.setAttribute('src',shoppingList[i].src)
    bestDiv.appendChild(bestImg)


    const bestName = document.createElement('p')
    const bestNameTxt = document.createTextNode(shoppingList[i].name)
    bestName.setAttribute('class','bestname')
    bestName.appendChild(bestNameTxt)
    bestDiv.appendChild(bestName)


    const bestPrice = document.createElement('p')
    const bestPriceTxt = document.createTextNode(shoppingList[i].price)
    bestPrice.setAttribute('class','bestprice')
    bestPrice.appendChild(bestPriceTxt)
    bestDiv.appendChild(bestPrice)



    bestProduct.appendChild(bestDiv)


    
    
}
}