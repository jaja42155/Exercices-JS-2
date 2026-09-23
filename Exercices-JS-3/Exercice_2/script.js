let lien = document.querySelectorAll("a")
let ecriture = document.getElementById("text")

lien.forEach(element => {
    element.addEventListener("click",() => { 
        if (element.textContent === "Masquer") {
            ecriture.style.display = "none"
        }else{
             ecriture.style.display = ""

        }

        
    })
    
});