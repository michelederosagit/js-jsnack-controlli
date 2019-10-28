// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
var parola1 = prompt('Inserisci una parola');
var parola2 = prompt('Inserisci un\'altra parola');

if (parola1.lenght > parola2.lenght){
    console.log('La parola più lunga è ', parola1);
    document.getElementById("lunga").innerHTML = "La parola più lunga è " + parola1;
    document.getElementById("corta").innerHTML = "La parola più corta è " + parola2;

    console.log('La parola più lunga è ', parola1);
    console.log('La parola più corta è ', parola2);
}
else {
    console.log('La parola più lunga è ', parola2);
    document.getElementById("lunga").innerHTML = "La parola più lunga è " + parola2;
    document.getElementById("corta").innerHTML = "La parola più corta è " + parola1;

    console.log('La parola più lunga è ', parola2);
    console.log('La parola più corta è ', parola1);
}