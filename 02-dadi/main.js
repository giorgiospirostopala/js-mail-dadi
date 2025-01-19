/* 

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

TASK DADI:
- chiedo al programma di generare 2 numeri random compresi fra 1 a 6:
    - 1 numero random da 1 a 6 da assegnare al Giocatore;
    - 1 numero random da 1 a 6 da assegnare al Computer;
- chiedo al programma di indicarmi quale dei due è il numero maggiore
- determino che il numero maggiore uscito stabilisce il vincitore fra i due e stampo l'esito */

//creo le variabili num1 e num2 usando Math.floor(Math.random() per generare i numeri
const numPlayer = Math.floor(Math.random() * 6) + 1;
const numComputer = Math.floor(Math.random() * 6) + 1;

//stampo i risultati
console.log(`${numPlayer} è il numero casuale scelto per il Giocatore.`);
console.log(`${numComputer} è il numero casuale scelto per il Computer.`);

//creo i vari if coi console.log annessi
if (numPlayer > numComputer){
    console.log(`${numPlayer} è il numero più grande. Vince il Giocatore.`)
} else if (numComputer > numPlayer){
    console.log(`${numComputer} è il numero più grande. Vince il Computer.`)
} else{
    console.log(`Sono usciti due numeri uguali. Pareggio.`)
}

