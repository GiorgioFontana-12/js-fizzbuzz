for (let i = 0; i < 100; i++) {
    let x = (i + 1)
    let multiploTre = (x % 3)
    let multiploCinquie = (x % 5)
    if (multiploTre == 0) {
        x = "Fiz"
    }else if (multiploCinquie == 0 ) {
        x = "Buz"
    }else if (multiploTre == 0 && multiploCinquie == 0) {
        x = "FizBuz"
    }  
    console.log (x)
}