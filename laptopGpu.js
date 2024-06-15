/**
 * Buatlah suatu function bernama laptopGpu yang menerima 2 parameter, dimana parameter itu berupa array bernama laptop dan  gpu.  sehingga ketika kode dijalankan akan mencetak output seperti berikut :
[ '{acer dengan gpu 4050}', '{asus dengan gpu 4060}', '{axioo dengan gpu 4070}',  '{hp dengan gpu 4080}',  '{lenovo dengan gpu 4090}']
 
 */

let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

let gpu = [4070, 4090, 4050, 4080, 4060];


const laptopGpu = (valLap, valGpu) => {
    valLap.sort();
    valGpu.sort();
    const result = [];
    for(let i = 0; i < valLap.length && i < valGpu.length; i ++) {
        result.push(`{${valLap[i]} dengan gpu ${valGpu[i]}}`)   
    }
    return result
}


console.log(laptopGpu(laptop,gpu));
