function createKTP(umur) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            umur >= 17 ? resolve("KTP berhasil dibuat") : reject("KTP gagal dibuat") 
        }, 3000)
    })
}

function checkMarried(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            age >= 15 ? resolve("sudah menikah") : reject("belum menikah")
        }, 2000)
    })
}

createKTP(15)
    .then((result) => {
        console.log(result)
    }) 
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("checking done ... ")
    })


checkMarried(15)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("checking done ... ")
    })