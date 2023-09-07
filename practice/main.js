const raffle = document.getElementById('raffle')

raffle.addEventListener('click',function(e){
    e.preventDefault()
    const seed = document.getElementById('seed')
    const total = document.getElementById('total')
    const result = document.getElementById('result')
    let winner = ''

    for(let i =0; i < total.value; i++){
        let picked = Math.floor((Math.random() * seed.value) + 1)
        winner += `${picked}번 `
    }

    result.innerText = `당첨자 ${winner}`
    result.classList.add('show')

})