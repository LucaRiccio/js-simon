// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

var numeriCasuali = [];
var numeriUtente = [];

//popolo l'array numeriCasuali con 5 numeri random.
for (var i = 0; i < 5; i++) {
  numeriCasuali.push(generaRandom(1,100));
}
console.log(numeriCasuali);

//alert che mostra i 5 numeri random dell'array numeriCasuali.
alert("Numeri da memorizzare: " + numeriCasuali);

//timing function, partirà trascorso il tempo indicato.
setTimeout(inserisci, 3000);

//Il ciclo for nella funzione richiederà 5 volte l'inserimento di un numero
//che vengono salvati in una variabile; Se i numeri sono uguali a quelli presenti
//nell'array numeriCasuali verranno pushati nell'array numeriUtente.
function inserisci(){
  for (var i = 0; i < 5; i++) {
    var inserimento = parseInt(prompt("Inserisci un numero"));
    if (inserimento == numeriCasuali[i]) {
      numeriUtente.push(inserimento);
    }
  }
  console.log("Hai indovinato " + numeriUtente.length + " numeri"); // Log che mostra la lunghezza di numeriUtente e quindi quanti numeri sono esatti.
  console.log(numeriUtente); //log che mostra il contenuto di numeriUtente e quindi gli eventuali numeri esatti.
};



// ***FUNZIONI***

function generaRandom(min,max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
