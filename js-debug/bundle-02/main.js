/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// la funzione genera il messaggio in base all'età che è di 32 anni
// errori:
// 1. message non può essere const se cembia il calore quindi va usato let
// 2. manca il return perchè se non non fa niente
// 3. andrebbe asseganto il return a una variabile tipo così: const strToPrint = checkAge();

// correzione:
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }

//     return message;
// }

// const strToPrint = checkAge();

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// la funzione stampa quanti colori ci sono nell'array
// errori:
// 1. la scritta length 

// correzione:
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// la funzione fa la somma di 12 + il numero inserito dall'utente
// errori:
// 1. il numero inserito tramite prompt è una stringa quindi va convertito
// correzione: 
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// la funzione controlla se la mail inserita nel pompt è incusa nell'array e risponde di seguito
// errori:
// 1. nel confronto grantAccess che è una stringa viene confrontato con un boolean. quindi bisogna cambiare e fare o il controllo con la stringa o aggiustare grantAccess e renderlo boolean 

// correzione:
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === 'true') {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }

// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// errori:
// 1. mancava la parentesi graffa di chiusura della funnzione
// 2. grantAccess è stato usato come string ma conviene usarlo come boolean se si vuole usare la condizione per il messaggio altrimenti va cambiata la condizione con il confronto della stringa
// 3. la condizione per il messaggio va messa dopo il for peche altrimenti stapa per ogni elemento se l'accesso è consentito o meno

// correzione:
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = true;

//             }

//         }

//     }

//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }

// }
//     checkAccessImproved();





























