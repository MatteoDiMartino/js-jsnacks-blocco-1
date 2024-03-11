// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

let numFull = [];

for (let i = 0; i < 6; i++) {
    let putNum = parseInt(prompt('Inserisci un numero'));
    console.log (putNum);

    if (putNum % 2 !=0) {
        numFull.push(putNum);
    }

    console.log (numFull);
}