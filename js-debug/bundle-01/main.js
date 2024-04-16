/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// l'esercizio non stampa nulla perchè la i essendo uguale a 0 non sarà mai maggiore di cinque quindi non entra nel ciclo
// la condizione sarebbe dovuta essere i < 5
// correzione :
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// la funzione aggiunge 5 al numero passato come parametro se è pari altrimenti no
// l'errore è nella condizione perchè è stato usato l'operatore di assegnamento e non quello di comparazione come ===
// correzione :
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// la funzione esegue un ciclo per 5 volte e stampa l'indice, ma non avviene per la virgola
// l'errore è la virgola perche nel ciclo for va utilizzato il ;
// correzione :
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }





// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// la funzione restituisce un array con i numeri pari anche se non la salviamo da nessuna parte
// errori: 
// 1. i < numbers.length - 1; facendo così l'ultimo indice non viene preso in considerazione 
// 2. i++; il ; va tolto
// 3. numbers % 2 = 0 va usato l'operatore di comparazione ===
// 4. if (numbers % 2 = 0); va tolto il ; dopo le parentesi
// 5. evenNumbers.push(i); facendo cosi pushiamo l'indice ma noi vogliamo pushare il l'elemento dell'array quindi usiamo evenNumbers.push(numbers[i]);
// 6. return evenNumbers; va messo dopo la fine del ciclo perchè altrimenti diamo il risultato solo dopo la prima condiizone e quindi in questo caso sarà vuoto
// 7. displayEvenNumbers(); andrebbe salvato l'array che ci viene rsetituito in una variabile

// correzione :
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//     let evenNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
        
//     }
//     return evenNumbers;
// }

// const newArrayEven = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]