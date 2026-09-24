let cube = document.querySelectorAll(".case")
let couleur = ["red", "blue", "green", "orange", "purple"]

cube.forEach(element => {
    element.addEventListener("click", () => {
        let index = Math.floor(Math.random() * couleur. length)

         element.style.backgroundColor = couleur[index]

        console.log("click")
    })
    
});