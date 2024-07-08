// denominazione variabili
let buttonElement
let formElement
let prezzoBiglietto
let sconto
let prezzoTotale

// Richiamo variabili dal DOM e assegnazione
buttonElement = document.getElementById('calcola')
formElement = document.getElementById('form-km')

// recupero input dal DOM
const inputKmElement = document.getElementById('km')
const inputEtaElement = document.getElementById('eta')


formElement.addEventListener('submit', function (event){
    // togliamo l'evento Submit dal form
    event.preventDefault()

    // recuperiamo input km
    const km = parseFloat (inputKmElement.value) //number
    console.log(km)

    // recuperiamo input eta
    const eta = parseFloat (inputEtaElement.value) //number
    console.log(eta)

    // calcoliamo il prezzo del biglietto
    prezzoBiglietto = km * 0.21

    // calcoliamo lo sconto con una condizione
    if (eta < 18) {
        sconto = prezzoBiglietto * 0.20

    } else if (eta > 65) {
        sconto = prezzoBiglietto * 0.40
    } else {
        sconto = 0
    }

    // calcoliamo il prezzo del biglietto
    prezzoTotale = prezzoBiglietto - sconto
})
