const champ = document.getElementById("lastname")

champ.addEventListener("keyup", (event) => {if (event.key === "a") {
    alert(champ.value)
    console.log("touche")
    
}

})