const cont = document.getElementById("container")
for (let i = 0; i < 100; i++) {
    let x = (i + 1)
    let cardColor = "purple"
    let multiploTre = (x % 3)
    let multiploCinque = (x % 5)
    if (multiploTre == 0 && multiploCinque == 0) {
        x = "FizBuz"
        cardColor = "red"
    }else if (multiploTre == 0) {
        x = "Fiz"
        cardColor = "green"
    }else if (multiploCinque == 0 ) {
        x = "Buz"
        cardColor = "blue"
    }

    cont.innerHTML += `<div class="card ${cardColor}"> ${x} </div>`
     
}