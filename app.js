// denominazione variabili
let kmElement
let etaElement
let buttonElement
let formElement

// Richiamo variabili dal DOM e assegnazione
kmElement = parseFloat (document.getElementById('km')) // number
etaElement = parseFloat (document.getElementById('eta')) // number
buttonElement = document.getElementById('calcola')
formElement = document.getElementById('form-km')

// togliamo l'evento Submit dal form
formElement.addEventListener('submit', function (event){
    event.preventDefault()
    console.log('submit', event)
})
