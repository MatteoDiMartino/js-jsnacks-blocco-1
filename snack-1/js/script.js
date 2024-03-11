// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// definisco array

let numGroup = [1, 2, 3];

// chiedere i numeri

for (let i = 1; i < 6; i++) {
    let putNum = parseInt(prompt('Inserisci un numero'));
    console.log (putNum);

// se l'array include già il parametro digitato nel prompt dall'utente, quest'ultimo non verrà aggiunto

    if (numGroup.includes(putNum)) {
       console.log ('il numero è già in lista') 
    } else {
        numGroup.push(putNum);
    }
    console.log (numGroup);


}