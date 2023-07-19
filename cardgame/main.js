const x = 4;
const y = 3;
const total = x * y;
const backColor = [
    '#FFC312', '#FFC312', '#C4E538', '#C4E538',
    '#12CBC4', '#12CBC4', '#ED4C67', '#ED4C67',
    '#FDA7DF', '#FDA7DF', '#833471', '#833471'
];

let chooseColor = []; //색상을 담을 배열

let clicked = []; //클릭한것 2개 담을 배열
let complete = []; //맞춘것을 담을 배열

while (backColor.length > 0) {
    let color = Math.floor(Math.random() * backColor.length);
    let mixedColor = backColor.splice(color, 1)[0];
    chooseColor.push(mixedColor);
}

function cardMade(x, y) {
    const wrap = document.querySelector('.wrap');
    for (let i = 0; i < x * y; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        wrap.appendChild(card);

        const cardInner = document.createElement('div');
        cardInner.className = 'cardinner';
        card.appendChild(cardInner);

        const cardFront = document.createElement('div');
        cardFront.className = 'cardfront';
        cardInner.appendChild(cardFront);

        const cardBack = document.createElement('div');
        cardBack.className = 'cardback';
        cardInner.appendChild(cardBack);
        cardBack.style.backgroundColor = chooseColor[i];

        setTimeout(() => {
            card.classList.add('flipped');
        }, i * 200);

        setTimeout(() => {
            card.classList.remove('flipped');
        }, i * 200 + 1000);



        function onClickCard(e) {
            e.currentTarget.classList.toggle('flipped')
            clicked.push(e.currentTarget)

            if (clicked.length !== 2) { 
                return
            }
            let firstColor = (clicked[0].querySelector('.cardback')).style.backgroundColor;
            let secondColor = (clicked[1].querySelector('.cardback')).style.backgroundColor;

            if (firstColor === secondColor) {
                complete.push(clicked[0]);
                complete.push(clicked[1]);
                clicked = [];

                if (complete.length === total) {
                    alert('Clear !!');
                    complete = [];
                    location.reload()
            
                }
            } else {
                setTimeout(() => {
                    clicked[0].classList.remove('flipped');
                    clicked[1].classList.remove('flipped');
                    clicked = [];
                }, 500);
            }


        }
        card.addEventListener('click',onClickCard)

       


   
    }
}

cardMade(x, y);