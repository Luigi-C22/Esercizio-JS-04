// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 62]
const shippingCost = 50

let totShip = 0;
let sum = 0;
let discount = 0.7;
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}
  //console.log("la spesa è: " + sum);
  
  //logica per utente Marco
  if(marco.isAmbassador){
    if(sum >= 100){
      totShip = ((sum * discount) + shippingCost );
      console.log("la spesa totale di " + marco.name + " scontata con spedizione è: " + totShip);
    } else {
    totShip = (sum + shippingCost);
    console.log("la spesa totale di " + marco.name + " senza sconto con spedizione è: " + totShip);
    }
  }
  // logica per utente Paul
  if(paul.isAmbassador){
    if(sum >= 100){
      totShip = ((sum * discount) + shippingCost );
      console.log("la spesa totaledi " + paul.name + "  scontata con spedizione è: " + totShip);
    } else {
    totShip = (sum + shippingCost);
    console.log("la spesa totale di " + paul.name + "senza sconto con spedizione è: " + totShip);
    }
  }

  // logica per utente Amy
  if(amy.isAmbassador){
    if(sum >= 100){
      totShip = ((sum * discount) + shippingCost );
      console.log("la spesa totale di " + amy.name + "scontata con spedizione è: " + totShip);
    } else {
    totShip = (sum + shippingCost);
    console.log("la spesa totale di " + amy.name + "senza sconto con spedizione è: " + totShip);
    }
  }