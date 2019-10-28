// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// Chiedi all’utente il Nome,
usrname = prompt("Inserisci il tuo nome");
console.log(usrname);
// Lista degli invitati
var invitati = ["Marco","Pasquale","Michele","Nicola"];
console.log(invitati);

// Controllo
found = false;

for (i = 0; i < invitati.length; i++){
  
  if(usrname === invitati[i]){
    found = true;
  }
}
    
if (found === true) {
    console.log("Sei invitato");
} else {
console.log("Mi dispiace, non sei invitato.")
}