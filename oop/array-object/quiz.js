// biografi = [{
//     Nama: "Hamdi",
//     Umur: 26,
//     Alamat: {
//         Profinsi: "Jawa Barat",
//         Kota:"Bandung"
//     },
//     Pekerjaan: "Programmer",
// }, {
//     Nama: "Hamka",
//     Umur: 27,
//     Alamat: {
//         Profinsi: "DKI Jakarta",
//         Kota:"Jakarta Selatan"
//     },
//     Pekerjaan: "Wirausaha",
// }, ]
// const biografiLoop = biografi.map((value)=>value.Alamat)
// // console.log(biografiLoop)
// console.log(biografiLoop[0]);


const biografi = [{
    Nama: "Hamdi",
    Umur: 26,
    Alamat: {
        Profinsi: "Jawa Barat",
        Kota:"Bandung"
    },
    Pekerjaan: "Programmer",
}, {
    Nama: "Hamka",
    Umur: 27,
    Alamat: {
        Profinsi: "DKI Jakarta",
        Kota:"Jakarta Selatan"
    },
    Pekerjaan: "Wirausaha",
}, {
    Nama: "Rudi",
    Umur: 27,
    Alamat: {
        Profinsi: "Jawa Tengah",
        Kota:"Semarang"
    },
    Pekerjaan: "Wiraswasta",
}]
const biografiPop = biografi.pop((value)=>value.Alamat[0])
// const biografiPop = biografi.pop()
console.log(biografiPop);
// console.log(biografi)


// // const listLaptop = [{
// //     Processor: "I7 13700",
// //     GPU: "RTX 4060",
// //     RAM: "16",
// //     Internal:"512",
// //     Harga: 23_000_000
// // },{
// //     Processor: "Ryzen 7840HS",
// //     GPU: "RTX 4060",
// //     RAM: "16",
// //     Internal:"512",
// //     Harga: 22_000_000
// // },{
// //     Processor: "Ryzen 7840HS",
// //     GPU: "RTX 4050",
// //     RAM: "8",
// //     Internal:"512",
// //     Harga: 18_000_000
// // }]
// // const listLaptopSearch = listLaptop.filter((value)=>value[0])
// // console.log(listLaptopSearch);
