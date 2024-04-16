const input = document.querySelector('input');
const array = []; // 1 null mettendo null non capisce che è un array

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return; // 2 '' se metto length non posso mettere stringa vuota

    array.push(input.value); // 3 add non è un metodo per inserire negli array
    // console.log(array);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value; // 4 text non fa nulla devo usare innerText
    document.querySelector('ul').append(li); // 5 push è per gli array

    let counter = 0; // 6 deve essere un numero ma in realtà funziona anche con una stringa 
    let item    = array[0];
    let max   = 1; // 7 deve essere let perchè cambia valore
    // const elems = [];  // 8 non serve a ninete come il resto del codice commentato

    for (let i = 0; i < array.length; i++) {  // 9 senza .length non entra mai nel ciclo
        // let val = array[i];


        // if (!elems[val]) {       
        //     elems[val] = 1;        **** questo codice non serve a nulla ****
        // } else {
        //     elems[val]++;
        // }

        for (let j = i; j < array.length; j++) { // 10 devo incrementare j non i

            // console.log("j", j);

            if (array[i] == array[j]) {
                counter++;  

                console.log(counter);
                if (max < counter) {

                max  = counter;
                item = array[i];
                console.log("max", max , "item", item);

                }
            } 
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert'); // 11  getElementsByClassName prende HTML collection e non l'object
    // console.log(alert);

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); // 12 va usato il backtip per usare le variabili
});