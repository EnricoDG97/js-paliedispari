// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola 
// inserita è palindroma

// seleziono gli id dal html e do una variabile
const wordElement = document.getElementById("word");
const inputButtonElement = document.getElementById("inputButton");
let outputPalindromeElement = document.getElementById("outputPalindrome");

// creazione variabile sentinella
let isWordPalindrome = true;


// aggiungo evento al bottone
inputButtonElement.addEventListener("click", function() {

    let start = 0;
    let end = wordElement.value.length - 1;

    // let contatore =0;

    for(let i = 0; i < wordElement.value.length; i++) {
    // while(isWordPalindrome && contatore < wordElement.value.length) {

        if(wordElement.value[start] == wordElement.value[end]) {
            console.log(wordElement.value[start], wordElement.value[end], "sono uguali");
        } else {
            console.log(wordElement.value[start], wordElement.value[end], "Non sono uguali");
            isWordPalindrome = false;
        }

        // if(wordElement-value[start] != wordElement.value[end]) {
            // isWordPalindrome = false;
        // }

        start++;
        end--;

        // contatore++;

        console.log(isWordPalindrome);
    }

    if(isWordPalindrome) {
        console.log("è palindroma");
        outputPalindromeElement.innerText = "E' una parola palindroma!";
    } else {
        outputPalindromeElement.innerText = "Non è una parola palindroma!"
        console.log("non è palindroma");
    }

}); 

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const numberSelectElement = document.getElementById("numberSelect").value;
let inputUserNumber = Number(document.getElementById("inputNumber").value);
const playButtonElement = document.getElementById("playButton");
const resultOutputElement = document.getElementById("resultOutput");

playButtonElement.addEventListener("click", function() {
        let inputComputerNumber = Number(generateRandomNumber(1, 5));
        resultOutputElement.innerHTML = "Hai giocato: " + inputUserNumber + "<br>" + "Il computer ha giocato: " + inputComputerNumber + "<br>";

        if(isEvenOrOdd(inputUserNumber + inputComputerNumber) == numberSelectElement) {
            resultOutputElement.innerHTML += "Hai vinto!";
        }
        else {
            resultOutputElement.innerHTML += "Hai perso!";
        }
});


// functions for second exercise
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEvenOrOdd(number) {
    if(number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}