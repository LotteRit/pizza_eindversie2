console.log ("Lotte's pizzeria")

// Bron: Zus van Andrea Beglarian (van een afbeelding een button maken en wanneer er op word geklikt word er een andere afbeelding zichtbaar word)
// https://stackoverflow.com/questions/67497327/how-can-i-add-an-image-to-javascript-after-a-button-click
let buttonDeeg = document.getElementById("buttonDeeg").addEventListener("click",veranderDeeg);
let bodemImage = document.getElementById("pizzaBodem")

function veranderDeeg(){
bodemImage.hidden = !bodemImage.hidden;
}

let buttonSaus = document.getElementById("buttonSaus").addEventListener("click", veranderSaus);
let sausImage = document.getElementById("sausOpmaak")

function veranderSaus(){
sausImage.hidden = !sausImage.hidden;    
}

let buttonKaas = document.getElementById("buttonKaas").addEventListener("click", veranderKaas);
let kaasImage = document.getElementById("kaasOpmaak")

function veranderKaas(){
    kaasImage.hidden = !kaasImage.hidden
}

let buttonSalami = document.getElementById("buttonSalami").addEventListener("click", veranderSalami);
let salamiImage = document.getElementById("salamiOpmaak")

function veranderSalami(){
    salamiImage.hidden = !salamiImage.hidden
}

let buttonBasilicum = document.getElementById("buttonBasilicum").addEventListener("click", veranderBasilicum);
let basilicumImage = document.getElementById("basilicumOpmaak")

function veranderBasilicum(){
    basilicumImage.hidden = !basilicumImage.hidden
}

let buttonOlijven = document.getElementById("buttonOlijven").addEventListener("click", veranderOlijven);
let olijvenImage = document.getElementById("olijvenOpmaak")

function veranderOlijven(){
    olijvenImage.hidden = !olijvenImage.hidden
}

let ingredienten = document.querySelectorAll(".voorbeeld") 

ingredienten.forEach( (ingredient) => {
    let waarde = Math.random()
    if (waarde > 0.6) {
        ingredient.hidden = true
    }
}) 










