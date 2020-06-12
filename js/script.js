//input nome

var nome = prompt ("Il tuo nome:")

//input cognome

var cognome = prompt("Il tuo cognome:")

//input colore

var colore = prompt ("Il tuo colore preferito:")

//output dell'utente

document.getElementById("name").innerHTML = nome;

document.getElementById("surname").innerHTML = cognome;

document.getElementById("color").innerHTML = colore;

//generamento password

var password = nome + cognome + colore;

//output password

document.getElementById("result").innerHTML = password;
