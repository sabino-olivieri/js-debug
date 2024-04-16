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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// il codice prende un l'array di oggetti cars e da quello crea 3 array di oggetti in base al tipo 
// errori:
// 1. {
    // manufacturer: 'Seat',
    // model: 'Ibiza',
    // type: 'metano'
// } manca la virgola dopo la parentesi graffa
// 2. (auto) >= auto.type è sbagliato il segno per l'arrow function =>
// 3. auto.type andrebbe aggiunto .toLowerCase() per rendere la stringa minuscola e confontarla con benzina ecc visto che alcuni hanno la lettera grande
// 4. auto.type === 'diesel'; manca il return
// 5. return auto.type !== 'benzina' || auto.type !== 'diesel'; anzichè or va usato and perchè altimenti metterà comunque benzina e diesel


// correzione: 
// const cars = [
//     {
//         manufacturer: 'Ford',
//         model: 'Fiesta',
//         type: 'diesel'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'A1',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Golf',
//         type: 'Benzina'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Panda',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Multipla',
//         type: 'GPL'
//     },
//     {
//         manufacturer: 'Tesla',
//         model: 'Model 3',
//         type: 'elettrico'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Polo',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Ford',
//         model: 'Kuga',
//         type: 'Diesel'
//     },
//     {
//         manufacturer: 'Seat',
//         model: 'Ibiza',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'R8',
//         type: 'Benzina'
//     },
// ];

// const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

// const dieselCars = cars.filter( (auto) => {
//     return auto.type.toLowerCase() === 'diesel';
// });

// const otherCars = cars.filter( (auto) => {
//     return auto.type.toLowerCase()  !== 'benzina' && auto.type.toLowerCase()  !== 'diesel';
// });

// console.log('Auto a benzina');
// console.log('*******************************');
// console.log(gasolineCars);

// console.log('Auto a diesel');
// console.log('*******************************');
// console.log(dieselCars);

// console.log('Tutte le altre auto');
// console.log(otherCars);