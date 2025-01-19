/* 

_MAIL
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email

*/

/* TASK MAIL:
- crea un array con le email di tutti gli invitati
- crea un prompt per far digitare all'utente la sua mail
- verifica se la mail inserita è presente o meno nell'array-lista
    - se si o se no, comunica l'esito all'utente con un console.log (ciclo for) */

//creo l'array
const invitati = ["bianco@gmail.com", "giallo@yahoo.it", "nero@gmail.com"];

//creo il prompt per l'inserimento email
let emailUtente = prompt(`Inserisci la tua email`);

//non potendo usare .includes(), creo un ciclo per effettuare il controllo
let emailPresente = false;
for (let i = 0; i < invitati.length; i++){

    if (invitati[i] == emailUtente){
        //se la mail è presente, allora:
        emailPresente = true;
        // l'uso di break è una forzatura e non è consigliato, era sufficiente rimuovere l'else in questo caso.
    }

}

//stampo l'esito della verifica AL DI FUORI DEL CICLO
if (emailPresente == true){
    console.log(`La tua email è presente in lista. Sei stato invitato.`)
} else {
    console.log(`La tua email non è presente in lista. Non sei stato invitato.`)
}
