document.addEventListener('DOMContentLoaded', function () {

    const numBox = document.querySelector('#hp5')
   
    
    const randomNum = Math.floor(Math.random() * 10001)
    let randomTxt = document.createTextNode(randomNum)



  

    const hpBtn = document.querySelector('.hp_btn')
    hpBtn.addEventListener('click', function () {

        numBox.appendChild(randomTxt);
        
    })

    
    const hp4Btn = document.getElementById('hp4_btn');
    const hp4Value = document.getElementById('hp4')
    hp4Btn.addEventListener('click',function(){

        if(hp4Value.value == randomNum){
            alert('맞음')
           
        }else{
            alert('틀림')
        }

    })



})