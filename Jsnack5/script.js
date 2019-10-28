// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.
var numeri;

var listarray = [];


for (var i = 0; i<6; i++){
    var numeri = parseInt(prompt("Inserisci un numero"));
    console.log(numeri);

    if(numeri % 2 == 0){
      console.log("Pari");
      document.getElementById("risultato").innerHTML = "Non hai inserito numeri dispari";
    } else{
      console.log("Dispari");
      listarray.push(numeri);
      document.getElementById("risultato").innerHTML = "I numeri dispari da te inseriti sono: " + listarray;
    }
  }

  console.log(listarray);



