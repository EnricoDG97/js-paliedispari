// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola 
// inserita è palindroma

// seleziono gli id dal html e do una variabile
let wordElement = document.getElementById("word");
let inputButtonElement = document.getElementById("inputButton");

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
    } else {
        console.log("non è palindroma");
    }

}); 