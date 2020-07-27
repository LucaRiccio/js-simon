// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

var numeriCasuali = [];
var numeriUtente = [];

for (var i = 0; i < 5; i++) {
  numeriCasuali.push(generaRandom(1,100));
}
console.log(numeriCasuali);

alert("Numeri da memorizzare: " + numeriCasuali);

setTimeout(myFunction, 3000);

function myFunction() {
  parseInt(prompt("Inserisci un numero"));
};









// ***FUNZIONI***

function generaRandom(min,max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
