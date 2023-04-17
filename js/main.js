for (let i = 0; i < 100; i++) {
    let x = (i + 1)
    let multiploTre = (x % 3)
    let multiploCinquie = (x % 5)
    const cont = document.getElementById("container")
    if (multiploTre == 0 && multiploCinquie == 0) {
        cont.innerHTML += `<div class="card red"> FizBuz </div>`
    }else if (multiploTre == 0) {
        cont.innerHTML += `<div class="card green"> Fiz </div>`
    }else if (multiploCinquie == 0 ) {
        cont.innerHTML += `<div class="card blue"> Buz </div>`
    }else {
        cont.innerHTML += `<div class="card purple"> ${x} </div>`
    } 
}