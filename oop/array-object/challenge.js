/**
 * a. Processor: "Ex 2100"

   Type: "S21 Ultra"
  Variant: RAM: 12,Internal: 256 dan RAM: 16, Internal:512
  Tahun: 2021

b. Processor: "SD 8 Gen 1"
  Type: "S22 Ultra"
  Variant:RAM: "12", Internal:"256" dan RAM: "12",Internal:"512"
  Tahun: 2022

c. Processor: "SD 8 Gen 2 for Galaxy"
  Type: "S23 plus"
  Variant:RAM: "8", Internal:"256" dan RAM: "8",Internal:"512"
  Tahun: 2023

d. Processor: "SD 8 Gen 2 for Galaxy"
    Type: "S23 Ultra"
    Variant:RAM: "12", Internal:"256" dan RAM: "12",Internal:"512"
    Tahun: 2023
 */

const handPhone = [
    {
        Processor: "Ex 2100",
        Type: "S21 Ultra",
        Variant: [{ RAM: 12, Internal: 256 }, { RAM: 16, Internal: 512, }],
        Tahun: 2021
    }, {
        Processor: "SD 8 Gen 1",
        Type: "S22 Ultra",
        Variant: [{ RAM: "12", Internal: "256" }, { RAM: "16", Internal: "512", }],
        Tahun: 2022
    }, {
        Processor: "SD 8 Gen 2 for Galaxy",
        Type: "S23 plus",
        Variant: [{ RAM: "8", Internal: "256" }, { RAM: "8", Internal: "512", }],
        Tahun: 2023
    }, {
        Processor: "SD 8 Gen 2 for Galaxy",
        Type: "S23 Ultra",
        Variant: [{ RAM: "12", Internal: "256" }, { RAM: "12", Internal: "512", }],
        Tahun: 2023
    }
]



// const filteredRam8 = handPhone.filter((phone) => phone.Variant.RAM == 8)

const getProcessorWithRAM8 = () => {
    const processor = []
    handPhone.forEach((phone) => {
        const variantHp = phone.Variant
        variantHp.forEach((hp) => {
            if (hp.RAM == 8) {
                processor.push(phone.Processor)
            }
        })
    })
    return processor
}

// const getProcessorWithRAM8  = () => {
//     let datax = [];
    
//     for (let i = 0; i < handPhone.length; i++) {
//         const valueHp = handPhone[i]
//         const variantHp = valueHp.Variant

//         for (let j = 0; j < variantHp.length; j++) {
//             if (variantHp[j].RAM == "8") {
//                 datax.push(valueHp.Processor);
//             }
//         }
//     }
//     return datax;
// }

console.log(getProcessorWithRAM8())

