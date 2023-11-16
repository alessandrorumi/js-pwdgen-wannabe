// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.


// Esercizio

// Chiedi all’utente il suo nome
const userName = prompt('Qual è il tuo nome?');

// Chiedi il suo cognome
const userSurname = prompt('Qual è il tuo cognome?');

// Chiedi il suo colore preferito
const favoriteColor = prompt('Qual è il tuo colore preferito?');

// Scrivi sulla pagina nomecognomecolorepreferito23
document.getElementById("passwordGenerator").innerHTML = userName + userSurname + favoriteColor + 23;