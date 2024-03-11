// - Calcola la somma e la media dei primi 10 numeri.

// creo array con 10 numeri

let tenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
// console.log (tenNum);

for (let i = 0; i < 10; i++) {
    
    let contentAr = tenNum[i];
    // console.log (contentAr);

// sommo in maniera graduale
    result += contentAr;
    console.log (result + ' ecco la somma totale');

    let result2 = result / 10;
    console.log (result2 + ' ecco la media totale');
}