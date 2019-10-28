
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.
var numero1 = prompt('Inserisci il primo numero');
var numero2 = prompt('Inserisci il secondo numero');


console.log(numero1 + numero2);

if (numero1 > numero2){
    console.log('Il numero maggiore è', numero1);
    document.getElementById("mio_id").innerHTML = "Il numero maggiore è: " + numero1;
} else if (numero1 < numero2){
    console.log('Il numero maggiore è', numero2);
    document.getElementById("mio_id").innerHTML = "Il numero maggiore è: " + numero2;
} 
else {
    console.log('I numeri sono uguali', numero1, numero2);
    document.getElementById("mio_id").innerHTML = "I numeri sono uguali: " + numero1 + " " + numero2;
}