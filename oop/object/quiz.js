// const laptopGame = {
//     Processor: "I7 13700",
//     GPU: "RTX 4060",
//     Merk: "Lenovo",
//     Type: "Legion",
//     Harga: 21_000_000
// }
// laptopGame.Harga = 23_500_000;
// console.log(laptopGame.Harga);

const rumah = {
    Panjang: 25,
    Lebar: 10,
    Alamat: {
        Provinsi: "DKI Jakarta",
        Kota: "Jakarta Selatan",
        Kecamatan: "Pasar Minggu"
    },
    Harga: 1_500_000_000,
    Cicilan: 30_000_000,
    DP: 200_000_000
}

// delete= menghapus property
rumah.Alamat.Kecamatan="Ciracas"
delete rumah.Alamat.Kecamatan
rumah.Alamat.Kota="Jakarta Timur"
console.log(rumah.Alamat)