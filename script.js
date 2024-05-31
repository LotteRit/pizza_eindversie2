console.log ("Lotte's pizzeria")


let buttonDeeg = document.getElementById("buttonDeeg")
let bodemImage = document.getElementById("pizzaBodem")

buttonDeeg.addEventListener("click",veranderDeeg);


let buttonSaus = document.getElementById("buttonSaus")
let sausImage = document.getElementById("sausOpmaak")

buttonSaus.addEventListener("click", veranderSaus);


let buttonKaas = document.getElementById("buttonKaas")
let kaasImage = document.getElementById("kaasOpmaak")

buttonKaas.addEventListener("click", veranderKaas);


let buttonSalami = document.getElementById("buttonSalami")
let salamiImage = document.getElementById("salamiOpmaak")

buttonSalami.addEventListener("click", veranderSalami);

let buttonBasilicum = document.getElementById("buttonBasilicum")
let basilicumImage = document.getElementById("basilicumOpmaak")

buttonBasilicum.addEventListener("click", veranderBasilicum);

let buttonOlijven = document.getElementById("buttonOlijven")
let olijvenImage = document.getElementById("olijvenOpmaak")

buttonOlijven.addEventListener("click", veranderOlijven);


let berichtElement = document.querySelector("#bericht")
let ovenButton = document.querySelector("#oven").addEventListener("click", berichtVeranderen)

let ingredienten = document.querySelectorAll(".voorbeeld") 

ingredienten.forEach( (ingredient) => {
    let waarde = Math.random()
    if (waarde > 0.6) {
        ingredient.hidden = true
    }
}) 

function veranderDeeg(){
    bodemImage.hidden = !bodemImage.hidden;
    }

function veranderSaus(){
        sausImage.hidden = !sausImage.hidden;    
        }
        
function veranderKaas(){
            kaasImage.hidden = !kaasImage.hidden
        }

 function veranderSalami(){
            salamiImage.hidden = !salamiImage.hidden
        }

function veranderBasilicum(){
            basilicumImage.hidden = !basilicumImage.hidden
        }

 function veranderOlijven(){
            olijvenImage.hidden = !olijvenImage.hidden
        }

function berichtVeranderen(){
    berichtElement.textContent= "Heel goed gedaan! Bedankt voor je hulp!!"; 
    berichtElement.hidden = !berichtElement.hidden
}










