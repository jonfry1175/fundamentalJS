// const handPhone = [
//     {
//         processor: "Ex 2100", Type: "S21 Ultra", Variant:
//             { RAM: 12, Internal: 256, RAM: 16, Internal: 512, Tahun: 2021 }
//     }, {
//         processor: "SD 8 GEN 1", Type: "S22 Ultra", Variant:
//             { RAM: 12, Internal: 256, RAM: 12, Internal: 512, Tahun: 2022 }
//     }, {
//         processor: "SD 8 GEN 2 for Galaxy", Type: "S23 Plus", Variant:
//             { RAM: 8, Internal: 256, RAM: 8, Internal: 512, Tahun: 2023 }
//     }, {
//         processor: "SD 8 GEN 2 for Galaxy", Type: "S23 Ultra", Variant:
//             { RAM: 12, Internal: 256, RAM: 12, Internal: 512, Tahun: 2023 }
//     }]
// const index = 0;



// function filterYuk(valHandphone, index) {

//     const result = []

//     for (let i = 0; i < valHandphone.length; i++) {

//         if (valHandphone[i].Variant === index) {

//             result.push(valHandphone)
//         }
//         return result;
//     }
// }

// const getProcessorWithRAM8 = filterYuk(handPhone, index);
// console.log(getProcessorWithRAM8)



// property punya key dan value

const contohObject = {
    processor: "Ex 2100", Type: "S21 Ultra", Variant:
        { RAM: 12, Internal: 256, RAM: 16, Internal: 512, Tahun: 2021 }
}

const constohArrofObj = [
    {
        processor: "Ex 2100", Type: "S21 Ultra", Variant:
            { RAM: 12, Internal: 256, RAM: 16, Internal: 512, Tahun: 2021 }
    }, {
        processor: "SD 8 GEN 1", Type: "S22 Ultra", Variant:
            { RAM: 12, Internal: 256, RAM: 12, Internal: 512, Tahun: 2022 }
    }
]
//array
const name = ["budi", "doni", "joko", "jono"]

//object

const dataSiswa = {
    name: "budi",
    age: null,
    isMarried: false
}

// array of object
const siswa = [
    {
        name: "budi",
        age: null,
        isMarried: false
    }, {
        name: "doni",
        age: null,
        isMarried: false
    }, {
        name: "joko",
        age: null,
        isMarried: false
    }
]

// object of object
const siswa2 = {
    budi: {
        name: "budi",
        age: null,
        isMarried: false
    }, doni: {
        name: "doni",
        age: null,
        isMarried: false
    }, joko: {
        name: "joko",
        age: null,
        isMarried: false
    }
}

// console.log(contohObject)
console.log(dataSiswa)