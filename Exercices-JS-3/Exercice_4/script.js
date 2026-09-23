let motDepasse = document.getElementById("password")
let verif = document.getElementById("confirmPassword")
const bouton = document.querySelector("button")

let bordure = document.querySelectorAll("input")

bouton.addEventListener("click",() => {
let valueMot = motDepasse.value
let valueVerif = verif.value
if (valueMot === valueVerif) {
    motDepasse.style.border = "3px solid green"
    verif.style.border = "3px solid green"
    console.log("cbn")
    
}else{
     motDepasse.style.border = "3px solid red"
    verif.style.border = "3px solid red"
    console.log("pasbn")
}

})
//si value === valueConfirm sinon border red