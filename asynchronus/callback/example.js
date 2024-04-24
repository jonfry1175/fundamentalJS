const asyncSum = (num1, num2, cb) => {
    setTimeout(() => {
        let result;
        result = num1 + num2
        console.log('sum is done')
        cb(result)
    }, 2000)
}

const asyncMultiply = (num1, num2, cb) => {
    setTimeout(() => {
        let result;
        result = num1 * num2
        console.log('multiply is done')
        cb(result)
    }, 1000)
}

const asyncsubstract = (num1, num2, cb) => {
    setTimeout(() => {
        let result;
        result = num1 - num2
        console.log('substaract is done')
        cb(result)
    }, 5000)
}

const asyncDivide = (num1, num2, cb) => {
    setTimeout(() => {
        let result;
        result = num1 / num2
        console.log('divide is done')
        cb(result)
    }, 4000)
}


const displayResult = (result) => {
    console.log(`your result is ${result}`)
}




// 2 + 3 = 5, 5 * 2 = 10
// sumResult = 5
// result = sumResult * 2
// multiplyResult = result
asyncSum(2, 3, sumResult => {
    asyncMultiply(sumResult, 2, multiplyResult => {
        asyncsubstract(multiplyResult, 2, (substractResult) => {
            asyncDivide(substractResult, 2, (divideResult) => {
                displayResult(divideResult)
            })
        })
    })
})
