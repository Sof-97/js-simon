let numToGuess;
let start = document.getElementById('start');
let toGuess = document.getElementById('toGuess');
let guessed = [];


start.addEventListener('click',
    function () {
        numToGuessGen(),
        showNumbers(),
        setTimeout(function(){
            removeNumbers(),
            numRequest(),
            showResults()
        }, 30000)
        
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
function showNumbers() {
    toGuess = '';
    for (i = 0; i < numToGuess.length; i++) {
        let box = document.createElement('div');
        box.classList.add('numbers');
        box.innerHTML = (`${(numToGuess[i])}`);
        document.getElementById('toGuess').appendChild(box);
    }
    start.classList.add('d-none');
}

//NOTE Rimozione numeri
function removeNumbers() {
    console.log("gigi")
    document.getElementById('toGuess').innerHTML = '';
}

//NOTE Prompt richiesta numeri
function numRequest() {
    for (i = 0; i < 5; i++) {
        let gigi = Number(prompt(`Quale numero ricordi?`));
        if (numToGuess.includes(gigi)) {
            guessed.push(gigi)
        }
    }
}

//NOTE Stampa dei risultati
function showResults(){
    let results = document.getElementById('results');
    results.classList.remove('d-none');
    let title = document.createElement('h2');
    title.innerHTML = "Gioco finito!"
    results.appendChild(title);
    let score = document.createElement('p');
    score.innerHTML = `Hai indovinato ${guessed.length} numeri!`;
    results.appendChild(score);
    score.innerHTML = JSON.stringify(guessed);
    results.appendChild(score);
}