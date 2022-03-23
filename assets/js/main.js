let numToGuess = [];



//NOTE Generazione numeri da indovinare
function numGen(z) {
    x = (Math.floor(Math.random() * z) + 1);
    return x;
}

for (i = 0; i < numToGuess.length; i++) {
    let num = numGen(100);
    
}