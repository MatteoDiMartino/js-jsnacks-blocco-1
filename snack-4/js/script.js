// - Calcola la somma e la media dei primi 10 numeri.

// creo array con 10 numeri

let tenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log (tenNum);

for (let i = 0; i < 10; i++) {
    
    let contentAr = tenNum[i];
    // console.log (contentAr);

    let calc = contentAr + i;
    console.log (calc + ' ecco la somma totale');

    let calc2 = calc / 10;
    console.log (calc2 + ' ecco la media totale');
}