// Consegna
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Programma

// Raccolta dati
// Chiedere all'utente il numero di kilometri che deve percorrere.
// Chiedere all'utente la sua età.
// Creare una variabile "sconto" del 20%
// Creare una variabile "sconto" del 40%
// Creare una variabile del prezzo unitario (al kilometro) del biglietto

// Esecuzione logica
// Moltiplicare il numero di kilometri per il prezzo unitario per ottenere una variabile "prezzo totale".
// Controllare se, in base all'età dell'utente ha diritto oppure no ad uno sconto.
// Se si verificano le condizioni per avere diritto ad uno sconto allora applicare lo sconto del 20% o del 40% al prezzo totale e ottenere una nuova variabile chiamata "prezzo finale"

// Output
// Stampare il prezzo finale.


// ******* Izio script *******

// ******* Raccolta dati *******
const kilometri = prompt("Quanti kilometri devi fare?")
console.log(kilometri)

const età = prompt("Quanti anni hai?")
console.log(età)

const unitario = 0.21
console.log(unitario)

const prezzoTotale = kilometri * unitario
console.log(prezzoTotale)

const sconto20 = (prezzoTotale * 20) / 100
console.log(sconto20)

const sconto40 = (prezzoTotale * 40) / 100
console.log(sconto40)

// ******* Fine Raccolta dati *******

// ******* Esecuzione logica *******
console.log("Il costo del tuo biglietto è:")

if(età < 18){
    console.log(prezzoTotale-sconto20)
}else if(età >= 65){
    console.log(prezzoTotale-sconto40)
}else if(età >= 18){
    console.log(prezzoTotale)

}
// ******* Fine esecuzione logica *******
// ******* Output *******
// ******* Fine Output *******

// ******* Fine script *******

