function one () {
    setTimeout(() => {
        console.log('Function one Done')
    }, 3000)
}

function two () {
    setTimeout(() => {
        console.log('Function two Done')
    }, 2000)
}

function three () {
    setTimeout(() => {
        console.log('Function three Done')
    }, 1000)
}

one()
two()
three()
