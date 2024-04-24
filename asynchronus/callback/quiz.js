const parent = (a, b, model) => {
    let plus = `${a} ${b}`;
    setTimeout(() => {
        model(plus)
    }, 3000);
}

function child(d) {
    setTimeout(() => {
        console.log("ini text call back ", d);
    }, 1000);
}

// ini text call back  javascript es 6 
parent("javascript", "es 6", (textPlus) => { child(textPlus) })