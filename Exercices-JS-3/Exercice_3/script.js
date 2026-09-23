let ecriture = document.getElementById("text")

let color = document.querySelectorAll(".color")

color.forEach(element => {
    element.addEventListener("click", () => {
       let couleur = element.classList[2]
       ecriture.style.color = couleur

    })
})