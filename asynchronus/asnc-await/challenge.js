/**
 * 
Untuk melengkapi code diatas, anda harus membuat :

-  function infoSaldo  yang menerima parameter object user untuk mengecek apakah terdapat properti saldo pada object user, jika ada akan mengembalikan promise berupa object user, jika tidak ada akan memberikan pesan Gagal mendapatkan info saldo  . 

- function getInfoPengguna yang menerima parameter object user, dan menggunakan async await untuk mengecek data saldo dengan memanggil function infosaldo. apabila success, maka akan mencetak kalimat :

Nama Park Doe memiliki sisa saldo 3000000

jika gagal, maka mencetak pesan error yang didapat 

 */


user = { name: "Park Doe", saldo: 3000000 }

// lengkapi code kamu disini

function infoSaldo(user) {
    return new Promise((resolve, reject) => {
        if (user.saldo) {
            resolve(user)
        } else {
            reject("Gagal mendapatkan info saldo")
        }
    })
}

async function getInfoPengguna(user) {
    try {
        const userSaldo = await infoSaldo(user)
        console.log(`${userSaldo.name} memiliki sisa saldo ${userSaldo.saldo}`)
    } catch (error) {
        console.log(error)
    }
}

// getInfoPengguna(user);

// testing fetch data

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

