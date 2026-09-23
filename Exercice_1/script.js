const image = document.getElementById("image1")


image.addEventListener("mouseover", ()  => {
    image.src = "images/image1_2.jpg"
    
    console.log("toucher")
})

image.addEventListener("mouseout", ()  => {
    image.src = "images/image1.jpg"
    
    console.log("ssorti")
})