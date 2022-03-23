let numToGuess;
let start = document.getElementById('start');
let toGuess = document.getElementById('toGuess');



start.addEventListener('click',
    function () {
        numToGuessGen(),
        showNumbers(),
        removeNumbers()
    }
)


//NOTE Generazione numeri da indovinare
function numGen(z) {
    x = (Math.floor(Math.random() * z) + 1);
    return x;
}

function numToGuessGen() {
    numToGuess = [];
    //NOTE Riempimento array numeri
    while (numToGuess.length < 5) {
        let num = numGen(100);
        if (!numToGuess.includes(num)) {
            numToGuess.push(num);
        }
    }
}

//NOTE Stampavalori a schermo
function showNumbers(){
    toGuess = '';
    for(i=0; i<numToGuess.length; i++){
        let box = document.createElement('div');
        box.classList.add('numbers');
        box.innerHTML= (`${(numToGuess[i])}`);
        document.getElementById('toGuess').appendChild(box);
    }
}
