function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function one Done')
        }, 4000)
    })
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function two Done')
        }, 2000)

    })
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function three Done')
        }, 5000)
    })
}

one()
.then((result) => {
    console.log(result)
    return two()
})
.then((result2) => {
    console.log(result2)
    return three()
})
.then((result3) => {
    console.log(result3)
})
