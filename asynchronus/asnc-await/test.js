const user = { name: "Park Doe", saldo: 3000000 }

function infoSaldo(user) {
    return new Promise((resolve, reject) => {
        if (user?.saldo) {
            resolve(user)
        }
        else { reject("Gagal mendapatkan info saldo") }
    })
}

infoSaldo().then((user) => {
    console.log(`user info ${user}`)
})
    .catch((err) => {
        console.log(`ERORR ${err}`)
    })

// getInfoPengguna(user);