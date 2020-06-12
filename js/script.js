//input nome

var nome = prompt ("Nome:")

//input cognome

var cognome = prompt("Cognome:")

//input colore

var colore = prompt ("Colore:")

//inserimento input

document.getElementById("name").innerHTML = nome;

document.getElementById("surname").innerHTML = cognome;

document.getElementById("color").innerHTML = colore;

//generamento password

var password = nome + cognome + colore;

//inserimento password

document.getElementById("result").innerHTML = password;
