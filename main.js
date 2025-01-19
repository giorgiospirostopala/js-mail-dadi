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

_DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


TASK MAIL:
- crea un array con le email di tutti gli invitati
- crea un prompt per far digitare all'utente la sua mail
- verifica se la mail inserita è presente o meno nell'array-lista
    - se si o se no, comunica l'esito all'utente con un console.log (ciclo for)

*/


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
        break; // aggiungo un break per fermare il ciclo una volta trovata la mail
    } else {
        emailPresente = false;
    }

}

//stampo l'esito della verifica AL DI FUORI DEL CICLO
if (emailPresente == true){
    console.log(`La tua email è presente in lista. Sei stato invitato.`)
} else {
    console.log(`La tua email non è presente in lista. Non sei stato invitato.`)
}