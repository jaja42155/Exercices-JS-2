const champ = document.getElementById("lastname")

champ.addEventListener("keyup", (event) => {if (event.key === "Enter") {
    alert(champ.value)
    console.log("sup")
    
}

})