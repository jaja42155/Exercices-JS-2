let image = document.getElementById("image1")

image.addEventListener("mouseover",() => {
    image.style.border = "3px solid red"
})

image.addEventListener("mouseout",() => {
    image.style.border = ""
})