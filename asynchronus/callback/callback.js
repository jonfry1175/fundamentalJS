function one (cb) {
    setTimeout(() => {
        console.log('Function one Done')
        cb()
    }, 3000)
}

function two (cb) {
    setTimeout(() => {
        console.log('Function two Done')
        cb()
    }, 2000)
}

function three () {
    setTimeout(() => {
        console.log('Function three Done')
    }, 1000)
}

one(() => {
    two(() => {
        three()
    })
    
})
