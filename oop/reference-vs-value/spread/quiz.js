// // let week = 7;
// // week = 14;
// // let day = week;
// // day = 28
// // console.log(day);

// const listLaptop = [{
//     Processor: "I7 13700",
//     GPU: "RTX 4060",
//     Merk: "Lenovo",
//     RAM: "16",
//     Internal:"512",
//     Type: "Legion Slim 5i",
//     Harga: 23_000_000
// },{
//     Processor: "Ryzen 7840HS",
//     GPU: "RTX 4060",
//     Merk: "Lenovo",
//     RAM: "16",
//     Internal:"512",
//     Type: "Legion Slim 5",
//     Harga: 22_000_000
// }]
// const laptopLenovo ={
//     Processor: "i9 13900",
//     GPU: "RTX 4080",
//     Merk: "Lenovo",
//     RAM: "32",
//     Internal:"2000",
//     Type: "Legion 5i Pro",
//     Harga: 38_099_000
// }
// const laptopSpread = [...listLaptop, ...laptopLenovo];
// console.log(laptopSpread)

const mobil = {
    brand: 'Honda',
    model: 'City',
    tahun: 2021,
    color: 'red'
}
console.log(myCar());
function myCar({
    tahun,
    warna,
    brand,
    model
}) {
    const message = 'My Car' + ' is a ' + tahun + warna + ' ' + brand + ' ' + model + '.';
}


