// Agus memiliki sebuah mobil dengan spesifikasi berikut:

// Merek: Toyota ,
// Nama: Rush,
// Mesin 1500,
// Harga 200.000.000,
// Tahun 2023. 
// Jika gaji Agus menjadi Rp30.000.000 maka Agus membeli mobil dengan spesifikasi:

// Merek: Toyota ,
// Nama: Ayla,
// Mesin 1200,
// Harga 150.000.000,
// Tahun 2027.
//  Jika gaji Agus menjadi Rp 50.000.000 maka Agus membeli mobil dengan spesifikasi

// Merek: Toyota ,
// Nama: Fortuner, 
// Mesin 2000,
// Harga 500.000.000,
// Tahun 2027.

// Buatlah function bernama beliMobil yang memiliki 1 buah parameter yaitu gaji dan di dalamnya buatlah sebuah variable objectMobil sebagai output. Tentukan mobil yang dapat dibeli sehingga ketika function tersebut dipanggil akan mencetak informasi objectMobil setelah naik gaji.




function beliMobil(gaji) {
    let objectMobil = {
        Merek: "Toyota",
        Nama: "Rush",
        Mesin: 1500,
        Harga: 200000000,
        Tahun: 2023
    };

    if (gaji >= 50000000) {
        objectMobil = {
            Merek: "Toyota",
            Nama: "Fortuner",
            Mesin: 2000,
            Harga: 500000000,
            Tahun: 2027
        }
    } else if (gaji >= 30000000) {
        objectMobil = {
            Merek: "Toyota",
            Nama: "Ayla",
            Mesin: 1200,
            Harga: 150000000,
            Tahun: 2027
        }
    }
    return objectMobil
}


console.log(beliMobil(10000000))
