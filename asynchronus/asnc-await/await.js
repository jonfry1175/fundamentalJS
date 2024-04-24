function asyncSum1(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            result = num1 + num2
            if(result < 0) {
                reject('negative number')
            }
            resolve(result)
        }, 2000)    
    })
}

const asyncMultiply = (num1, num2,) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            result = num1 * num2
            resolve(result)
        }, 1000)
    })
}

const displayResult = (result) => {
    console.log(`your result is ${result}`)
}

asyncSum1(2, 3)
.then((result => {
    displayResult(result)
}))