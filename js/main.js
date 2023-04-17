for (let i = 0; i < 100; i++) {
    let x = (i + 1)
    if (x % 3 == 0) {
        x = "Fiz"
    }else if (x % 5 == 0 ) {
        x = "Buz"
    }else if ((x % 3 == 0) && (x % 5 == 0)) {
        x = "FizBuz"
    }  
    console.log (x)
}